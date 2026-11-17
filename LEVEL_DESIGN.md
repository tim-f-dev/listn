# Listn level design

The permanent source is `src/game/levels.ts`: 100 individually authored configurations, not a procedural difficulty generator. This document is rendered from that authored list with `npm run docs:levels`.

Every level has 10 questions. Root ranges always describe the lower note, including descending playback. Upper notes equal root + semitone distance. Speed changes melodic spacing, never pitch. Duration is independent. Melodic playback selects ascending or descending per question. Every level is exclusively melodic or harmonic.

Interval closeness is the primary difficulty factor; answer count follows, with interval size, presentation, timing, register and timbre refining the challenge. From pack 2 onward, answers form consecutive windows within the sorted eligible interval pool. Close review pools create compact comparisons where every displayed option can be correct; introductions deliberately use spaced pools. Targets are balanced within each run rather than repeated before the vocabulary is covered. Difficulty labels are editorial intentions, not calibrated psychometric ratings. Listening tests with learners should inform future tuning. Every root/instrument/interval combination is validated against bundled samples.

## Instrument regularity and every appearance

Editorial emphasis follows a typical German wind band: clarinet, trumpet, flute, trombone, horn and alto sax recur most; tenor/baritone sax and tuba support the middle and lower registers, with piccolo and soprano sax used less often. These weights are a curriculum choice, not a measured census of bands.

A level appearance counts once even in a mixed pool. Expected questions sum 10 / instrument-pool size per appearance, because selection is uniform per question. Percentages refer to the 1,000 questions in one run through all levels; actual random counts vary.

| Instrument (EN / DE; GM) | Regularity | Levels | Expected questions / share | Every level ID |
| --- | --- | ---: | ---: | --- |
| Clarinet / Klarinette (71) | Core / frequently | 22 | 165.3 / 16.5% | 1, 12, 15, 20, 22, 28, 34, 40, 42, 49, 55, 59, 61, 63, 69, 72, 76, 78, 82, 87, 92, 99 |
| Trumpet / Trompete (56) | Core / frequently | 18 | 140.3 / 14.0% | 2, 14, 20, 25, 36, 45, 51, 57, 60, 62, 71, 73, 76, 79, 81, 88, 94, 99 |
| Flute / Flöte (73) | Core / frequently | 15 | 104.5 / 10.4% | 3, 13, 20, 23, 31, 40, 44, 54, 60, 70, 76, 80, 85, 92, 99 |
| Trombone / Posaune (57) | Core / frequently | 14 | 103.3 / 10.3% | 4, 17, 21, 29, 41, 48, 59, 68, 73, 80, 83, 91, 94, 100 |
| Alto Sax / Altsaxofon (65) | Core / frequently | 14 | 96.2 / 9.6% | 5, 18, 26, 37, 46, 56, 60, 67, 72, 80, 84, 93, 95, 99 |
| French Horn / Waldhorn (60) | Core / frequently | 13 | 92.8 / 9.3% | 6, 16, 24, 30, 47, 58, 61, 66, 74, 80, 91, 94, 99 |
| Tenor Sax / Tenorsaxofon (66) | Supporting / regularly | 8 | 49.2 / 4.9% | 7, 19, 30, 56, 72, 77, 90, 100 |
| Tuba / Tuba (58) | Supporting / regularly | 7 | 63.3 / 6.3% | 8, 33, 50, 53, 64, 86, 96 |
| Baritone Sax / Baritonsaxofon (67) | Supporting / regularly | 5 | 31.7 / 3.2% | 10, 37, 50, 90, 97 |
| Soprano Sax / Sopransaxofon (64) | Colour / occasionally | 4 | 25.8 / 2.6% | 11, 39, 69, 100 |
| Oboe / Oboe (68) | Colour / occasionally | 4 | 20.8 / 2.1% | 43, 69, 93, 100 |
| Piccolo / Piccoloflöte (72) | Colour / occasionally | 4 | 40.0 / 4.0% | 9, 35, 75, 89 |
| Bassoon / Fagott (70) | Colour / occasionally | 3 | 16.7 / 1.7% | 38, 50, 90 |
| Acoustic Grand Piano / Konzertflügel (0) | Guest / rarely | 2 | 20.0 / 2.0% | 27, 98 |
| Electric Piano 1 / E-Piano 1 (4) | Guest / rarely | 1 | 10.0 / 1.0% | 65 |
| Nylon Guitar / Nylonsaitengitarre (24) | Guest / rarely | 1 | 10.0 / 1.0% | 32 |
| Violin / Geige (40) | Guest / rarely | 1 | 10.0 / 1.0% | 52 |

## Weak-link audit

- Wind instruments account for 950 / 1,000 expected questions (95%). String and electric guests remain rare; the table exposes their exact appearances.
- Adjacent lessons sharing an instrument: none.
- Transitions changing fewer than two of instrument pool, interval pool, presentation and timing: none.
- Deliberately retained interval pools: 22→23, 39→40, 48→49, 55→56, 66→67, 92→93, 99→100. Their timbre, direction/harmony or timing changes support transfer rather than repeating the full task.
- Missing distinct sounds: Tenorhorn, Bariton/Euphonium and Flügelhorn. The bundled GM library has no separate samples for these. They are not relabelled horn, tuba or trumpet; acquiring suitable licensed sounds remains an open instrumentation gap.
- Piccolo and soprano sax are intentionally less frequent; bassoon/oboe provide occasional wind-band colour. Early instrument changes are supported, but learner testing should check whether their frequency distracts beginners.
- Tuba roots stay within the bundled range and avoid the very lowest notes. BUG-001 (quiet low notes) remains open; listening on phone speakers is still required.
- First appearances, close distractors, final compound coverage, instrument weights and adjacent-task variety are regression-tested. These structural checks do not establish perceived difficulty.

## Archived curriculum and saved progress

The complete replaced curriculum and its English/German copy are preserved in `archive/curricula/pre-blasorchester-2026-11-10/`. All 100 slots are revised; the archive maps old to new by the same numeric ID. Existing scores and stars remain credited to that slot, even when its name or exercise changes. The storage key `listn.progress.v1`, save version and pack gates remain stable across app updates; do not reset saves when changing curriculum or app version.

## Chapter 1

Review 1–20: five different binary contrasts introduce clarinet, trumpet, flute, trombone and alto sax. Four answers begin at 6; no lesson uses only unison versus octave. Further wind introductions retain slow, spaced comparisons and narrow roots. Harmonic playback begins at 12.

### 1. Clarinet first steps / Erste Schritte mit Klarinette — gentle

Introduce unison, perfect fifth with slow, sustained notes and clearly separated comparisons. 2 answers; ascending notes on Clarinet.

- Intervals: 0 (Perfect unison), 7 (Perfect fifth).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–65.

### 2. Trumpet takes flight / Die Trompete hebt ab — gentle

Introduce major third, octave with slow, sustained notes and clearly separated comparisons. 2 answers; ascending notes on Trumpet.

- Intervals: 4 (Major third), 12 (Perfect octave).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–65.

### 3. Flute stepping stones / Trittsteine der Flöte — gentle

Introduce major second with slow, sustained notes and clearly separated comparisons. 2 answers; ascending notes on Flute.

- Intervals: 2 (Major second), 7 (Perfect fifth).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 60–65.

### 4. Trombone landmarks / Wegmarken der Posaune — gentle

Introduce perfect fourth with slow, sustained notes and clearly separated comparisons. 2 answers; ascending notes on Trombone.

- Intervals: 5 (Perfect fourth), 12 (Perfect octave).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 57 Trombone.
- Lower/root MIDI range: 48–53.

### 5. Alto in the middle / Alt in der Mitte — gentle

Meet this timbre through slow, familiar, spaced intervals. 2 answers; ascending notes on Alto Sax.

- Intervals: 4 (Major third), 7 (Perfect fifth).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 65 Alto Sax.
- Lower/root MIDI range: 55–60.

### 6. Horn across the valley / Horn über dem Tal — gentle

Meet this timbre through slow, familiar, spaced intervals. 4 answers; ascending notes on French Horn.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 60 French Horn.
- Lower/root MIDI range: 55–60.

### 7. Tenor sax footpaths / Pfade des Tenorsaxofons — gentle

Meet this timbre through slow, familiar, spaced intervals. 4 answers; ascending notes on Tenor Sax.

- Intervals: 2 (Major second), 5 (Perfect fourth), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 66 Tenor Sax.
- Lower/root MIDI range: 55–60.

### 8. Tuba foundations / Das Fundament der Tuba — gentle

Introduce minor sixth with slow, sustained notes and clearly separated comparisons. 4 answers; ascending notes on Tuba.

- Intervals: 0 (Perfect unison), 4 (Major third), 8 (Minor sixth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 58 Tuba.
- Lower/root MIDI range: 43–48.

### 9. Piccolo skylight / Oberlicht des Piccolos — gentle

Meet this timbre through slow, familiar, spaced intervals. 4 answers; ascending notes on Piccolo.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 72 Piccolo.
- Lower/root MIDI range: 72–77.

### 10. Baritone sax pillars / Säulen des Baritonsaxofons — gentle

Meet this timbre through slow, familiar, spaced intervals. 4 answers; ascending notes on Baritone Sax.

- Intervals: 2 (Major second), 5 (Perfect fourth), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 67 Baritone Sax.
- Lower/root MIDI range: 48–53.

### 11. Soprano sax greeting / Ein Gruß vom Sopransaxofon — gentle

Meet this timbre through slow, familiar, spaced intervals. 4 answers; ascending notes on Soprano Sax.

- Intervals: 0 (Perfect unison), 4 (Major third), 8 (Minor sixth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 64 Soprano Sax.
- Lower/root MIDI range: 60–65.

### 12. Clarinet side by side / Klarinette im Zusammenklang — steady

Compare broad interval contrasts with a fresh timbre or direction. 4 answers; simultaneous notes on Clarinet.

- Intervals: 2 (Major second), 5 (Perfect fourth), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; harmonic; normal; 900 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–72.

### 13. Flute opens the circle / Die Flöte öffnet den Kreis — gentle

Compare broad interval contrasts with a fresh timbre or direction. 4 answers; ascending notes on Flute.

- Intervals: 0 (Perfect unison), 4 (Major third), 8 (Minor sixth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 60–65.

### 14. Trumpet turns home / Die Trompete kehrt um — gentle

Compare broad interval contrasts with a fresh timbre or direction. 4 answers; descending notes on Trumpet.

- Intervals: 2 (Major second), 5 (Perfect fourth), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–65.

### 15. Four clarinet routes / Vier Wege der Klarinette — stretch

Compare broad interval contrasts with a fresh timbre or direction. 4 answers; ascending notes on Clarinet.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–67.

### 16. Horn descending arches / Fallende Hornbögen — stretch

Compare broad interval contrasts with a fresh timbre or direction. 4 answers; descending notes on French Horn.

- Intervals: 2 (Major second), 5 (Perfect fourth), 8 (Minor sixth), 12 (Perfect octave).
- 4 choices; descending; normal; 900 ms per note.
- GM programs (zero-based): 60 French Horn.
- Lower/root MIDI range: 55–62.

### 17. Trombone broad strokes / Weite Posaunenschritte — stretch

Compare broad interval contrasts with a fresh timbre or direction. 4 answers; ascending notes on Trombone.

- Intervals: 0 (Perfect unison), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1000 ms per note.
- GM programs (zero-based): 57 Trombone.
- Lower/root MIDI range: 48–55.

### 18. Alto follows the bend / Alt folgt der Kurve — stretch

Compare broad interval contrasts with a fresh timbre or direction. 4 answers; descending notes on Alto Sax.

- Intervals: 2 (Major second), 5 (Perfect fourth), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 65 Alto Sax.
- Lower/root MIDI range: 55–67.

### 19. Tenor sax open sky / Freier Himmel im Tenorsaxofon — gentle

Compare broad interval contrasts with a fresh timbre or direction. 4 answers; ascending notes on Tenor Sax.

- Intervals: 0 (Perfect unison), 4 (Major third), 8 (Minor sixth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 66 Tenor Sax.
- Lower/root MIDI range: 55–60.

### 20. First band rehearsal / Die erste Orchesterprobe — stretch

Compare broad interval contrasts with a fresh timbre or direction. 4 answers; ascending and descending notes on Clarinet, Trumpet, Flute.

- Intervals: 0 (Perfect unison), 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; melodic; normal; 850 ms per note.
- GM programs (zero-based): 71 Clarinet, 56 Trumpet, 73 Flute.
- Lower/root MIDI range: 60–67.

## Chapter 2

Review 21–40: minor second and minor third receive supported introductions, followed by four-choice close comparisons. New instruments use familiar spaced intervals. Only 24 and 25 have two answers.

### 21. Trombone interval compass / Intervallkompass der Posaune — steady

Review familiar, clearly spaced intervals before the closer comparisons. 4 answers; ascending notes on Trombone.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 57 Trombone.
- Lower/root MIDI range: 48–53.

### 22. Clarinet closer steps / Engere Klarinettenschritte — steady

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Clarinet.

- Intervals: 2 (Major second), 4 (Major third), 5 (Perfect fourth), 7 (Perfect fifth).
- 4 choices; ascending; normal; 900 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–67.

### 23. Flute changes course / Die Flöte wechselt den Kurs — steady

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending and descending notes on Flute.

- Intervals: 2 (Major second), 4 (Major third), 5 (Perfect fourth), 7 (Perfect fifth).
- 4 choices; melodic; normal; 900 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 60–72.

### 24. Horn half-step light / Halbtonlicht im Horn — gentle

Introduce minor second with slow, sustained notes and clearly separated comparisons. 2 answers; ascending notes on French Horn.

- Intervals: 1 (Minor second), 4 (Major third).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 60 French Horn.
- Lower/root MIDI range: 55–60.

### 25. Two trumpet thirds / Zwei Trompetenterzen — gentle

Introduce minor third with slow, sustained notes and clearly separated comparisons. 2 answers; ascending notes on Trumpet.

- Intervals: 3 (Minor third), 4 (Major third).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–65.

### 26. Alto narrow lanes / Enge Gassen im Alt — steady

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Alto Sax.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 65 Alto Sax.
- Lower/root MIDI range: 55–60.

### 27. A piano guest / Ein Klavier zu Gast — gentle

Meet this timbre through slow, familiar, spaced intervals. 4 answers; descending notes on Acoustic Grand Piano.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–65.

### 28. Clarinet woven thirds / Verwobene Klarinettenterzen — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; simultaneous notes on Clarinet.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–65.

### 29. Trombone close corners / Enge Ecken der Posaune — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Trombone.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 57 Trombone.
- Lower/root MIDI range: 48–53.

### 30. Horn and tenor descent / Horn und Tenor im Abstieg — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; descending notes on French Horn, Tenor Sax.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 60 French Horn, 66 Tenor Sax.
- Lower/root MIDI range: 55–62.

### 31. Flute fine distinctions / Feine Unterschiede der Flöte — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Flute.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 60–65.

### 32. A guitar guest / Eine Gitarre zu Gast — gentle

Meet this timbre through slow, familiar, spaced intervals. 4 answers; simultaneous notes on Nylon Guitar.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 24 Nylon Guitar.
- Lower/root MIDI range: 60–65.

### 33. Tuba neighboring stones / Benachbarte Steine der Tuba — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Tuba.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 58 Tuba.
- Lower/root MIDI range: 43–48.

### 34. Clarinet small compass / Kleiner Klarinettenkompass — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Clarinet.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–65.

### 35. Piccolo small windows / Kleine Fenster des Piccolos — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Piccolo.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 72 Piccolo.
- Lower/root MIDI range: 72–77.

### 36. Trumpet lower paths / Tiefere Trompetenpfade — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Trumpet.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; ascending; normal; 900 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–67.

### 37. Alto and baritone steps / Schritte von Alt und Bariton — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; descending notes on Alto Sax, Baritone Sax.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; descending; normal; 900 ms per note.
- GM programs (zero-based): 65 Alto Sax, 67 Baritone Sax.
- Lower/root MIDI range: 48–60.

### 38. Bassoon welcome / Willkommen, Fagott — gentle

Meet this timbre through slow, familiar, spaced intervals. 4 answers; descending notes on Bassoon.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 70 Bassoon.
- Lower/root MIDI range: 48–53.

### 39. Soprano sax close listening / Genau hinhören im Sopransaxofon — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Soprano Sax.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; ascending; normal; 900 ms per note.
- GM programs (zero-based): 64 Soprano Sax.
- Lower/root MIDI range: 60–67.

### 40. Woodwind crossroads / Kreuzwege der Holzbläser — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending and descending notes on Clarinet, Flute.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; melodic; normal; 900 ms per note.
- GM programs (zero-based): 71 Clarinet, 73 Flute.
- Lower/root MIDI range: 60–67.

## Chapter 3

Review 41–60: introduce tritone, major sixth and sevenths with low secondary demands, then consolidate with four choices. Six-choice practice starts at 57 on familiar trumpet. A single violin guest appears at 52. Only 41 has two answers.

### 41. Trombone tilted fifth / Die schiefe Quinte der Posaune — gentle

Introduce tritone with slow, sustained notes and clearly separated comparisons. 2 answers; ascending notes on Trombone.

- Intervals: 4 (Major third), 6 (Tritone).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 57 Trombone.
- Lower/root MIDI range: 48–53.

### 42. Clarinet sixth horizon / Sextenhorizont der Klarinette — gentle

Introduce major sixth with slow, sustained notes and clearly separated comparisons. 4 answers; ascending notes on Clarinet.

- Intervals: 4 (Major third), 7 (Perfect fifth), 9 (Major sixth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–65.

### 43. Oboe seventh lantern / Die Septimenlaterne der Oboe — gentle

Introduce minor seventh with slow, sustained notes and clearly separated comparisons. 4 answers; ascending notes on Oboe.

- Intervals: 4 (Major third), 7 (Perfect fifth), 10 (Minor seventh), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 68 Oboe.
- Lower/root MIDI range: 60–65.

### 44. Flute sixth neighbors / Sextennachbarn der Flöte — steady

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Flute.

- Intervals: 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 60–67.

### 45. Trumpet seventh descent / Septimenabstieg der Trompete — gentle

Introduce major seventh with slow, sustained notes and clearly separated comparisons. 4 answers; descending notes on Trumpet.

- Intervals: 5 (Perfect fourth), 7 (Perfect fifth), 9 (Major sixth), 11 (Major seventh).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–65.

### 46. Alto sixth contours / Sextenkonturen im Alt — steady

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Alto Sax.

- Intervals: 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 65 Alto Sax.
- Lower/root MIDI range: 55–62.

### 47. Horn around the fourth / Das Horn rund um die Quarte — steady

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on French Horn.

- Intervals: 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 60 French Horn.
- Lower/root MIDI range: 55–67.

### 48. Trombone shared thirds / Gemeinsame Terzen der Posaune — steady

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; simultaneous notes on Trombone.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 57 Trombone.
- Lower/root MIDI range: 48–60.

### 49. Clarinet thirds return / Die Klarinettenterzen kehren zurück — steady

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Clarinet.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–67.

### 50. Low wind conversation / Gespräch der tiefen Bläser — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; descending notes on Tuba, Baritone Sax, Bassoon.

- Intervals: 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 58 Tuba, 67 Baritone Sax, 70 Bassoon.
- Lower/root MIDI range: 48–53.

### 51. Trumpet harmonic corners / Harmonische Trompetenecken — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; simultaneous notes on Trumpet.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–65.

### 52. A violin guest / Eine Geige zu Gast — gentle

Meet this timbre through slow, familiar, spaced intervals. 4 answers; descending notes on Violin.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 40 Violin.
- Lower/root MIDI range: 60–65.

### 53. Tuba patient turns / Geduldige Wendungen der Tuba — recovery

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; descending notes on Tuba.

- Intervals: 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 58 Tuba.
- Lower/root MIDI range: 43–50.

### 54. Flute nearing home / Die Flöte nähert sich dem Ziel — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Flute.

- Intervals: 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 4 choices; ascending; slow; 1000 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 60–67.

### 55. Clarinet fourth neighbors / Quartennachbarn der Klarinette — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Clarinet.

- Intervals: 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–67.

### 56. Saxophone reed junction / Kreuzung der Saxofonblätter — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; descending notes on Alto Sax, Tenor Sax.

- Intervals: 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 4 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 65 Alto Sax, 66 Tenor Sax.
- Lower/root MIDI range: 55–60.

### 57. Six trumpet signposts / Sechs Trompetenwegweiser — stretch

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending notes on Trumpet.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 6 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–65.

### 58. Horn close mosaic / Enges Hornmosaik — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on French Horn.

- Intervals: 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 60 French Horn.
- Lower/root MIDI range: 55–60.

### 59. Trombone changing paths / Wechselnde Posaunenwege — stretch

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending and descending notes on Trombone, Clarinet.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 6 choices; melodic; normal; 850 ms per note.
- GM programs (zero-based): 57 Trombone, 71 Clarinet.
- Lower/root MIDI range: 48–55.

### 60. The whole band listens / Das ganze Orchester hört zu — stretch

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending and descending notes on Trumpet, Flute, Alto Sax.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; melodic; normal; 850 ms per note.
- GM programs (zero-based): 56 Trumpet, 73 Flute, 65 Alto Sax.
- Lower/root MIDI range: 60–72.

## Chapter 4

Review 61–80: compact close-answer sets add speed, register, direction and harmonic transfer. Every new instrument first appears in a slower, spaced four-choice lesson; no binary lessons remain here.

### 61. Winds opening weave / Auftaktgeflecht der Bläser — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending and descending notes on Clarinet, French Horn.

- Intervals: 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 4 choices; melodic; normal; 850 ms per note.
- GM programs (zero-based): 71 Clarinet, 60 French Horn.
- Lower/root MIDI range: 55–62.

### 62. Trumpet quick decisions / Schnelle Trompetenentscheidungen — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending notes on Trumpet.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth).
- 6 choices; ascending; fast; 450 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–67.

### 63. Clarinet octave border / Oktavgrenze der Klarinette — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; descending notes on Clarinet.

- Intervals: 7 (Perfect fifth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave), 8 (Minor sixth).
- 6 choices; descending; slow; 1100 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–65.

### 64. Tuba close foundations / Enge Fundamente der Tuba — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Tuba.

- Intervals: 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 58 Tuba.
- Lower/root MIDI range: 43–48.

### 65. An electric piano guest / Ein E-Piano zu Gast — gentle

Meet this timbre through slow, familiar, spaced intervals. 4 answers; ascending notes on Electric Piano 1.

- Intervals: 2 (Major second), 4 (Major third), 7 (Perfect fifth), 12 (Perfect octave).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 4 Electric Piano 1.
- Lower/root MIDI range: 60–65.

### 66. Horn breathing space / Atempause im Horn — recovery

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending and descending notes on French Horn.

- Intervals: 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 4 choices; melodic; slow; 1100 ms per note.
- GM programs (zero-based): 60 French Horn.
- Lower/root MIDI range: 55–62.

### 67. Alto harmonic weave / Harmonisches Altgeflecht — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; simultaneous notes on Alto Sax.

- Intervals: 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 65 Alto Sax.
- Lower/root MIDI range: 55–60.

### 68. Trombone pillars together / Posaunensäulen im Zusammenklang — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; simultaneous notes on Trombone.

- Intervals: 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 57 Trombone.
- Lower/root MIDI range: 48–53.

### 69. Three reeds turn / Drei Holzbläser wenden sich — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Clarinet, Oboe, Soprano Sax.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 71 Clarinet, 68 Oboe, 64 Soprano Sax.
- Lower/root MIDI range: 60–65.

### 70. Flute small zigzag / Kleiner Flötenzickzack — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending and descending notes on Flute.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 6 choices; melodic; fast; 500 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 60–72.

### 71. Trumpet upper relay / Staffellauf der hohen Trompete — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; descending notes on Trumpet.

- Intervals: 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; descending; fast; 450 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–72.

### 72. Reeds pass the baton / Die Holzbläser geben weiter — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending and descending notes on Clarinet, Alto Sax, Tenor Sax.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third).
- 4 choices; melodic; fast; 450 ms per note.
- GM programs (zero-based): 71 Clarinet, 65 Alto Sax, 66 Tenor Sax.
- Lower/root MIDI range: 55–67.

### 73. Brass quick corners / Schnelle Blechecken — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending and descending notes on Trumpet, Trombone.

- Intervals: 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth).
- 4 choices; melodic; fast; 350 ms per note.
- GM programs (zero-based): 56 Trumpet, 57 Trombone.
- Lower/root MIDI range: 54–66.

### 74. Horn evening harmony / Abendharmonie im Horn — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; simultaneous notes on French Horn.

- Intervals: 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 60 French Horn.
- Lower/root MIDI range: 55–60.

### 75. Piccolo close detail / Piccolo im Detail — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Piccolo.

- Intervals: 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 72 Piccolo.
- Lower/root MIDI range: 72–77.

### 76. Band interval mosaic / Intervallmosaik des Orchesters — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending and descending notes on Clarinet, Trumpet, Flute.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth).
- 6 choices; melodic; normal; 900 ms per note.
- GM programs (zero-based): 71 Clarinet, 56 Trumpet, 73 Flute.
- Lower/root MIDI range: 60–67.

### 77. Tenor sax sixth route / Sextenweg des Tenorsaxofons — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; descending notes on Tenor Sax.

- Intervals: 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh).
- 6 choices; descending; normal; 850 ms per note.
- GM programs (zero-based): 66 Tenor Sax.
- Lower/root MIDI range: 55–67.

### 78. Clarinet harmonic neighbors / Harmonische Klarinettennachbarn — gentle

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; simultaneous notes on Clarinet.

- Intervals: 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–65.

### 79. Trumpet eleven doors / Elf Türen der Trompete — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending notes on Trumpet.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh).
- 6 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–67.

### 80. Rehearsal without a net / Orchesterprobe ohne Netz — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending and descending notes on Flute, French Horn, Alto Sax, Trombone.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; melodic; normal; 850 ms per note.
- GM programs (zero-based): 73 Flute, 60 French Horn, 65 Alto Sax, 57 Trombone.
- Lower/root MIDI range: 60–72.

## Chapter 5

Review 81–100: introduce ninths and tenths slowly with familiar, spaced alternatives at 82–85, then consolidate compounds at 86 and transfer them across familiar instruments at 94. Only 82 has two answers. The final two ten-question runs each contain all four compound targets and six distinct simple targets in randomized order.

### 81. Trumpet upper entrance / Hoher Einstieg der Trompete — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Trumpet.

- Intervals: 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh).
- 4 choices; ascending; normal; 900 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–72.

### 82. Clarinet ninth shelter / Nonenrast der Klarinette — gentle

Introduce minor ninth with slow, sustained notes and clearly separated comparisons. 2 answers; ascending notes on Clarinet.

- Intervals: 9 (Major sixth), 13 (Minor ninth).
- 2 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–65.

### 83. Trombone ninth gateway / Nonentor der Posaune — gentle

Introduce major ninth with slow, sustained notes and clearly separated comparisons. 4 answers; ascending notes on Trombone.

- Intervals: 7 (Perfect fifth), 10 (Minor seventh), 12 (Perfect octave), 14 (Major ninth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 57 Trombone.
- Lower/root MIDI range: 48–53.

### 84. Alto tenth horizon / Dezimenhorizont im Alt — gentle

Introduce minor tenth with slow, sustained notes and clearly separated comparisons. 4 answers; ascending notes on Alto Sax.

- Intervals: 7 (Perfect fifth), 10 (Minor seventh), 12 (Perfect octave), 15 (Minor tenth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 65 Alto Sax.
- Lower/root MIDI range: 55–60.

### 85. Flute beyond the octave / Flöte über der Oktave — gentle

Introduce major tenth with slow, sustained notes and clearly separated comparisons. 4 answers; ascending notes on Flute.

- Intervals: 7 (Perfect fifth), 10 (Minor seventh), 13 (Minor ninth), 16 (Major tenth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 73 Flute.
- Lower/root MIDI range: 60–65.

### 86. Tuba measured distance / Weite mit Maß in der Tuba — recovery

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Tuba.

- Intervals: 12 (Perfect octave), 13 (Minor ninth), 14 (Major ninth), 15 (Minor tenth), 16 (Major tenth).
- 4 choices; ascending; slow; 1100 ms per note.
- GM programs (zero-based): 58 Tuba.
- Lower/root MIDI range: 39–51.

### 87. Clarinet twelve paths / Zwölf Klarinettenwege — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending notes on Clarinet.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; ascending; normal; 850 ms per note.
- GM programs (zero-based): 71 Clarinet.
- Lower/root MIDI range: 60–72.

### 88. Trumpet moving skyline / Bewegte Trompetensilhouette — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; descending notes on Trumpet.

- Intervals: 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; descending; fast; 400 ms per note.
- GM programs (zero-based): 56 Trumpet.
- Lower/root MIDI range: 60–72.

### 89. Piccolo octave edges / Oktavränder des Piccolos — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; ascending notes on Piccolo.

- Intervals: 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave), 9 (Major sixth).
- 4 choices; ascending; normal; 850 ms per note.
- GM programs (zero-based): 72 Piccolo.
- Lower/root MIDI range: 72–84.

### 90. Low saxophone puzzle / Rätsel der tiefen Saxofone — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending and descending notes on Tenor Sax, Baritone Sax, Bassoon.

- Intervals: 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth).
- 6 choices; melodic; slow; 1100 ms per note.
- GM programs (zero-based): 66 Tenor Sax, 67 Baritone Sax, 70 Bassoon.
- Lower/root MIDI range: 48–60.

### 91. Horn and trombone harmony / Horn und Posaune im Zusammenklang — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; simultaneous notes on French Horn, Trombone.

- Intervals: 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; harmonic; slow; 1200 ms per note.
- GM programs (zero-based): 60 French Horn, 57 Trombone.
- Lower/root MIDI range: 48–60.

### 92. Flute and clarinet sprint / Sprint von Flöte und Klarinette — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending and descending notes on Flute, Clarinet.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 6 choices; melodic; fast; 500 ms per note.
- GM programs (zero-based): 73 Flute, 71 Clarinet.
- Lower/root MIDI range: 60–72.

### 93. Reed harmonic close-up / Holzbläserklänge aus der Nähe — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; simultaneous notes on Oboe, Alto Sax.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 6 choices; harmonic; normal; 1100 ms per note.
- GM programs (zero-based): 68 Oboe, 65 Alto Sax.
- Lower/root MIDI range: 55–67.

### 94. Brass beyond the horizon / Blech über dem Horizont — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending and descending notes on Trumpet, Trombone, French Horn.

- Intervals: 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave), 13 (Minor ninth), 14 (Major ninth), 15 (Minor tenth), 16 (Major tenth).
- 6 choices; melodic; normal; 850 ms per note.
- GM programs (zero-based): 56 Trumpet, 57 Trombone, 60 French Horn.
- Lower/root MIDI range: 54–62.

### 95. Alto small-step sprint / Alt im kleinen Schrittsprint — expert

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; descending notes on Alto Sax.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third).
- 4 choices; descending; fast; 350 ms per note.
- GM programs (zero-based): 65 Alto Sax.
- Lower/root MIDI range: 55–67.

### 96. Tuba harmonic labyrinth / Harmonisches Labyrinth der Tuba — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; simultaneous notes on Tuba.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 6 choices; harmonic; slow; 1200 ms per note.
- GM programs (zero-based): 58 Tuba.
- Lower/root MIDI range: 43–55.

### 97. Baritone sax close harmony / Enge Harmonie im Baritonsaxofon — stretch

Distinguish nearby intervals; replay freely to compare their distance. 4 answers; simultaneous notes on Baritone Sax.

- Intervals: 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone).
- 4 choices; harmonic; slow; 1100 ms per note.
- GM programs (zero-based): 67 Baritone Sax.
- Lower/root MIDI range: 48–60.

### 98. One last piano visit / Ein letzter Klavierbesuch — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending and descending notes on Acoustic Grand Piano.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave).
- 6 choices; melodic; fast; 450 ms per note.
- GM programs (zero-based): 0 Acoustic Grand Piano.
- Lower/root MIDI range: 60–72.

### 99. Band dress rehearsal / Generalprobe des Orchesters — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending and descending notes on Clarinet, Trumpet, Flute, French Horn, Alto Sax.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave), 13 (Minor ninth), 14 (Major ninth), 15 (Minor tenth), 16 (Major tenth).
- 6 choices; melodic; normal; 900 ms per note.
- GM programs (zero-based): 71 Clarinet, 56 Trumpet, 73 Flute, 60 French Horn, 65 Alto Sax.
- Lower/root MIDI range: 60–68.

### 100. Blasorchester finale / Blasorchesterfinale — expert

Distinguish nearby intervals; replay freely to compare their distance. 6 answers; ascending and descending notes on Trombone, Tenor Sax, Soprano Sax, Oboe.

- Intervals: 1 (Minor second), 2 (Major second), 3 (Minor third), 4 (Major third), 5 (Perfect fourth), 6 (Tritone), 7 (Perfect fifth), 8 (Minor sixth), 9 (Major sixth), 10 (Minor seventh), 11 (Major seventh), 12 (Perfect octave), 13 (Minor ninth), 14 (Major ninth), 15 (Minor tenth), 16 (Major tenth).
- 6 choices; melodic; fast; 550 ms per note.
- GM programs (zero-based): 57 Trombone, 66 Tenor Sax, 64 Soprano Sax, 68 Oboe.
- Lower/root MIDI range: 48–56.

## Collective review

Closeness remains the primary difficulty axis. Supported first appearances deliberately use easier comparisons and slow, sustained notes with narrow roots. Beyond level 20 only four lessons have two choices: 24, 25, 41 and 82. Other lessons use four or six choices. Compact answer sets replace target-only neighbor guarantees and remote filler. New instruments and intervals are checked dynamically against all preceding configurations. Every six-choice level has at least six eligible unique intervals; no sound-effect presets are used. Labels are editorial rather than measured learner ratings.

Pack 1 starts unlocked. Packs 2–5 require 30, 60, 90 and 120 total stars respectively; their first levels then open. Remaining levels open sequentially after one star in their predecessor within that chapter. Players may reach another pack before completing every previous level. Existing saved scores remain attached to numbered level slots; LEVEL_REORDER.md records the previous-to-new lesson order.
