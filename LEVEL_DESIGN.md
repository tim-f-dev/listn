# Listn level design

The permanent source is `src/game/levels.ts`: 100 individually authored configurations, not a procedural difficulty generator. This document is rendered from that authored list with `npm run docs:levels`.

Every level has 10 questions. Root ranges always describe the lower note, including descending playback. Upper notes equal root + semitone distance. Speed changes melodic spacing, never pitch. Duration is independent. Melodic playback selects ascending or descending per question. Every level is exclusively melodic or harmonic.

Interval closeness is the primary difficulty factor; answer count follows, with interval size, presentation, timing, register and timbre refining the challenge. From pack 2 onward, answers form consecutive windows within the sorted eligible interval pool. Close review pools create compact comparisons where every displayed option can be correct; introductions deliberately use spaced pools. Targets are balanced within each run rather than repeated before the vocabulary is covered. Difficulty labels are editorial intentions, not calibrated psychometric ratings. Listening tests with learners should inform future tuning. Every root/instrument/interval combination is validated against bundled samples.

## Chapter 1

Review 1–20: broad beginner contrasts lead into four-choice consolidation. First instrument and interval appearances use slow notes and narrow roots. Harmonic playback begins at 12.

### 1. Same or soaring — gentle

Hear one pitch twice versus an octave; a narrow root range keeps the opening calm.

- Intervals: 0 (Perfect unison), 12 (Perfect octave).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–65.

### 2. Bass breathing space — gentle

Contrast unison and octave on low acoustic bass before moving to closer intervals.

- Intervals: 0 (Perfect unison), 12 (Perfect octave).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 32 Acoustic Bass.
- Lower/root MIDI range: 40–45.

### 3. Open strings clearing — gentle

Distinguish unison and ascending octave on pizzicato strings.

- Intervals: 0 (Perfect unison), 12 (Perfect octave).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 45 Pizzicato Strings.
- Lower/root MIDI range: 55–60.

### 4. Together at the piano — gentle

Compare unison and ascending fifth on familiar piano.

- Intervals: 0 (Perfect unison), 7 (Perfect fifth).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–65.

### 5. Cello foundations — gentle

Low cello introduces bass listening without close interval distinctions.

- Intervals: 0 (Perfect unison), 7 (Perfect fifth).
- 2 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 42 Cello.
- Lower/root MIDI range: 43–48.

### 6. A clean landing — gentle

Recognize descending unison and fifth on clean electric guitar.

- Intervals: 0 (Perfect unison), 7 (Perfect fifth).
- 2 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 27 Clean Guitar.
- Lower/root MIDI range: 55–60.

### 7. Air above — gentle

A flute changes attack and register while the interval gap stays generous.

- Intervals: 4 (Major third), 12 (Perfect octave).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 65–70.

### 8. Guitar steps down — gentle

Recognize descending fifth and octave on nylon guitar.

- Intervals: 7 (Perfect fifth), 12 (Perfect octave).
- 2 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 24 Nylon Guitar.
- Lower/root MIDI range: 55–60.

### 9. Quick wooden echoes — gentle

Recognize familiar intervals at an unhurried pace, with no more than four answer choices.

- Intervals: 7 (Perfect fifth), 12 (Perfect octave).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 12 Marimba.
- Lower/root MIDI range: 60–65.

### 10. A brass hello — gentle

Meet trumpet slowly through a familiar major-third versus fifth comparison.

- Intervals: 4 (Major third), 7 (Perfect fifth).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–65.

### 11. A little farther — gentle

Clarinet introduces major second and perfect fourth with only two choices.

- Intervals: 2 (Major second), 5 (Perfect fourth).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–65.

### 12. Marimba rest stop — steady

First simultaneous notes: distinguish major third and perfect fifth played together on marimba.

- Intervals: 4 (Major third), 7 (Perfect fifth).
- 2 choices; harmonic; normal; 900 ms per note.
- GM programs (zero-based): 12 Marimba.
- Lower/root MIDI range: 60–72.

### 13. Flute calm — steady

Recognize familiar intervals at an unhurried pace, with no more than four answer choices.

- Intervals: 4 (Major third), 7 (Perfect fifth).
- 2 choices; ascending; normal; 900 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 65–72.

### 14. A bow between friends — gentle

Recognize familiar intervals at an unhurried pace, with no more than four answer choices.

- Intervals: 4 (Major third), 7 (Perfect fifth).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 40 Violin.
- Lower/root MIDI range: 60–65.

### 15. Trumpet sunlight — stretch

Consolidate four spaced intervals on slow trumpet with familiar melodic shapes.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–67.

### 16. Trumpet reprieve — stretch

Compare four familiar descending trumpet intervals, with fourth and fifth as the closest pair.

- Intervals: 2 (Major second), 5 (Perfect fourth), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; descending; normal; 900 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–67.

### 17. Flute horizon — stretch

Compare four spaced intervals on high flute at a slow pace.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1000 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 72–79.

### 18. Two soft plucks — stretch

Compare four descending intervals on low nylon guitar, including the closer fourth and fifth.

- Intervals: 2 (Major second), 5 (Perfect fourth), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 24 Nylon Guitar.
- Lower/root MIDI range: 48–60.

### 19. Harp geometry — gentle

Meet harp and minor sixth with four clearly spaced intervals, slow notes and a narrow root range.

- Intervals: 0 (Perfect unison), 4 (Major third), 8 (Minor sixth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 46 Harp.
- Lower/root MIDI range: 55–60.

### 20. First crossroads — stretch

Melodic intervals alternate between ascending and descending notes; harmonic intervals are excluded.

- Intervals: 0 (Perfect unison), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; melodic; normal; 850 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano, 24 Nylon Guitar.
- Lower/root MIDI range: 60–67.

## Chapter 2

Review 21–40: minor second and minor third receive supported introductions, followed by four-choice close comparisons. New instruments use familiar spaced intervals. Only 24 and 25 have two answers.

### 21. Quick brass anchors — steady

Review four familiar, spaced trumpet intervals before the finer comparisons.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–65.

### 22. Four familiar shapes — steady

Bridge wide contrasts and neighboring answers with major second, major third, fourth and fifth on piano.

- Intervals: 2 (Major second), 4 (Major third), 5 (Perfect fourth), 7 (Perfect fifth).
- 4 choices; ascending; normal; 900 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–67.

### 23. Air and strings — steady

Compare four familiar intervals across violin and flute in both melodic directions.

- Intervals: 2 (Major second), 4 (Major third), 5 (Perfect fourth), 7 (Perfect fifth).
- 4 choices; melodic; normal; 900 ms per note.
- GM programs (zero-based): 40 Violin, 73 Flute.
- Lower/root MIDI range: 60–72.

### 24. Half-step lanterns — gentle

Meet the minor second and celesta slowly, with a familiar major third as a clearly separated alternative.

- Intervals: 1 (Minor second), 4 (Major third).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 8 Celesta.
- Lower/root MIDI range: 65–70.

### 25. Two shades of third — gentle

Introduce the minor third beside the familiar major third on slow piano, with only two answers.

- Intervals: 3 (Minor third), 4 (Major third).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–64.

### 26. High porcelain — steady

Consolidate four neighboring small intervals on familiar celesta with slow ascending notes.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 8 Celesta.
- Lower/root MIDI range: 65–70.

### 27. Thirds on the way down — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 25 Steel Guitar.
- Lower/root MIDI range: 55–60.

### 28. Quiet low strings — stretch

Compare four neighboring small intervals played together on low cello.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 42 Cello.
- Lower/root MIDI range: 43–48.

### 29. Bright crowded keys — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 4 Electric Piano 1.
- Lower/root MIDI range: 60–65.

### 30. Three travelers — stretch

Compare four neighboring small intervals slowly across violin, guitar and flute.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 40 Violin, 24 Nylon Guitar, 73 Flute.
- Lower/root MIDI range: 60–67.

### 31. Bells at a run — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 9 Glockenspiel.
- Lower/root MIDI range: 72–77.

### 32. Smallest shadows — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 11 Vibraphone.
- Lower/root MIDI range: 60–65.

### 33. Low brass corners — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 58 Tuba.
- Lower/root MIDI range: 40–45.

### 34. Seconds in company — stretch

Compare small intervals carefully at a slow pace; replay the notes as often as you need.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–65.

### 35. Piccolo windows — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 72 Piccolo.
- Lower/root MIDI range: 72–77.

### 36. Wide piano compass — stretch

Compare closely spaced small intervals on low piano, with four answers per question.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; ascending; normal; 900 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 48–55.

### 37. Guitar lightning — stretch

Distinguish four neighboring descending intervals across nylon and clean electric guitar.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; descending; normal; 900 ms per note.
- GM programs (zero-based): 24 Nylon Guitar, 27 Clean Guitar.
- Lower/root MIDI range: 55–67.

### 38. Bassoon pathways — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 70 Bassoon.
- Lower/root MIDI range: 43–48.

### 39. Harp invitation — stretch

Recognize four neighboring small intervals through the plucked attack of the harp.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; ascending; normal; 900 ms per note.
- GM programs (zero-based): 46 Harp.
- Lower/root MIDI range: 55–62.

### 40. High wind sprint — stretch

Consolidate small neighboring intervals across piccolo and flute in both melodic directions.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; melodic; normal; 900 ms per note.
- GM programs (zero-based): 72 Piccolo, 73 Flute.
- Lower/root MIDI range: 72–79.

## Chapter 3

Review 41–60: introduce tritone, major sixth and sevenths with low secondary demands, then consolidate with four choices. Six-choice practice starts at 57 on familiar piano. Only 41 has two answers.

### 41. The tilted fifth — gentle

Introduce the tritone on familiar vibraphone beside a clearly separated major third.

- Intervals: 4 (Major third), 6 (Tritone).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 11 Vibraphone.
- Lower/root MIDI range: 60–65.

### 42. Warm sixths — gentle

Introduce the major sixth on slow guitar among three familiar, spaced intervals.

- Intervals: 4 (Major third), 7 (Perfect fifth), 9 (Major sixth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 24 Nylon Guitar.
- Lower/root MIDI range: 55–60.

### 43. Sevenths in the reeds — gentle

Meet oboe and minor seventh with slow notes and four clearly spaced answers.

- Intervals: 4 (Major third), 7 (Perfect fifth), 10 (Minor seventh), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 68 Oboe.
- Lower/root MIDI range: 60–65.

### 44. Sixths in the air — steady

Consolidate four neighboring upper intervals slowly on familiar flute.

- Intervals: 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 65–72.

### 45. Sevenths falling — gentle

Introduce the major seventh slowly downwards on familiar flute, with clearly spaced alternatives.

- Intervals: 5 (Perfect fourth), 7 (Perfect fifth), 9 (Major sixth), 11 (Major seventh).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 65–70.

### 46. Sixths under glass — steady

Compare four neighboring upper intervals on familiar celesta at a slow pace.

- Intervals: 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 8 Celesta.
- Lower/root MIDI range: 72–79.

### 47. The moving semitone — steady

Compare four neighboring intervals around fourth and fifth on piano and trumpet.

- Intervals: 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano, 56 Trumpet.
- Lower/root MIDI range: 60–72.

### 48. Cello thirds return — steady

Consolidate four neighboring small harmonic intervals on familiar low cello.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 42 Cello.
- Lower/root MIDI range: 43–55.

### 49. Flute thirds revisit — steady

Compare four neighboring small intervals on slow flute with a narrow root range.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 60–67.

### 50. Two bass colors — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 32 Acoustic Bass, 35 Fretless Bass.
- Lower/root MIDI range: 36–41.

### 51. Muted brass twins — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 59 Muted Trumpet.
- Lower/root MIDI range: 60–65.

### 52. Viola welcome — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 41 Viola.
- Lower/root MIDI range: 55–60.

### 53. Cello long view — recovery

Keep close fourth-to-sixth comparisons while slowing down on low cello.

- Intervals: 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 42 Cello.
- Lower/root MIDI range: 43–50.

### 54. Almost home — stretch

Compare major sixth, both sevenths and octave on slow piano.

- Intervals: 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 4 choices; ascending; slow; 1000 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–67.

### 55. A fourth on either side — stretch

Build a four-note interval neighborhood around the perfect fourth.

- Intervals: 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 55–62.

### 56. Reed junction — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 65 Alto Sax, 71 Clarinet.
- Lower/root MIDI range: 55–60.

### 57. Six signposts — stretch

Expand to six neighboring interval answers on slow, familiar piano.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 6 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–65.

### 58. Accordion angles — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 21 Accordion.
- Lower/root MIDI range: 55–60.

### 59. Three ways through — stretch

Melodic intervals alternate between ascending and descending notes; harmonic intervals are excluded.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 6 choices; melodic; normal; 850 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano, 40 Violin.
- Lower/root MIDI range: 60–67.

### 60. Third mosaic — stretch

Review all simple intervals in both melodic directions with six compactly grouped answers.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; melodic; normal; 850 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano, 24 Nylon Guitar, 40 Violin, 73 Flute.
- Lower/root MIDI range: 60–72.

## Chapter 4

Review 61–80: compact close-answer sets add speed, register, direction and harmonic transfer. Every new instrument first appears in a slower, spaced four-choice lesson; no binary lessons remain here.

### 61. Opening mosaic — stretch

Transfer a close interval neighborhood across piano, violin and flute in both melodic directions.

- Intervals: 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 4 choices; melodic; normal; 850 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano, 40 Violin, 73 Flute.
- Lower/root MIDI range: 60–67.

### 62. Piano flashcards — expert

Six neighboring intervals return at a faster pace.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 6 choices; ascending; fast; 450 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–67.

### 63. Near the octave — expert

Six upper intervals compete; slow piano keeps their contour clear.

- Intervals: 7 (Perfect fifth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave), 8 (Minor sixth).
- 6 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–65.

### 64. Bass under pressure — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 33 Finger Bass.
- Lower/root MIDI range: 40–45.

### 65. Clavinet corners — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 7 Clavinet.
- Lower/root MIDI range: 60–65.

### 66. Nylon reset — recovery

Recover with slow nylon guitar and a narrow root range while retaining four neighboring answers.

- Intervals: 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 4 choices; melodic; slow; 1100 ms per note.
- GM programs (zero-based): 24 Nylon Guitar.
- Lower/root MIDI range: 55–62.

### 67. Choir intervals — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 52 Choir Aahs.
- Lower/root MIDI range: 60–65.

### 68. Organ pillars — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 16 Drawbar Organ.
- Lower/root MIDI range: 48–53.

### 69. Double-reed shadows — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 68 Oboe, 69 English Horn.
- Lower/root MIDI range: 55–60.

### 70. Celesta zigzag — expert

Distinguish six neighboring small intervals on fast celesta in both melodic directions.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 6 choices; melodic; fast; 500 ms per note.
- GM programs (zero-based): 8 Celesta.
- Lower/root MIDI range: 65–79.

### 71. Marimba spectrum — expert

Compare close upper intervals on fast descending marimba across a wide root range.

- Intervals: 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; descending; fast; 450 ms per note.
- GM programs (zero-based): 12 Marimba.
- Lower/root MIDI range: 48–72.

### 72. Half-step relay — stretch

Relay four neighboring small intervals across familiar instruments in both melodic directions at a fast pace.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third).
- 4 choices; melodic; fast; 450 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano, 24 Nylon Guitar, 40 Violin, 73 Flute.
- Lower/root MIDI range: 60–72.

### 73. The last quick pair — stretch

Compare four neighboring intervals around the fifth with short melodic note pairs on piano and trumpet.

- Intervals: 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth).
- 4 choices; melodic; fast; 350 ms per note.
- GM programs (zero-based): 56 Trumpet, 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–72.

### 74. Organ dusk — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 19 Church Organ.
- Lower/root MIDI range: 48–53.

### 75. A wooden switch — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 12 Marimba, 13 Xylophone.
- Lower/root MIDI range: 60–65.

### 76. Second mosaic — expert

Compare a dense lower interval pool across piano, trumpet and guitar in both melodic directions.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth).
- 6 choices; melodic; normal; 900 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano, 56 Trumpet, 24 Nylon Guitar.
- Lower/root MIDI range: 60–67.

### 77. Around the sixth — expert

Steel guitar compares a continuous six-interval neighborhood.

- Intervals: 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh).
- 6 choices; descending; normal; 850 ms per note.
- GM programs (zero-based): 25 Steel Guitar.
- Lower/root MIDI range: 55–67.

### 78. Saxophone neighbors — gentle

Get to know the new instrument with slow notes, four familiar, spaced intervals and a narrow root range.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 65 Alto Sax, 66 Tenor Sax.
- Lower/root MIDI range: 55–60.

### 79. Eleven neighboring doors — expert

Every non-unison simple interval except octave can appear among six choices.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh).
- 6 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–67.

### 80. Fourth mosaic — expert

Melodic intervals alternate between ascending and descending notes; harmonic intervals are excluded.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; melodic; normal; 850 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano, 56 Trumpet, 40 Violin, 71 Clarinet.
- Lower/root MIDI range: 60–72.

## Chapter 5

Review 81–100: introduce ninths and tenths slowly with familiar, spaced alternatives at 82–85, then consolidate compounds at 86 and transfer them across familiar instruments at 94. Only 82 has two answers. The final two ten-question runs each contain all four compound targets and six distinct simple targets in randomized order.

### 81. A clear entrance — stretch

Open the final pack with four neighboring sixths and sevenths on clear vibraphone.

- Intervals: 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh).
- 4 choices; ascending; normal; 900 ms per note.
- GM programs (zero-based): 11 Vibraphone.
- Lower/root MIDI range: 60–72.

### 82. Guitar shelter — gentle

Introduce the minor ninth slowly on familiar nylon guitar beside a clearly separated major sixth.

- Intervals: 9 (Major sixth), 13 (Minor ninth).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 24 Nylon Guitar.
- Lower/root MIDI range: 48–53.

### 83. Harp breathing room — gentle

Introduce the major ninth on slow harp among three familiar, clearly spaced intervals.

- Intervals: 7 (Perfect fifth), 10 (Minor seventh), 12 (Perfect octave), 14 (Major ninth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 46 Harp.
- Lower/root MIDI range: 55–60.

### 84. Beyond the octave — gentle

Introduce the minor tenth on slow piano among three familiar, clearly spaced intervals.

- Intervals: 7 (Perfect fifth), 10 (Minor seventh), 12 (Perfect octave), 15 (Minor tenth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 48–53.

### 85. Compound air — gentle

Introduce the major tenth slowly on familiar flute, with four widely spaced answers and a narrow root range.

- Intervals: 7 (Perfect fifth), 10 (Minor seventh), 13 (Minor ninth), 16 (Major tenth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 60–65.

### 86. One quiet breath — recovery

Consolidate octave, ninths and tenths on slow nylon guitar, keeping four close answers.

- Intervals: 12 (Perfect octave), 13 (Minor ninth), 14 (Major ninth), 15 (Minor tenth), 16 (Major tenth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 24 Nylon Guitar.
- Lower/root MIDI range: 55–67.

### 87. All twelve — expert

Review all twelve simple intervals on piano, comparing six nearby answers in each question.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; ascending; normal; 850 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 55–72.

### 88. Trumpet in motion — expert

Distinguish six neighboring upper intervals on fast descending trumpet.

- Intervals: 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; descending; fast; 400 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 54–72.

### 89. Piccolo fine print — stretch

Upper-register piccolo narrows the focus to the octave and its neighbors.

- Intervals: 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave), 9 (Major sixth).
- 4 choices; ascending; normal; 850 ms per note.
- GM programs (zero-based): 72 Piccolo.
- Lower/root MIDI range: 72–84.

### 90. Bass octave puzzle — expert

Distinguish close intervals across acoustic and electric bass, using slow notes and both melodic directions.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth).
- 6 choices; melodic; slow; 1100 ms per note.
- GM programs (zero-based): 32 Acoustic Bass, 33 Finger Bass.
- Lower/root MIDI range: 36–55.

### 91. Crowded upper strings — expert

Dense wide-interval harmonies alternate violin and viola near their upper register.

- Intervals: 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; harmonic; slow; 1200 ms per note.
- GM programs (zero-based): 40 Violin, 41 Viola.
- Lower/root MIDI range: 60–72.

### 92. Black-key neighbors — expert

Melodic intervals alternate between ascending and descending notes; harmonic intervals are excluded.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 6 choices; melodic; fast; 500 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano, 4 Electric Piano 1.
- Lower/root MIDI range: 55–72.

### 93. Reed close-up — expert

Compare six neighboring harmonic intervals on familiar oboe and clarinet.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 6 choices; harmonic; normal; 1100 ms per note.
- GM programs (zero-based): 68 Oboe, 71 Clarinet.
- Lower/root MIDI range: 60–72.

### 94. Metal and wood — expert

Transfer close upper intervals, ninths and tenths across familiar celesta, vibraphone and marimba in both melodic directions.

- Intervals: 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave), 13 (Minor ninth), 14 (Major ninth), 15 (Minor tenth), 16 (Major tenth).
- 6 choices; melodic; normal; 850 ms per note.
- GM programs (zero-based): 8 Celesta, 11 Vibraphone, 12 Marimba.
- Lower/root MIDI range: 60–68.

### 95. String seconds sprint — expert

Fast bowed and pizzicato strings concentrate on small descending intervals.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third).
- 4 choices; descending; fast; 350 ms per note.
- GM programs (zero-based): 40 Violin, 45 Pizzicato Strings.
- Lower/root MIDI range: 60–72.

### 96. Low harmonic labyrinth — expert

Six tight harmonic intervals in low piano and cello need patient separation.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 6 choices; harmonic; slow; 1200 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano, 42 Cello.
- Lower/root MIDI range: 43–55.

### 97. Low brass return — stretch

Carry four neighboring harmonic intervals into low tuba at a slow pace.

- Intervals: 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 58 Tuba.
- Lower/root MIDI range: 40–55.

### 98. Across the keyboard — expert

Melodic intervals alternate between ascending and descending notes; harmonic intervals are excluded.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; melodic; fast; 450 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 43–79.

### 99. Chamber crossroads — expert

Combine simple intervals and all four ninths and tenths across five instruments, with six nearby answers.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave), 13 (Minor ninth), 14 (Major ninth), 15 (Minor tenth), 16 (Major tenth).
- 6 choices; melodic; normal; 900 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano, 24 Nylon Guitar, 40 Violin, 73 Flute, 71 Clarinet.
- Lower/root MIDI range: 60–68.

### 100. Listn finale — expert

Master simple intervals and all four ninths and tenths across five instruments at a fast pace, with six nearby answers.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave), 13 (Minor ninth), 14 (Major ninth), 15 (Minor tenth), 16 (Major tenth).
- 6 choices; melodic; fast; 550 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano, 24 Nylon Guitar, 40 Violin, 56 Trumpet, 73 Flute.
- Lower/root MIDI range: 60–68.

## Collective review

Closeness remains the primary difficulty axis. Supported first appearances deliberately use easier comparisons and slow, sustained notes with narrow roots. Beyond level 20 only four lessons have two choices: 24, 25, 41 and 82. Other lessons use four or six choices. Compact answer sets replace target-only neighbor guarantees and remote filler. New instruments and intervals are checked dynamically against all preceding configurations. Every six-choice level has at least six eligible unique intervals; no sound-effect presets are used. Labels are editorial rather than measured learner ratings.

Pack 1 starts unlocked. Packs 2–5 require 30, 60, 90 and 120 total stars respectively; their first levels then open. Remaining levels open sequentially after one star in their predecessor within that chapter. Players may reach another pack before completing every previous level. Existing saved scores remain attached to numbered level slots; LEVEL_REORDER.md records the previous-to-new lesson order.
