import { test } from 'node:test';
import assert from 'node:assert/strict';
import { levels } from '../src/game/levels';
import { deriveProgress, parseProgress, ProgressStore, PROGRESS_KEY, recordResult, type Best } from '../src/game/progress';
import previousLevels from '../archive/curricula/pre-blasorchester-2026-11-10/levels.json';
import english from '../src/localization/levels.en.json';
import german from '../src/localization/levels.de.json';
import previousEnglish from '../archive/curricula/pre-blasorchester-2026-11-10/levels.en.json';
import previousGerman from '../archive/curricula/pre-blasorchester-2026-11-10/levels.de.json';

const same = (a: readonly number[], b: readonly number[]) => [...a].sort((x, y) => x - y).join(',') === [...b].sort((x, y) => x - y).join(',');

test('wind-band weights favour core instruments and keep string/electric guests rare', () => {
  const frequency = (program: number) => levels.filter((level) => level.instruments.includes(program)).length;
  for (const program of [56, 57, 60, 65, 71, 73]) assert.ok(frequency(program) >= 12, `Underused core instrument ${program}`);
  for (const program of [58, 64, 66, 67, 72]) assert.ok(frequency(program) >= 2, `Missing supporting wind ${program}`);
  const wind = new Set([56, 57, 58, 60, 64, 65, 66, 67, 68, 70, 71, 72, 73]);
  const share = levels.reduce((sum, level) => sum + level.instruments.filter((p) => wind.has(p)).length / level.instruments.length, 0);
  assert.ok(share >= 94);
  assert.equal(frequency(40), 1, 'Violin remains a rare guest');
  assert.equal(frequency(4), 1, 'Electric piano remains a rare guest');
});

test('opening contrasts vary, four answers begin early, and adjacent tasks change at least two dimensions', () => {
  assert.ok(!levels.slice(0, 20).some((level) => same(level.intervals, [0, 12])));
  assert.equal(levels[5].choices, 4);
  assert.equal(new Set(levels.slice(0, 5).map((level) => [...level.intervals].sort().join(','))).size, 5);
  for (let i = 1; i < levels.length; i++) {
    const before = levels[i - 1], level = levels[i];
    assert.ok(!level.instruments.some((p) => before.instruments.includes(p)), `Shared adjacent timbre ${level.id}`);
    const changes = [!same(before.instruments, level.instruments), !same(before.intervals, level.intervals),
      before.playback !== level.playback, before.speed !== level.speed || before.noteDurationMs !== level.noteDurationMs];
    assert.ok(changes.filter(Boolean).length >= 2, `Repetitive transition ${before.id}→${level.id}`);
  }
});

test('every revised slot has a new English and German name and its predecessor is archived', () => {
  assert.deepEqual(previousLevels.map((level) => level.id), levels.map((level) => level.id));
  for (const level of levels) {
    const key = String(level.id) as keyof typeof english;
    assert.equal(english[key].title, level.title);
    assert.notEqual(english[key].title, previousEnglish[key].title);
    assert.notEqual(german[key].title, previousGerman[key].title);
  }
  assert.equal(new Set(Object.values(german).map((level) => level.title)).size, 100);
});

test('old saves retain all earned results and gates after curriculum replacement and subsequent saves', async () => {
  const best: Record<number, Best> = Object.fromEntries(previousLevels.map(({ id }) => [id, { score: id % 11, stars: 0 }]));
  // Old save fields can contain obsolete metadata/derived values; the permanent
  // numbered best records are authoritative and need no curriculum-ID migration.
  const raw = JSON.stringify({ version: 1, best, appVersion: '1.1.0', unlockedLevels: [], chapters: [] });
  const expected = deriveProgress(parseProgress(raw).best);
  const storage = new Map([[PROGRESS_KEY, raw]]);
  const store = new ProgressStore({
    getItem: async (key) => storage.get(key) ?? null,
    setItem: async (key, value) => { storage.set(key, value); },
  });
  assert.equal(PROGRESS_KEY, 'listn.progress.v1');
  const loaded = await store.load();
  assert.equal(Object.keys(loaded.best).length, 100);
  assert.deepEqual(loaded, expected);
  for (const { id } of previousLevels) assert.equal(loaded.best[id].score, best[id].score);
  const updated = recordResult(loaded, 1, 10);
  await store.save(updated);
  assert.deepEqual(await store.load(), updated);
  for (const { id } of previousLevels.slice(1)) assert.deepEqual(updated.best[id], loaded.best[id]);
  const unlocked = deriveProgress(loaded.best, 'all-levels');
  await store.save(unlocked);
  assert.deepEqual(await store.load(), unlocked);
});
