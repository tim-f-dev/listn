import { writeFileSync } from 'node:fs';
import { levels } from '../src/game/levels';
import { instruments } from '../src/game/questions';
import { intervalName } from '../src/game/intervals';
import germanLevels from '../src/localization/levels.de.json';
import germanInstruments from '../src/localization/instruments.de.json';

const reviews = [
  'Review 1–20: five different binary contrasts introduce clarinet, trumpet, flute, trombone and alto sax. Four answers begin at 6; no lesson uses only unison versus octave. Further wind introductions retain slow, spaced comparisons and narrow roots. Harmonic playback begins at 12.',
  'Review 21–40: minor second and minor third receive supported introductions, followed by four-choice close comparisons. New instruments use familiar spaced intervals. Only 24 and 25 have two answers.',
  'Review 41–60: introduce tritone, major sixth and sevenths with low secondary demands, then consolidate with four choices. Six-choice practice starts at 57 on familiar trumpet. A single violin guest appears at 52. Only 41 has two answers.',
  'Review 61–80: compact close-answer sets add speed, register, direction and harmonic transfer. Every new instrument first appears in a slower, spaced four-choice lesson; no binary lessons remain here.',
  'Review 81–100: introduce ninths and tenths slowly with familiar, spaced alternatives at 82–85, then consolidate compounds at 86 and transfer them across familiar instruments at 94. Only 82 has two answers. The final two ten-question runs each contain all four compound targets and six distinct simple targets in randomized order.',
];
const lines = ['# Listn level design', '',
  'The permanent source is `src/game/levels.ts`: 100 individually authored configurations, not a procedural difficulty generator. This document is rendered from that authored list with `npm run docs:levels`.', '',
  'Every level has 10 questions. Root ranges always describe the lower note, including descending playback. Upper notes equal root + semitone distance. Speed changes melodic spacing, never pitch. Duration is independent. Melodic playback selects ascending or descending per question. Every level is exclusively melodic or harmonic.', '',
  'Interval closeness is the primary difficulty factor; answer count follows, with interval size, presentation, timing, register and timbre refining the challenge. From pack 2 onward, answers form consecutive windows within the sorted eligible interval pool. Close review pools create compact comparisons where every displayed option can be correct; introductions deliberately use spaced pools. Targets are balanced within each run rather than repeated before the vocabulary is covered. Difficulty labels are editorial intentions, not calibrated psychometric ratings. Listening tests with learners should inform future tuning. Every root/instrument/interval combination is validated against bundled samples.', ''];
const windPrograms = new Set([56, 57, 58, 60, 64, 65, 66, 67, 68, 70, 71, 72, 73]);
const usedPrograms = [...new Set(levels.flatMap((level) => [...level.instruments]))];
const appearances = (program: number) => levels.filter((level) => level.instruments.includes(program));
lines.push('## Instrument regularity and every appearance', '',
  'Editorial emphasis follows a typical German wind band: clarinet, trumpet, flute, trombone, horn and alto sax recur most; tenor/baritone sax and tuba support the middle and lower registers, with piccolo and soprano sax used less often. These weights are a curriculum choice, not a measured census of bands.', '',
  'A level appearance counts once even in a mixed pool. Expected questions sum 10 / instrument-pool size per appearance, because selection is uniform per question. Percentages refer to the 1,000 questions in one run through all levels; actual random counts vary.', '',
  '| Instrument (EN / DE; GM) | Regularity | Levels | Expected questions / share | Every level ID |',
  '| --- | --- | ---: | ---: | --- |');
for (const program of usedPrograms.sort((a, b) => appearances(b).length - appearances(a).length || a - b)) {
  const used = appearances(program);
  const expected = used.reduce((sum, level) => sum + 10 / level.instruments.length, 0);
  const regularity = used.length >= 12 ? 'Core / frequently' : used.length >= 5 ? 'Supporting / regularly' : windPrograms.has(program) ? 'Colour / occasionally' : 'Guest / rarely';
  lines.push(`| ${instruments[program].name} / ${germanInstruments[String(program) as keyof typeof germanInstruments]} (${program}) | ${regularity} | ${used.length} | ${expected.toFixed(1)} / ${(expected / 10).toFixed(1)}% | ${used.map((level) => level.id).join(', ')} |`);
}
const samePool = (a: readonly number[], b: readonly number[]) => [...a].sort((x, y) => x - y).join(',') === [...b].sort((x, y) => x - y).join(',');
const transitions = levels.slice(1).map((level, i) => ({ before: levels[i], level }));
const sharedTimbres = transitions.filter(({ before, level }) => before.instruments.some((p) => level.instruments.includes(p)));
const weakTransitions = transitions.filter(({ before, level }) => [
  !samePool(before.instruments, level.instruments), !samePool(before.intervals, level.intervals),
  before.playback !== level.playback, before.speed !== level.speed || before.noteDurationMs !== level.noteDurationMs,
].filter(Boolean).length < 2);
const retainedPools = transitions.filter(({ before, level }) => samePool(before.intervals, level.intervals));
const windQuestions = levels.reduce((sum, level) => sum + 10 * level.instruments.filter((p) => windPrograms.has(p)).length / level.instruments.length, 0);
lines.push('', '## Weak-link audit', '',
  `- Wind instruments account for ${windQuestions.toFixed(0)} / 1,000 expected questions (${(windQuestions / 10).toFixed(0)}%). String and electric guests remain rare; the table exposes their exact appearances.`,
  `- Adjacent lessons sharing an instrument: ${sharedTimbres.length ? sharedTimbres.map(({ before, level }) => `${before.id}→${level.id}`).join(', ') : 'none'}.`,
  `- Transitions changing fewer than two of instrument pool, interval pool, presentation and timing: ${weakTransitions.length ? weakTransitions.map(({ before, level }) => `${before.id}→${level.id}`).join(', ') : 'none'}.`,
  `- Deliberately retained interval pools: ${retainedPools.map(({ before, level }) => `${before.id}→${level.id}`).join(', ')}. Their timbre, direction/harmony or timing changes support transfer rather than repeating the full task.`,
  '- Missing distinct sounds: Tenorhorn, Bariton/Euphonium and Flügelhorn. The bundled GM library has no separate samples for these. They are not relabelled horn, tuba or trumpet; acquiring suitable licensed sounds remains an open instrumentation gap.',
  '- Piccolo and soprano sax are intentionally less frequent; bassoon/oboe provide occasional wind-band colour. Early instrument changes are supported, but learner testing should check whether their frequency distracts beginners.',
  '- Tuba roots stay within the bundled range and avoid the very lowest notes. BUG-001 (quiet low notes) remains open; listening on phone speakers is still required.',
  '- First appearances, close distractors, final compound coverage, instrument weights and adjacent-task variety are regression-tested. These structural checks do not establish perceived difficulty.', '',
  '## Archived curriculum and saved progress', '',
  'The complete replaced curriculum and its English/German copy are preserved in `archive/curricula/pre-blasorchester-2026-11-10/`. All 100 slots are revised; the archive maps old to new by the same numeric ID. Existing scores and stars remain credited to that slot, even when its name or exercise changes. The storage key `listn.progress.v1`, save version and pack gates remain stable across app updates; do not reset saves when changing curriculum or app version.', '');
for (let chapter = 0; chapter < 5; chapter++) {
  lines.push(`## Chapter ${chapter + 1}`, '', reviews[chapter], '');
  for (const level of levels.slice(chapter * 20, chapter * 20 + 20)) {
    lines.push(`### ${level.id}. ${level.title} / ${germanLevels[String(level.id) as keyof typeof germanLevels].title} — ${level.difficulty}`, '', level.challenge, '',
      `- Intervals: ${level.intervals.map((n) => `${n} (${intervalName(n)})`).join(', ')}.`,
      `- ${level.choices} choices; ${level.playback}; ${level.speed}; ${level.noteDurationMs} ms per note.`,
      `- GM programs (zero-based): ${level.instruments.map((n) => `${n} ${instruments[n].name}`).join(', ')}.`,
      `- Lower/root MIDI range: ${level.minMidiNote}–${level.maxMidiNote}.`, '');
  }
}
lines.push('## Collective review', '',
  'Closeness remains the primary difficulty axis. Supported first appearances deliberately use easier comparisons and slow, sustained notes with narrow roots. Beyond level 20 only four lessons have two choices: 24, 25, 41 and 82. Other lessons use four or six choices. Compact answer sets replace target-only neighbor guarantees and remote filler. New instruments and intervals are checked dynamically against all preceding configurations. Every six-choice level has at least six eligible unique intervals; no sound-effect presets are used. Labels are editorial rather than measured learner ratings.', '',
  'Pack 1 starts unlocked. Packs 2–5 require 30, 60, 90 and 120 total stars respectively; their first levels then open. Remaining levels open sequentially after one star in their predecessor within that chapter. Players may reach another pack before completing every previous level. Existing saved scores remain attached to numbered level slots; LEVEL_REORDER.md records the previous-to-new lesson order.', '');
writeFileSync('LEVEL_DESIGN.md', lines.join('\n'));
console.log(`Documented all 100 authored levels and five chapter reviews; ${new Set(levels.flatMap((level) => [...level.instruments])).size} pitched GM programs are used by the levels.`);
