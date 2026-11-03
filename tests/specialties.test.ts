import assert from 'node:assert/strict';
import test from 'node:test';
import { levels } from '../src/game/levels';
import { levelSpecialties } from '../src/game/specialties';
import { createLocalization } from '../src/localization/core';
import { createQuestion } from '../src/game/questions';

test('specialties reflect actual level settings and have English and German text', async () => {
  const i18n = createLocalization();
  for (const language of ['en', 'de']) {
    await i18n.changeLanguage(language);
    for (const level of levels) {
      const { keys, rareInstruments } = levelSpecialties(level);
      assert.equal(keys.includes(level.playback), level.playback !== 'ascending');
      assert.equal(keys.includes(`choices${level.choices}`), level.choices !== 2);
      assert.equal(keys.includes('fast'), level.speed === 'fast');
      assert.equal(keys.includes('harmonic'), level.playback === 'harmonic');
      assert.equal(keys.includes('compound'), level.intervals.some((interval) => interval > 12));
      for (const key of keys) assert.ok(i18n.exists(`specialties.${key}`), `${language}: ${key}`);
      for (const program of level.instruments) {
        const count = levels.filter((item) => item.instruments.includes(program)).length;
        assert.equal(rareInstruments.includes(program), count <= 3);
      }
    }
  }
});

test('every level is exclusively harmonic or melodic across generated questions', () => {
  for (const level of levels) {
    for (let i = 0; i < 50; i++) {
      assert.equal(createQuestion(level).playback === 'harmonic', level.playback === 'harmonic', `Level ${level.id}`);
    }
  }
});
