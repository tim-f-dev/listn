import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { AudioStatus } from 'expo-audio';
import { createNativeVoice } from '../src/audio/nativeVoice';
import { IntervalPlayer, type IntervalSound } from '../src/audio/player';

function nativePlayer() {
  let released = false;
  let releases = 0;
  let listener: ((status: AudioStatus) => void) | undefined;
  const touches: string[] = [];
  function touch(event: string) {
    assert.equal(released, false, `Native access after release: ${event}`);
    touches.push(event);
  }
  return {
    player: {
      volume: 1,
      isLoaded: true,
      addListener(_event: 'playbackStatusUpdate', callback: (status: AudioStatus) => void) {
        listener = callback;
        return { remove() { touch('unsubscribe'); listener = undefined; } };
      },
      async seekTo(_offset: number) { touch('seek'); },
      play() { touch('play'); },
      pause() { touch('pause'); },
      release() { touch('release'); released = true; releases++; },
    },
    emit(error: string | null) { listener?.({ error } as AudioStatus); },
    get releases() { return releases; },
    touches,
  };
}

const sound: IntervalSound = {
  program: 0, notes: [60, 67], playback: 'harmonic', speed: 'fast', noteDurationMs: 180,
};

test('native players are explicitly released after playback, including replay', async () => {
  const players: ReturnType<typeof nativePlayer>[] = [];
  const player = new IntervalPlayer({
    initialize: async () => {},
    create() {
      const native = nativePlayer(); players.push(native);
      return createNativeVoice(native.player, 5);
    },
  });
  await player.play(sound);
  await player.replay();
  assert.equal(players.length, 4);
  for (const native of players) {
    assert.equal(native.releases, 1);
    assert.deepEqual(native.touches.slice(-3), ['unsubscribe', 'pause', 'release']);
  }
});

test('rapid cancellation while native players load releases every player exactly once', async () => {
  const players: ReturnType<typeof nativePlayer>[] = [];
  const player = new IntervalPlayer({
    initialize: async () => {},
    create() {
      const native = nativePlayer(); native.player.isLoaded = false; players.push(native);
      return createNativeVoice(native.player, 5);
    },
  });
  const pending: Promise<void>[] = [];
  for (let attempt = 0; attempt < 100; attempt++) {
    pending.push(player.play(sound));
    await Promise.resolve(); // Allow creation, then cancel before loading completes.
  }
  player.stop();
  await Promise.all(pending);
  assert.equal(players.length, 200);
  assert.ok(players.every((native) => native.releases === 1));
  // A subsequent question still plays after all cancelled requests settle.
  players.length = 0;
  const recovery = player.play(sound);
  await Promise.resolve();
  players.forEach((native) => { native.player.isLoaded = true; });
  await recovery;
  assert.ok(players.every((native) => native.touches.includes('play') && native.releases === 1));
});

test('disposing during a fade prevents further native access', async () => {
  const native = nativePlayer();
  const voice = createNativeVoice(native.player, 5);
  const fade = voice.fadeOut();
  voice.dispose(); voice.dispose();
  await fade;
  await voice.ready(); await voice.play();
  assert.equal(native.releases, 1);
  assert.equal(native.touches.at(-1), 'release');
});

test('native decoder errors persist across subsequent normal status updates', async () => {
  const native = nativePlayer(); native.player.isLoaded = false;
  const voice = createNativeVoice(native.player, 5);
  native.emit('Decoder failed'); native.emit(null);
  await assert.rejects(voice.ready(), /Decoder failed/);
  voice.dispose();
  assert.equal(native.releases, 1);
});
