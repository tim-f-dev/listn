import { Asset } from 'expo-asset';
import { createAudioPlayer, setAudioModeAsync } from 'expo-audio';
import { audioBanks, noteOffsets } from './assets';
import { IntervalPlayer, type Voice } from './player';
import { createNativeVoice } from './nativeVoice';

let initialization: Promise<void> | undefined;

export const intervalPlayer = new IntervalPlayer({
  initialize() {
    initialization ??= setAudioModeAsync({
      playsInSilentMode: true,
      shouldPlayInBackground: false,
      allowsRecording: false,
      interruptionMode: 'doNotMix',
    }).catch((error: unknown) => { initialization = undefined; throw error; });
    return initialization;
  },
  create(program, midi): Voice {
    const source = audioBanks[program];
    const offset = noteOffsets[program]?.[midi];
    if (!source || offset === undefined) throw new Error(`Missing audio: program ${program}, MIDI ${midi}`);
    const player = createAudioPlayer(source, { updateInterval: 50 });
    return createNativeVoice(player, offset);
  },
});

export async function preloadNotes(program: number, notes: readonly number[]) {
  const source = audioBanks[program];
  for (const midi of notes) {
    if (!source || noteOffsets[program]?.[midi] === undefined) throw new Error(`Missing sample ${program}/${midi}`);
  }
  if (notes.length) await Asset.fromModule(source).downloadAsync();
}
