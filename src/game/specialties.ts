import { levels } from './levels';
import type { LevelConfig } from './types';

const instrumentFrequency = new Map<number, number>();
for (const level of levels) {
  for (const program of new Set(level.instruments)) {
    instrumentFrequency.set(program, (instrumentFrequency.get(program) ?? 0) + 1);
  }
}

/** Factual highlights from current settings, independent of historical lesson descriptions. */
export function levelSpecialties(level: LevelConfig) {
  const keys: string[] = [];
  if (level.playback !== 'ascending') keys.push(level.playback);
  if (level.choices !== 2) keys.push(`choices${level.choices}`);
  if (level.speed !== 'normal') keys.push(level.speed);
  if (level.instruments.length > 1) keys.push('changingInstruments');
  if (level.intervals.some((interval) => interval > 12)) keys.push('compound');
  const intervals = [...level.intervals].sort((a, b) => a - b);
  if (intervals.some((interval, index) => index > 0 && interval - intervals[index - 1] === 1)) keys.push('neighboring');
  if (level.maxMidiNote < 55) keys.push('low');
  else if (level.minMidiNote >= 72) keys.push('high');
  if (level.maxMidiNote - level.minMidiNote >= 24) keys.push('wideRegister');
  // Rare means used in at most three of the 100 configured levels.
  const rareInstruments = level.instruments.filter((program) => (instrumentFrequency.get(program) ?? Infinity) <= 3);
  return { keys, rareInstruments };
}
