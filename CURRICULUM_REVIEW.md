# Curriculum difficulty review

## Latest implementation: supported introductions and compact answer sets

The remaining issues described in the older reviews below were addressed by explicit user request. All 100 English/German names and each lesson's instrument set are preserved. Only 29/30 and 86/97 changed positions in this pass. See `LEVEL_REORDER.md` and regenerated `LEVEL_DESIGN.md` for current configurations.

- Only 24, 25, 41 and 82 retain two answers beyond level 20 (4 of 80 lessons). The extended binary block is replaced with four-choice practice and supported introductions.
- Every first appearance of an instrument or interval is checked against the actual preceding pools, including possible answer options. Introductions use slow, sustained notes, narrow roots and at most four choices with fixed presentation. New instruments use spaced familiar intervals. The focused minor/major-third introduction at 25 is the only new-interval introduction with semitone-close alternatives; it has just two answers on familiar piano.
- Compact windows in the sorted eligible interval pool replace the target-only nearest-answer rule. Dense reviews offer nearby alternatives for every displayed option. Widely spaced introduction pools are deliberate exceptions to the dense-review progression, rather than pretending to be peak discrimination lessons.
- Slow compound consolidation now follows the four compound introductions at 86, with multi-instrument transfer at 94 before the final combined assessments. The first harmonic lesson remains 12.
- Targets are balanced within each run. At 99–100 all four compounds and six distinct simple targets occur in each ten-question run in randomized order.

Actual-generator recheck: 500 seeded ten-question runs per level (500,000 questions). No displayed alternatives were excluded by the old nearest-answer rule. All 1,000 final-assessment runs included all four compounds. Mean semitone-neighbor distractor count was 1.67 at 57, 1.55 at 94, 1.57 at 99 and 1.58 at 100 (formerly about 1.09 at 100). This checks structural intent; perceptual difficulty still requires listening/playtesting. Historical percentages and unresolved recommendations below describe earlier versions.

## Second review of the rebalanced sequence — 2026-11-03

Verdict: improved, but not yet consistently balanced. This follow-up changes documentation only. It reviews the revised source and actual `createQuestion` behavior rather than relying on the presence of any one adjacent answer.

Method: 500 seeded ten-question runs per level (500,000 questions total), using the actual question generator, resetting history between runs. Measured the number of wrong answers one/two semitones from the target, answer options excluded by the nearest-answer rule, and compound coverage. These are structural diagnostics, not learner difficulty measurements.

| Pack | Mean wrong answers 1 semitone from target | Mean wrong answers within 2 semitones |
| --- | ---: | ---: |
| 1 | 0.00 | 0.10 |
| 2 | 1.14 | 1.88 |
| 3 | 1.22 | 1.69 |
| 4 | 1.39 | 2.29 |
| 5 | 1.34 | 2.17 |

Remaining issues, in priority order:

1. **Nearest-answer guarantee creates elimination clues.** When only the target is guaranteed its nearest available wrong answer, some displayed alternatives cannot themselves be correct under that same rule. In levels 99–100, about 2.2 of the six displayed options per question are excluded this way on average. This does not expose a unique answer, but reduces the effective competition. Generate plausible answer sets symmetrically (every displayed candidate needs a plausible neighbor), with target/coverage balancing; do not just force a neighbor of the correct answer. Preserve broad vocabulary across questions rather than using scattered alternatives in each question.
2. **Eleven binary lessons at 41–51 are too repetitive after four-choice work at 29–40.** The new upper-interval pairs are appropriate introductions, but 48–50 all return to minor/major thirds already covered earlier. Spread transfer/recovery lessons through the subsequent consolidation rather than putting them in one block. Bring appropriate four-choice upper comparisons forward after the first introductions.
3. **Broad late pools dilute close competition.** Level 57 has about 1.67 one-semitone and 3.01 within-two-semitone wrong answers; level 100 has about 1.09 and 1.61 respectively. Both have six choices. Timbre, direction, compound vocabulary and tempo still differ, but the dominant discrimination demand does not steadily increase. Advanced answer sets should supply several plausible close competitors, not just one close answer plus remote filler. Level 75 similarly contains two separated pairs rather than a dense four-choice neighborhood.
4. **Some introductions combine too many new demands.** Level 29 introduces four neighboring choices across three instruments in descending playback; level 30 offers a simpler single-instrument ascending introduction and should precede it. Level 85 introduces the major tenth while simultaneously using four answers, random directions, normal speed and a wider root range; give minor/major tenths a supported comparison before combined transfer.
5. **The final pack still has a long reduced-choice section.** Levels 82–84 are three slow binary compound lessons after advanced simple-interval work. Their pedagogical purpose is valid, but subsequent four/six-choice compound consolidation should follow deliberately. The current 97 recovery and 99–100 combined tests help; the combined tests need the answer-set correction above.
6. **Ten-question runs do not ensure coverage.** In this sample, only about 3–4% of runs at 99–100 played all four compound targets. A broad pool makes each particular learned distinction infrequent. If the finale is intended to assess compounds reliably, allocate question coverage explicitly rather than leaving the mix entirely random. This is a curriculum objective to choose, not proof that every run must contain every interval.
7. **Editorial labels overstate consistency.** Labels at 81, 86 and 89 are uniformly expert although they have four fixed-direction or slow answers; some earlier six-choice tasks are at least as demanding in close competition. Reassign labels from the final comparison structure plus secondary demands, not final-pack position.

Recommended next pass: fix answer-set plausibility first, interleave the 41–51 block, simplify the first four-choice and major-tenth introductions, then reassess labels and final-run coverage. Retain all existing names/instruments. Current passing structural tests confirm legality, sample coverage and nearest-answer presence; they do not certify this broader balance.

## Original audit and implementation status

Status: the review below describes the curriculum before rebalancing. The implementation preserves every name and instrument set, moves existing lessons, and retunes comparisons where necessary. See `LEVEL_REORDER.md` for the current mapping and `LEVEL_DESIGN.md` for current configurations. From pack 2 onward the sampler guarantees a nearest wrong answer; every target from level 24 onward has a semitone neighbor. The historical percentages below do not describe the revised sequence.

Post-rebalance structural check: balanced target exposure to a semitone-neighbor answer is now 0%, 87.5%, 100%, 100%, 100% by pack under the revised sampler. Pack 1 has fourteen two-choice lessons followed by six four-choice consolidations. Full `npm run check` passed: 57 tests, 30,000 seeded questions, 8,955 exhaustive sample combinations, lint, typechecks, asset and translation validation. Listening/playtesting remains necessary to assess actual learner difficulty.

Reviewed 2026-11-03 against the current 100 authored levels, including the revised level 96. Review only: no level settings changed during this audit.

## Principle and method

Answer-interval closeness is the primary design axis, followed by competing answer count; interval size, presentation, timing, register and timbre refine the challenge. These are structural comparisons under the user’s design principle, not measured learner difficulty or a validated numerical difficulty score.

For every level, enumerated every possible distractor subset produced by `createQuestion`. Each target interval receives equal weight; distractor subsets are uniform conditional on that target, matching the sampler. History can alter individual target frequencies within a ten-question run; these figures are a balanced design audit, not a prediction of one run.

“Adjacent target” is the probability that a displayed wrong answer lies one semitone from the correct interval. “Nearest gap” is the expected minimum distance from the target to a displayed wrong answer. Both refer to the target, not just any close pair elsewhere among the answers. Lower gap and higher adjacency mean more close discrimination opportunities. Neither metric captures interval identity, familiarity, consonance or octave-related confusion.

## Main findings

1. The primary difficulty axis peaks in pack 3 and weakens in packs 4–5. Equal-weight adjacent-target exposure is 0%, 36%, 83%, 64%, 58% by pack. This is not an overall difficulty ranking, but it contradicts a progression built primarily around closeness.
2. Late wide binary resets are the clearest mismatch: 72, 84, 88, 94 and 95. The fifth-versus-compound gaps are 6, 7 and 8 semitones at 84, 88 and 94. Compound size is being mistaken for demanding discrimination.
3. Recovery is overused early: pack 1 has 18 two-choice levels, and 11 levels carry recovery labels. Several descriptions refer to challenges no longer preceding them (8, 9, 10 and 15).
4. Progression has cliffs: 20→21 moves into semitone pairs; 29–33 repeatedly fall back to broad pools; 34–40 mostly stop close-comparison training; 50→51 jumps from a seven-semitone binary contrast to six answers.
5. A large pool does not guarantee difficult displayed answers. At level 73 and the other full 12-interval/six-choice levels, only about 68% of target/answer combinations include a semitone neighbor. At 55, 66, 67 and 85 it is 100%. Full-vocabulary review and dense discrimination are different goals.
6. Several expert labels depend mostly on speed, register or instruments: 68, 75, 77, 83 and 92. Meanwhile 63 and 67 have six contiguous candidates but only stretch labels. Labels need a consistent rubric after rebalancing.
7. Compounds are introduced in isolated broad pairs and barely consolidated together. The revised 96 improves this, but the minor ninth from 84 is absent from its pool, and 97–100 return exclusively to simple intervals.
8. Focused neighboring pairs (70, 74, 79, 91, 98) are not automatically easy: they retain the dominant discrimination demand. Their late placement should teach transfer and lead into multi-choice integration rather than restart the same binary skill.

## Pack overview

| Pack | Adjacent target | Two-choice levels | Assessment |
| --- | ---: | ---: | --- |
| 1 (1–20) | 0% | 18 | Sound beginner vocabulary, excessive repeated broad binary recovery. |
| 2 (21–40) | 36% | 7 | Good close-pair introduction, inconsistent consolidation and weak pack ending. |
| 3 (41–60) | 83% | 9 | Strongest sustained closeness progression; repetitive binary opening and abrupt six-choice bridge. |
| 4 (61–80) | 64% | 4 | Good advanced cores, interrupted by broad/easier alternatives and uneven labels. |
| 5 (81–100) | 58% | 6 | Several strong peaks, but broad compound introductions and late resets weaken the final stretch. |

## Recommended revision order

1. Retune 84, 88, 94 and 95, plus 72 and the final-pack opener 81. Preserve compound introductions through close but supported comparisons, not a fifth anchor.
2. Specify close-distractor guarantees for advanced levels before changing pools. Keep random variety, but make the intended discrimination demand stable. Apply by level purpose, not globally to beginner lessons.
3. Remove redundant early resets and bridge 20→21, the end of pack 2, and 50→51. Keep the existing first-pack no-neighbor and later no-unison constraints unless deliberately revised.
4. Build a compound consolidation arc: octave/minor ninth, minor/major ninth, major ninth/minor tenth, minor/major tenth, then a combined assessment. This needs authored changes and sample-range validation, not automatic slot replacement.
5. Recover through slower notes, familiar timbre or narrower roots while retaining late-stage close alternatives. Keep occasional explicit vocabulary review, but distinguish its purpose from peak discrimination.
6. Rewrite difficulty labels, titles and descriptions after final configurations; regenerate documentation and validate assets, translations and questions. Level 46 is titled “Sevenths falling” but currently plays ascending; resolve that mismatch during revision.

## All 100 levels

Intervals and gaps are in semitones. Recommendations consider the secondary settings in the source as well as these proximity measures.

| Level | Interval pool | Choices | Adjacent target | Nearest gap | Review |
| --- | --- | ---: | ---: | ---: | --- |
| 1. Same or soaring | 0, 12 | 2 | 0% | 12.00 | Keep as introductory contrasts; introduce one secondary demand at a time. |
| 2. A brass hello | 4, 7 | 2 | 0% | 3.00 | Keep as introductory contrasts; introduce one secondary demand at a time. |
| 3. Guitar steps down | 7, 12 | 2 | 0% | 5.00 | Keep as introductory contrasts; introduce one secondary demand at a time. |
| 4. Together at the piano | 0, 7 | 2 | 0% | 7.00 | Keep as introductory contrasts; introduce one secondary demand at a time. |
| 5. Air above | 4, 12 | 2 | 0% | 8.00 | Keep as introductory contrasts; introduce one secondary demand at a time. |
| 6. Cello foundations | 0, 7 | 2 | 0% | 7.00 | Keep as introductory contrasts; introduce one secondary demand at a time. |
| 7. A little farther | 2, 5 | 2 | 0% | 3.00 | Keep as introductory contrasts; introduce one secondary demand at a time. |
| 8. Bass breathing space | 0, 12 | 2 | 0% | 12.00 | Too many wide two-choice resets in pack 1; retain only selected breathers, use remaining slots for closer 2–3-semitone comparisons or four-choice consolidation. |
| 9. Trumpet reprieve | 5, 12 | 2 | 0% | 7.00 | Too many wide two-choice resets in pack 1; retain only selected breathers, use remaining slots for closer 2–3-semitone comparisons or four-choice consolidation. |
| 10. Quiet low strings | 4, 12 | 2 | 0% | 8.00 | Too many wide two-choice resets in pack 1; retain only selected breathers, use remaining slots for closer 2–3-semitone comparisons or four-choice consolidation. |
| 11. A clean landing | 0, 7 | 2 | 0% | 7.00 | Too many wide two-choice resets in pack 1; retain only selected breathers, use remaining slots for closer 2–3-semitone comparisons or four-choice consolidation. |
| 12. Marimba rest stop | 4, 7 | 2 | 0% | 3.00 | Useful 3-semitone contrast; consolidate rather than label as automatic recovery. |
| 13. Harp geometry | 0, 4, 8, 12 | 4 | 0% | 4.00 | Keep four-choice milestone; add a gradual bridge into the one-semitone comparisons in pack 2. |
| 14. Flute horizon | 5, 12 | 2 | 0% | 7.00 | Too many wide two-choice resets in pack 1; retain only selected breathers, use remaining slots for closer 2–3-semitone comparisons or four-choice consolidation. |
| 15. Two soft plucks | 5, 12 | 2 | 0% | 7.00 | Too many wide two-choice resets in pack 1; retain only selected breathers, use remaining slots for closer 2–3-semitone comparisons or four-choice consolidation. |
| 16. Air and strings | 5, 7 | 2 | 0% | 2.00 | Keep 2-semitone comparison; harder discrimination than most pack-1 recovery levels. |
| 17. Open strings clearing | 0, 12 | 2 | 0% | 12.00 | Too many wide two-choice resets in pack 1; retain only selected breathers, use remaining slots for closer 2–3-semitone comparisons or four-choice consolidation. |
| 18. Trumpet sunlight | 4, 12 | 2 | 0% | 8.00 | Too many wide two-choice resets in pack 1; retain only selected breathers, use remaining slots for closer 2–3-semitone comparisons or four-choice consolidation. |
| 19. Flute calm | 4, 7 | 2 | 0% | 3.00 | Useful 3-semitone contrast; consolidate rather than label as automatic recovery. |
| 20. First crossroads | 0, 4, 7, 12 | 4 | 0% | 3.75 | Keep four-choice milestone; add a gradual bridge into the one-semitone comparisons in pack 2. |
| 21. Half-step lanterns | 1, 2 | 2 | 100% | 1.00 | Keep focused neighboring pair; separate register/direction transfer from introducing the distinction. |
| 22. Quick wooden echoes | 7, 12 | 2 | 0% | 5.00 | Redundant easy two-choice review; replace or move earlier, retaining at most selected recovery. |
| 23. Two shades of third | 3, 4 | 2 | 100% | 1.00 | Keep focused neighboring pair; separate register/direction transfer from introducing the distinction. |
| 24. Four familiar shapes | 2, 4, 7, 12 | 4 | 0% | 3.00 | Broadly spaced review; reduce repetition and progressively include close alternatives. Pack ending needs a closer-choice consolidation. |
| 25. High porcelain | 1, 2 | 2 | 100% | 1.00 | Keep focused neighboring pair; separate register/direction transfer from introducing the distinction. |
| 26. A bow between friends | 4, 7 | 2 | 0% | 3.00 | Redundant easy two-choice review; replace or move earlier, retaining at most selected recovery. |
| 27. Thirds on the way down | 3, 4 | 2 | 100% | 1.00 | Keep focused neighboring pair; separate register/direction transfer from introducing the distinction. |
| 28. Three travelers | 3, 5, 7, 12 | 4 | 0% | 2.75 | Broadly spaced review; reduce repetition and progressively include close alternatives. Pack ending needs a closer-choice consolidation. |
| 29. Bright crowded keys | 1, 2, 3, 4 | 4 | 100% | 1.00 | Keep dense small-interval progression; substantial discrimination milestone. |
| 30. Bells at a run | 2, 5, 7, 12 | 4 | 0% | 3.00 | Broadly spaced review; reduce repetition and progressively include close alternatives. Pack ending needs a closer-choice consolidation. |
| 31. Smallest shadows | 1, 2, 3, 4 | 4 | 100% | 1.00 | Keep dense small-interval progression; substantial discrimination milestone. |
| 32. Low brass corners | 2, 5, 7, 12 | 4 | 0% | 3.00 | Broadly spaced review; reduce repetition and progressively include close alternatives. Pack ending needs a closer-choice consolidation. |
| 33. Seconds in company | 1, 2, 3, 4, 5 | 4 | 90% | 1.10 | Keep dense small-interval progression; substantial discrimination milestone. |
| 34. Piccolo windows | 2, 4, 7, 12 | 4 | 0% | 3.00 | Broadly spaced review; reduce repetition and progressively include close alternatives. Pack ending needs a closer-choice consolidation. |
| 35. Quick brass anchors | 4, 7 | 2 | 0% | 3.00 | Redundant easy two-choice review; replace or move earlier, retaining at most selected recovery. |
| 36. Wide piano compass | 2, 4, 7, 9, 12 | 4 | 0% | 2.60 | Broadly spaced review; reduce repetition and progressively include close alternatives. Pack ending needs a closer-choice consolidation. |
| 37. Guitar lightning | 3, 5, 7, 12 | 4 | 0% | 2.75 | Broadly spaced review; reduce repetition and progressively include close alternatives. Pack ending needs a closer-choice consolidation. |
| 38. Bassoon pathways | 2, 3, 5, 7, 12 | 4 | 30% | 2.55 | Only 30% of answer sets provide a semitone neighbor to the target; strengthen close distractors if used as consolidation. |
| 39. Harp invitation | 2, 4, 7, 9 | 4 | 0% | 2.00 | Broadly spaced review; reduce repetition and progressively include close alternatives. Pack ending needs a closer-choice consolidation. |
| 40. High wind sprint | 2, 5, 7, 12 | 4 | 0% | 3.00 | Broadly spaced review; reduce repetition and progressively include close alternatives. Pack ending needs a closer-choice consolidation. |
| 41. The tilted fifth | 6, 7 | 2 | 100% | 1.00 | Keep neighboring-pair teaching; eight consecutive two-choice levels need a staged consolidation/transfer arc rather than repeated restarts. |
| 42. Warm sixths | 8, 9 | 2 | 100% | 1.00 | Keep neighboring-pair teaching; eight consecutive two-choice levels need a staged consolidation/transfer arc rather than repeated restarts. |
| 43. Sevenths in the reeds | 10, 11 | 2 | 100% | 1.00 | Keep neighboring-pair teaching; eight consecutive two-choice levels need a staged consolidation/transfer arc rather than repeated restarts. |
| 44. Sixths in the air | 8, 9 | 2 | 100% | 1.00 | Keep neighboring-pair teaching; eight consecutive two-choice levels need a staged consolidation/transfer arc rather than repeated restarts. |
| 45. Cello thirds return | 3, 4 | 2 | 100% | 1.00 | Keep neighboring-pair teaching; eight consecutive two-choice levels need a staged consolidation/transfer arc rather than repeated restarts. |
| 46. Sevenths falling | 10, 11 | 2 | 100% | 1.00 | Keep neighboring-pair teaching; eight consecutive two-choice levels need a staged consolidation/transfer arc rather than repeated restarts. |
| 47. Sixths under glass | 7, 8 | 2 | 100% | 1.00 | Keep neighboring-pair teaching; eight consecutive two-choice levels need a staged consolidation/transfer arc rather than repeated restarts. |
| 48. The moving semitone | 5, 6 | 2 | 100% | 1.00 | Keep neighboring-pair teaching; eight consecutive two-choice levels need a staged consolidation/transfer arc rather than repeated restarts. |
| 49. Viola welcome | 3, 4, 5, 7 | 4 | 75% | 1.25 | Useful four-choice bridge; isolated anchor targets remain easier than clustered targets. |
| 50. Cello long view | 5, 12 | 2 | 0% | 7.00 | Large reset immediately before first six-choice task; narrow the contrast or reposition the breather. |
| 51. Six signposts | 2, 3, 4, 5, 7, 12 | 6 | 67% | 1.83 | First six-choice task after an easy reset; add a closer four-choice bridge before it. |
| 52. Almost home | 10, 11, 12, 7 | 4 | 75% | 1.50 | Useful four-choice bridge; isolated anchor targets remain easier than clustered targets. |
| 53. A fourth on either side | 4, 5, 6, 7 | 4 | 100% | 1.00 | Keep dense comparisons; strong core challenges. Vary secondary demands without removing close alternatives. |
| 54. Reed junction | 2, 3, 5, 6, 7, 10 | 4 | 55% | 1.83 | Useful transfer, but random/uneven alternatives dilute proximity; define intended close-choice frequency. |
| 55. Three ways through | 2, 3, 4, 5, 6, 7 | 6 | 100% | 1.00 | Keep dense comparisons; strong core challenges. Vary secondary demands without removing close alternatives. |
| 56. Organ dusk | 8, 9, 10, 11 | 4 | 100% | 1.00 | Keep dense comparisons; strong core challenges. Vary secondary demands without removing close alternatives. |
| 57. A wooden switch | 1, 2, 5, 6 | 4 | 100% | 1.00 | Keep dense comparisons; strong core challenges. Vary secondary demands without removing close alternatives. |
| 58. Accordion angles | 1, 4, 5, 6, 8, 11 | 6 | 50% | 1.83 | Useful transfer, but random/uneven alternatives dilute proximity; define intended close-choice frequency. |
| 59. Eleven neighboring doors | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 | 6 | 73% | 1.37 | Broad vocabulary review; not inherently harder in discrimination than the fixed dense pool at 55. |
| 60. Third mosaic | 1, 3, 4, 6, 7, 8, 9, 11, 12 | 6 | 62% | 1.56 | Useful transfer, but random/uneven alternatives dilute proximity; define intended close-choice frequency. |
| 61. Opening mosaic | 3, 4, 5, 7, 12 | 4 | 50% | 2.25 | Reasonable pack entry only as brief consolidation; half the targets have an adjacent alternative. |
| 62. Piano flashcards | 2, 3, 4, 5, 7, 12 | 6 | 67% | 1.83 | Useful speed transfer; retain the distinction from dense six-choice discrimination. |
| 63. Near the octave | 7, 9, 10, 11, 12, 8 | 6 | 100% | 1.00 | Keep as core advanced discrimination; closeness remains demanding despite differences in editorial labels. |
| 64. Bass under pressure | 3, 4, 6, 7 | 4 | 100% | 1.00 | Keep as core advanced discrimination; closeness remains demanding despite differences in editorial labels. |
| 65. Second mosaic | 1, 2, 3, 4, 6, 7, 10, 12 | 6 | 60% | 1.61 | Keep broad vocabulary milestone, but enforce close distractors if it must test advanced discrimination consistently. |
| 66. Low harmonic labyrinth | 1, 2, 3, 4, 5, 6 | 6 | 100% | 1.00 | Keep as core advanced discrimination; closeness remains demanding despite differences in editorial labels. |
| 67. Around the sixth | 5, 6, 7, 8, 9, 10 | 6 | 100% | 1.00 | Keep as core advanced discrimination; closeness remains demanding despite differences in editorial labels. |
| 68. Double-reed shadows | 1, 3, 6, 8, 10, 11 | 6 | 33% | 1.67 | Expert label relies heavily on secondary demands; make distractors closer or describe as transfer/speed/timbre practice. |
| 69. Clavinet corners | 2, 4, 7, 12 | 4 | 0% | 3.00 | Fast notes do not replace close comparisons; tighten answers or move earlier. |
| 70. Two bass colors | 3, 4 | 2 | 100% | 1.00 | Valid focused neighboring-pair transfer; use sparingly late, then consolidate with four/six close choices. |
| 71. Choir intervals | 2, 4, 5, 7, 9, 12 | 6 | 33% | 1.83 | Harmonic transfer with uneven spacing; keep purpose explicit and increase close alternatives if intended as advanced discrimination. |
| 72. Nylon reset | 4, 7 | 2 | 0% | 3.00 | Wide two-choice reset too late for routine progression; replace with a close comparison at a calmer pace. |
| 73. All twelve | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 | 6 | 68% | 1.46 | Keep broad vocabulary milestone, but enforce close distractors if it must test advanced discrimination consistently. |
| 74. Muted brass twins | 10, 11 | 2 | 100% | 1.00 | Valid focused neighboring-pair transfer; use sparingly late, then consolidate with four/six close choices. |
| 75. Celesta zigzag | 1, 2, 4, 6, 8, 12 | 6 | 33% | 2.00 | Expert label relies heavily on secondary demands; make distractors closer or describe as transfer/speed/timbre practice. |
| 76. Saxophone neighbors | 2, 3, 4, 5 | 4 | 100% | 1.00 | Keep as core advanced discrimination; closeness remains demanding despite differences in editorial labels. |
| 77. Marimba spectrum | 1, 3, 5, 7, 8, 10, 12 | 6 | 24% | 1.86 | Expert label relies heavily on secondary demands; make distractors closer or describe as transfer/speed/timbre practice. |
| 78. Organ pillars | 4, 5, 7, 12 | 4 | 50% | 2.25 | Harmonic transfer with uneven spacing; keep purpose explicit and increase close alternatives if intended as advanced discrimination. |
| 79. Half-step relay | 1, 2 | 2 | 100% | 1.00 | Valid focused neighboring-pair transfer; use sparingly late, then consolidate with four/six close choices. |
| 80. Fourth mosaic | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 | 6 | 68% | 1.46 | Keep broad vocabulary milestone, but enforce close distractors if it must test advanced discrimination consistently. |
| 81. A clear entrance | 3, 5, 7, 12 | 4 | 0% | 2.75 | Final-pack opener repeats an earlier sparse four-choice task; tighten pool while keeping normal-speed familiar presentation. |
| 82. Crowded upper strings | 6, 7, 8, 9, 10, 11, 12 | 6 | 95% | 1.05 | Keep as final-pack core: consistently close alternatives. |
| 83. Trumpet in motion | 2, 4, 5, 7, 9, 12 | 6 | 33% | 1.83 | Expert label relies heavily on secondary demands; make distractors closer or describe as transfer/speed/timbre practice. |
| 84. Guitar shelter | 7, 13 | 2 | 0% | 6.00 | Highest-priority retune: compound interval versus fifth is a broad binary contrast; scaffold compounds against octave and neighboring compounds instead. |
| 85. Black-key neighbors | 1, 2, 3, 4, 5, 6 | 6 | 100% | 1.00 | Keep as final-pack core: consistently close alternatives. |
| 86. Piccolo fine print | 10, 11, 12, 9 | 4 | 100% | 1.00 | Keep as final-pack core: consistently close alternatives. |
| 87. Bass octave puzzle | 2, 3, 4, 5, 7, 10, 12 | 6 | 52% | 1.60 | Useful low-register transfer, but only about half of target/answer combinations have a semitone neighbor. |
| 88. Harp breathing room | 7, 14 | 2 | 0% | 7.00 | Highest-priority retune: compound interval versus fifth is a broad binary contrast; scaffold compounds against octave and neighboring compounds instead. |
| 89. Reed close-up | 1, 2, 3, 4, 6, 7 | 6 | 100% | 1.00 | Keep as final-pack core: consistently close alternatives. |
| 90. Across the keyboard | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 | 6 | 68% | 1.46 | Keep broad vocabulary milestone, but enforce close distractors if it must test advanced discrimination consistently. |
| 91. Flute thirds revisit | 3, 4 | 2 | 100% | 1.00 | Close pair remains useful; recovery should come from calmer presentation, then return to broader close-choice consolidation. |
| 92. Metal and wood | 1, 3, 5, 6, 8, 10, 11, 12 | 6 | 48% | 1.64 | Expert label relies heavily on secondary demands; make distractors closer or describe as transfer/speed/timbre practice. |
| 93. String seconds sprint | 1, 2, 3, 4 | 4 | 100% | 1.00 | Keep as final-pack core: consistently close alternatives. |
| 94. Beyond the octave | 7, 15 | 2 | 0% | 8.00 | Highest-priority retune: compound interval versus fifth is a broad binary contrast; scaffold compounds against octave and neighboring compounds instead. |
| 95. Low brass return | 4, 7 | 2 | 0% | 3.00 | Highest-priority retune: slow binary third-versus-fifth harmony is too weak for this position; use closer alternatives. |
| 96. Compound air | 12, 14, 15, 16 | 4 | 75% | 1.25 | Improved: four close upper intervals. Octave target still has a 2-semitone nearest alternative; no minor ninth in this final compound review. |
| 97. Chamber crossroads | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 | 6 | 68% | 1.46 | Keep broad vocabulary milestone, but enforce close distractors if it must test advanced discrimination consistently. |
| 98. The last quick pair | 6, 7 | 2 | 100% | 1.00 | Valid focused neighboring-pair transfer; use sparingly late, then consolidate with four/six close choices. |
| 99. One quiet breath | 3, 4, 7, 12 | 4 | 50% | 2.50 | Reasonable calm presentation; retain late-game discrimination by tightening the four-choice pool. |
| 100. Listn finale | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 | 6 | 68% | 1.46 | Keep broad vocabulary milestone, but enforce close distractors if it must test advanced discrimination consistently. |
