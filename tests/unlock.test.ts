import assert from 'node:assert/strict';
import test from 'node:test';
import { deriveProgress, parseProgress, recordResult, toggleAccessMode, totalStars } from '../src/game/progress';

test('manual unlock survives saving and later results without fabricating scores', () => {
  const best = { 1: { score: 8, stars: 2 } };
  const unlocked = parseProgress(JSON.stringify(deriveProgress(best, 'all-levels')));
  assert.equal(unlocked.unlockedLevels.length, 100);
  assert.ok(unlocked.chapters.every((pack) => pack.unlocked));
  assert.deepEqual(unlocked.best, best);
  assert.equal(totalStars(unlocked.best), 2);
  const finished = parseProgress(JSON.stringify(recordResult(unlocked, 100, 5)));
  assert.equal(finished.unlockedLevels.length, 100);
  assert.equal(finished.best[100].stars, 1);
  assert.equal(totalStars(finished.best), 3);
});

test('old saves keep normal progression and only a boolean true enables the unlock', () => {
  for (const flag of [undefined, false, 'true', 1]) {
    const progress = parseProgress(JSON.stringify({ version: 1, best: {}, allLevelsUnlocked: flag }));
    assert.deepEqual(progress.unlockedLevels, [1]);
    assert.equal(progress.chapters.filter((pack) => pack.unlocked).length, 1);
  }
});

test('switching modes repeatedly preserves earned progress and restores normal gates', () => {
  const original = deriveProgress({ 1: { score: 8, stars: 2 } });
  let progress = original;
  for (let i = 0; i < 10; i++) {
    progress = toggleAccessMode(progress);
    assert.equal(progress.accessMode, 'all-levels');
    assert.equal(progress.unlockedLevels.length, 100);
    progress = parseProgress(JSON.stringify(toggleAccessMode(progress)));
    assert.deepEqual(progress, original);
  }
  const earned = recordResult(toggleAccessMode(original), 100, 8);
  const normal = toggleAccessMode(earned);
  assert.deepEqual(normal.best, earned.best);
  assert.equal(totalStars(normal.best), 4);
  assert.deepEqual(normal.unlockedLevels, deriveProgress(earned.best).unlockedLevels);
  assert.throws(() => recordResult(normal, 99, 10), /locked/);
  assert.equal(original.best[100], undefined);
});

test('legacy manual unlock migrates and explicit normal mode takes precedence', () => {
  const legacy = { version: 1, best: {}, allLevelsUnlocked: true };
  assert.equal(parseProgress(JSON.stringify(legacy)).accessMode, 'all-levels');
  assert.equal(parseProgress(JSON.stringify({ ...legacy, accessMode: 'normal' })).accessMode, 'normal');
});
