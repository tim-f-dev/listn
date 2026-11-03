import { writeFileSync } from 'node:fs';
import { levels } from '../src/game/levels';
import { instruments } from '../src/game/questions';
import { intervalName } from '../src/game/intervals';

const reviews = [
  'Review 1–20: broad beginner contrasts lead into four-choice consolidation. First instrument and interval appearances use slow notes and narrow roots. Harmonic playback begins at 12.',
  'Review 21–40: minor second and minor third receive supported introductions, followed by four-choice close comparisons. New instruments use familiar spaced intervals. Only 24 and 25 have two answers.',
  'Review 41–60: introduce tritone, major sixth and sevenths with low secondary demands, then consolidate with four choices. Six-choice practice starts at 57 on familiar piano. Only 41 has two answers.',
  'Review 61–80: compact close-answer sets add speed, register, direction and harmonic transfer. Every new instrument first appears in a slower, spaced four-choice lesson; no binary lessons remain here.',
  'Review 81–100: introduce ninths and tenths slowly with familiar, spaced alternatives at 82–85, then consolidate compounds at 86 and transfer them across familiar instruments at 94. Only 82 has two answers. The final two ten-question runs each contain all four compound targets and six distinct simple targets in randomized order.',
];
const lines = ['# Listn level design', '',
  'The permanent source is `src/game/levels.ts`: 100 individually authored configurations, not a procedural difficulty generator. This document is rendered from that authored list with `npm run docs:levels`.', '',
  'Every level has 10 questions. Root ranges always describe the lower note, including descending playback. Upper notes equal root + semitone distance. Speed changes melodic spacing, never pitch. Duration is independent. Melodic playback selects ascending or descending per question. Every level is exclusively melodic or harmonic.', '',
  'Interval closeness is the primary difficulty factor; answer count follows, with interval size, presentation, timing, register and timbre refining the challenge. From pack 2 onward, answers form consecutive windows within the sorted eligible interval pool. Close review pools create compact comparisons where every displayed option can be correct; introductions deliberately use spaced pools. Targets are balanced within each run rather than repeated before the vocabulary is covered. Difficulty labels are editorial intentions, not calibrated psychometric ratings. Listening tests with learners should inform future tuning. Every root/instrument/interval combination is validated against bundled samples.', ''];
for (let chapter = 0; chapter < 5; chapter++) {
  lines.push(`## Chapter ${chapter + 1}`, '', reviews[chapter], '');
  for (const level of levels.slice(chapter * 20, chapter * 20 + 20)) {
    lines.push(`### ${level.id}. ${level.title} — ${level.difficulty}`, '', level.challenge, '',
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
