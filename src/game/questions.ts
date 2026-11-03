import catalog from '../audio/catalog.json';
import type { Playback } from '../audio/player';
import type { LevelConfig, Question } from './types';

export const instruments: Record<number, { name: string; minMidi: number; maxMidi: number }> = catalog;
export type Random = () => number;
function index(length: number, rng: Random) {
  const value = rng();
  if (!Number.isFinite(value) || value < 0 || value >= 1) throw new Error('Random source must return [0, 1)');
  if (length < 1) throw new Error('Cannot select from an empty pool');
  return Math.floor(value * length);
}
export function shuffled<T>(input: readonly T[], rng: Random = Math.random): T[] {
  const result = [...input];
  for (let i = result.length - 1; i > 0; i--) {
    const j = index(i + 1, rng); [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export function notesFor(root: number, interval: number, playback: Playback): readonly [number, number] {
  return playback === 'descending' ? [root + interval, root] : [root, root + interval];
}

export function validateLevel(level: LevelConfig): string[] {
  const errors: string[] = [];
  if (!Number.isInteger(level.id) || level.id < 1 || level.id > 100) errors.push('Invalid ID');
  if (level.questionCount !== 10) errors.push('Every level needs ten questions');
  if (![2, 4, 6].includes(level.choices)) errors.push('Invalid answer count');
  if (new Set(level.intervals).size !== level.intervals.length || level.intervals.length < level.choices) errors.push('Insufficient or duplicate intervals');
  if (!['harmonic', 'ascending', 'descending', 'melodic'].includes(level.playback)) errors.push('Invalid playback');
  if (!['slow', 'normal', 'fast'].includes(level.speed)) errors.push('Invalid speed');
  if (!Number.isFinite(level.noteDurationMs) || level.noteDurationMs < 180 || level.noteDurationMs > 1200) errors.push('Invalid duration');
  if (![level.minMidiNote, level.maxMidiNote].every(Number.isInteger) || level.minMidiNote > level.maxMidiNote) errors.push('Invalid root range');
  if (!level.instruments.length || new Set(level.instruments).size !== level.instruments.length) errors.push('Invalid instrument pool');
  for (const interval of level.intervals) {
    if (!Number.isInteger(interval) || interval < 0 || interval > 36) errors.push('Invalid semitone interval');
    for (const program of level.instruments) {
      const instrument = instruments[program];
      if (!instrument) { errors.push(`Unknown program ${program}`); continue; }
      if (level.minMidiNote < instrument.minMidi || level.maxMidiNote + interval > instrument.maxMidi) {
        errors.push(`Program ${program} cannot cover root range with interval ${interval}`);
      }
    }
  }
  return errors;
}

export function createQuestion(level: LevelConfig, history: readonly number[] = [], rng: Random = Math.random): Question {
  const errors = validateLevel(level);
  if (errors.length) throw new Error(`Level ${level.id}: ${errors.join('; ')}`);
  // Small pools may repeat once, avoiding a predictable A/B/A/B answer pattern.
  const last = history.at(-1);
  const repeated = history.length >= 2 && last === history.at(-2);
  let candidates = level.intervals.filter((n) => !(n === last && (repeated || level.intervals.length > 2)));
  if (!candidates.length) candidates = [...level.intervals];
  // Cover the vocabulary before repeating it within a run. Binary lessons retain
  // their less predictable repetition rule above.
  const runHistory = history.slice(history.length - history.length % level.questionCount);
  if (level.intervals.length > 2) {
    const compounds = level.intervals.filter((n) => n > 12);
    const simpleCount = level.intervals.length - compounds.length;
    if (level.intervals.length > level.questionCount && compounds.length > 0 && compounds.length <= level.questionCount
      && simpleCount >= level.questionCount - compounds.length && runHistory.length) {
      const missingCompounds = level.intervals.filter((n) => n > 12 && !runHistory.includes(n));
      const remaining = level.questionCount - runHistory.length;
      candidates = missingCompounds.length && rng() < missingCompounds.length / remaining
        ? missingCompounds
        : candidates.filter((n) => n <= 12);
    }
    const count = (n: number) => runHistory.filter((previous) => previous === n).length;
    const leastPlayed = Math.min(...candidates.map(count));
    candidates = candidates.filter((n) => count(n) === leastPlayed);
  }
  const interval = candidates[index(candidates.length, rng)];
  const program = level.instruments[index(level.instruments.length, rng)];
  const root = level.minMidiNote + index(level.maxMidiNote - level.minMidiNote + 1, rng);
  const modes = ['ascending', 'descending'] as const;
  const playback = level.playback === 'melodic' ? modes[index(modes.length, rng)] : level.playback;
  const pool = [...level.intervals].sort((a, b) => a - b);
  // A compact answer set is shared by all its possible targets. No remote
  // filler is included only because a different option happens to be correct.
  const answerSets = pool.slice(0, pool.length - level.choices + 1)
    .map((_, start) => pool.slice(start, start + level.choices))
    .filter((choices) => choices.includes(interval));
  const choices = level.id > 20
    ? answerSets[index(answerSets.length, rng)]
    : [interval, ...shuffled(pool.filter((n) => n !== interval), rng).slice(0, level.choices - 1)].sort((a, b) => a - b);
  return Object.freeze({ interval, root, program, playback,
    notes: Object.freeze(notesFor(root, interval, playback)),
    choices: Object.freeze(choices),
  });
}

export type AnswerState = Readonly<{ question: Question; selected: number | null }>;
export function submitAnswer(state: AnswerState, answer: number): AnswerState {
  if (state.selected !== null || !state.question.choices.includes(answer)) return state;
  return { ...state, selected: answer };
}
