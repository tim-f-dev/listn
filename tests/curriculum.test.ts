import { test } from 'node:test';
import assert from 'node:assert/strict';
import { levels } from '../src/game/levels';
import { createQuestion } from '../src/game/questions';

const seenIntervals = new Set<number>();
const seenInstruments = new Set<number>();
const introductions = new Set<number>();
const instrumentIntroductions = new Set<number>();
for (const level of levels) {
  if (level.instruments.some((n) => !seenInstruments.has(n))) instrumentIntroductions.add(level.id);
  if (level.intervals.some((n) => !seenIntervals.has(n)) || level.instruments.some((n) => !seenInstruments.has(n))) introductions.add(level.id);
  level.intervals.forEach((n) => seenIntervals.add(n));
  level.instruments.forEach((n) => seenInstruments.add(n));
}

test('curriculum progresses from spaced contrasts into sustained close comparisons', () => {
  assert.equal(levels.length, 100);
  assert.equal(new Set(levels.map((level) => level.title)).size, 100);
  for (const level of levels) {
    for (const interval of level.intervals) {
      const nearest = Math.min(...level.intervals.filter((n) => n !== interval).map((n) => Math.abs(n - interval)));
      if (level.id <= 20) assert.ok(nearest >= 2, `Beginner contrast ${level.id}`);
      if (level.id >= 24 && !introductions.has(level.id)) assert.equal(nearest, 1, `Isolated target ${interval} in level ${level.id}`);
    }
    if (level.id > 20) assert.ok(!level.intervals.includes(0));
    if (level.id <= 50) {
      assert.notEqual(level.speed, 'fast');
      assert.ok(level.choices <= 4);
    }
  }
});

test('advanced questions preserve close distractors across full ten-question runs', () => {
  let state = 20261103;
  const rng = () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
  for (const level of levels.filter((level) => level.id >= 24 && !introductions.has(level.id))) {
    const history: number[] = [];
    for (let i = 0; i < 100; i++) {
      const question = createQuestion(level, history, rng);
      assert.ok(question.choices.some((n) => Math.abs(n - question.interval) === 1), `Missing close distractor in ${level.id}`);
      history.push(question.interval);
      if (history.length === 10) history.length = 0;
    }
  }
});

test('new instruments and intervals have slow, spaced introductions', () => {
  for (const level of levels.filter((level) => introductions.has(level.id))) {
    assert.ok(level.choices <= 4, 'Choice overload at ' + level.id);
    assert.equal(level.speed, 'slow', 'Fast introduction at ' + level.id);
    assert.notEqual(level.playback, 'melodic', 'Changing direction at ' + level.id);
    assert.ok(level.maxMidiNote - level.minMidiNote <= 5, 'Root variation at ' + level.id);
    assert.ok(level.noteDurationMs >= 1000, 'Short notes at ' + level.id);
    for (const a of level.intervals) for (const b of level.intervals) {
      if (a !== b) assert.ok(Math.abs(a - b) >= 2 || level.choices === 2 && !instrumentIntroductions.has(level.id), 'Close introductory candidates at ' + level.id);
    }
  }
  const binary = levels.filter((level) => level.id > 20 && level.choices === 2);
  assert.ok(binary.length <= 4);
  assert.ok(binary.every((level) => introductions.has(level.id)));
});

test('final assessments cover all four compounds and six simple targets in every run', () => {
  let state = 12345;
  const rng = () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
  for (const level of levels.slice(-2)) {
    for (let run = 0; run < 100; run++) {
      const history: number[] = [];
      for (let i = 0; i < 10; i++) history.push(createQuestion(level, history, rng).interval);
      assert.deepEqual(history.filter((n) => n > 12).sort((a, b) => a - b), [13, 14, 15, 16]);
      assert.equal(new Set(history.filter((n) => n <= 12)).size, 6);
    }
  }
});
