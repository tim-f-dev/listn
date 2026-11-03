import { test } from 'node:test';
import assert from 'node:assert/strict';
import { levels } from '../src/game/levels';
import { createQuestion, validateLevel } from '../src/game/questions';
import { createLocalization, localizedInterval } from '../src/localization/core';

test('opening pack avoids neighboring intervals in every possible answer pool', () => {
  for (const level of levels.slice(0, 20)) {
    for (const a of level.intervals) for (const b of level.intervals) {
      if (a !== b) assert.ok(Math.abs(a - b) >= 2, `Level ${level.id}: ${a}/${b}`);
    }
  }
});

test('larger neighboring intervals wait until pack three; first fifty avoid speed and choice overload', () => {
  for (const level of levels.slice(0, 40)) {
    for (const a of level.intervals) for (const b of level.intervals) {
      if (Math.abs(a - b) === 1) assert.ok(Math.max(a, b) <= 5, `Level ${level.id}: ${a}/${b}`);
    }
  }
  for (const level of levels.slice(0, 50)) {
    assert.notEqual(level.speed, 'fast', `Level ${level.id}`);
    assert.ok(level.choices <= 4, `Level ${level.id}`);
  }
  const small = new Set(levels.slice(20, 40).flatMap((level) => [...level.intervals]));
  for (let n = 1; n <= 5; n++) assert.ok(small.has(n));
  for (const interval of [6, 9, 10, 11]) {
    const introduction = levels.find((level) => level.intervals.includes(interval));
    assert.ok(introduction);
    assert.ok(introduction.choices <= 4);
    assert.equal(introduction.speed, 'slow');
  }
});

test('neighboring final-pack ninths and tenths have valid audio and translated names', () => {
  const localization = createLocalization();
  for (const interval of [13, 14, 15, 16]) {
    assert.ok(!levels.slice(0, 80).some((level) => level.intervals.includes(interval)));
    const level = levels.slice(80).find((level) => level.intervals.includes(interval));
    assert.ok(level);
    assert.equal(level.choices, interval === 13 ? 2 : 4);
    assert.equal(level.speed, 'slow');
    assert.equal(level.playback, 'ascending');
    assert.deepEqual(validateLevel(level), []);
    assert.ok(level.intervals.filter((n) => n !== interval).every((n) => Math.abs(n - interval) >= 2));
    const offset = level.intervals.indexOf(interval);
    let first = true;
    const q = createQuestion(level, [], () => first ? (first = false, (offset + 0.5) / level.intervals.length) : 0.5);
    assert.equal(q.interval, interval);
    assert.equal(Math.abs(q.notes[1] - q.notes[0]), interval);
    for (const language of ['en', 'de']) {
      const name = localizedInterval(localization.getFixedT(language), interval);
      assert.ok(!name.includes('semitone') && !name.includes('Halbton') && !name.includes('intervals.'));
    }
  }
});
