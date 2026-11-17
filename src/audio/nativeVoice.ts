import type { AudioPlayer, AudioStatus } from 'expo-audio';
import type { Voice } from './player';

type NativePlayer = Pick<AudioPlayer, 'volume' | 'isLoaded' | 'seekTo' | 'play' | 'pause' | 'release'> & {
  addListener(event: 'playbackStatusUpdate', listener: (status: AudioStatus) => void): { remove(): void };
};

/** One exclusively owned native player, released on completion or cancellation. */
export function createNativeVoice(player: NativePlayer, offset: number): Voice {
  player.volume = 0.45; // Headroom for two simultaneous normalized notes.
  let disposed = false;
  let error: string | null = null;
  const listener = player.addListener('playbackStatusUpdate', (status) => { if (status.error) error = status.error; });
  return {
    async ready() {
      const started = Date.now();
      while (!disposed && !player.isLoaded) {
        if (error) throw new Error(error);
        if (Date.now() - started > 12000) throw new Error('Audio could not load. Please retry playback.');
        await new Promise((resolve) => setTimeout(resolve, 20));
      }
      if (!disposed) await player.seekTo(offset, 0, 0);
    },
    play() { if (!disposed) player.play(); },
    async fadeOut() {
      // Avoid discontinuities when a level uses a shorter duration than the sample.
      for (let step = 4; step >= 0 && !disposed; step--) {
        player.volume = 0.45 * step / 5;
        await new Promise((resolve) => setTimeout(resolve, 8));
      }
      if (!disposed) player.pause();
    },
    error: () => error,
    dispose() {
      if (disposed) return;
      disposed = true;
      try {
        listener.remove();
        player.pause();
      } finally {
        // SDK 58 Android remove() only unregisters the player. release() also
        // frees its decoder, ExoPlayer and update coroutine without waiting for GC.
        player.release();
      }
    },
  };
}
