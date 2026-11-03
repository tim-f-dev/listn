# Listn chat handoff

Last updated: 2026-11-03. This document captures the previous chat; verify current repository state before continuing.

## Latest chat handoff (takes precedence over historical notes below)

- SDK-compatible patch update completed by user request (2026-11-03): installed expo 58.0.22, expo-asset 58.0.19, expo-audio 58.0.11, expo-constants 58.0.14, expo-linking 58.0.15, expo-router 58.0.29, expo-status-bar 58.0.4, react-native 0.88.1 and react-native-screens 4.30.1 via `npx expo install --fix`. package.json/package-lock.json updated; Expo automatically added the expo-status-bar config plugin. Expo Doctor now passes 20/20, dependency compatibility passes, full checks pass (58 tests), and fresh Android/iOS/web production exports succeed. Remaining npm audit count: 24 moderate + one high (zod in the ESLint development dependency chain); no unrelated/breaking audit fixes applied. See latest `PACKAGING_REVIEW.md`. Version remains 1.0.0; no native build/upload/publication. Earlier nine-package-mismatch notes are historical.

- Packaging readiness review (2026-11-03): see `PACKAGING_REVIEW.md`. Fresh full check passed (58 tests, 30,000 questions, assets/i18n) and Android/iOS/web production exports succeeded. Expo Doctor passed 19/20, with nine SDK-compatible patch mismatches as the sole failure. No code/dependency updates or native build were made. EAS project verification failed twice at npm's CLI-cache lock before EAS ran; the recorded slug/project-ID concern is unverified, not confirmed resolved. Recommended next work: compatible patch updates, EAS association verification and intended visible version, then installed-device audio/offline/persistence smoke testing. Replace upscaled web store screenshots with native Android captures before publication. Legacy Intervalify-key migration remains a release decision.

### Supported introductions and compact answer sets (latest implementation, 2026-11-03)

- User authorized fixing the remaining balance issues, making two-choice lessons very rare beyond 20, and keeping every new instrument/interval introduction rather easy. Implemented. All 100 English/German names and each lesson's instrument set are preserved. Only positions 29/30 and 86/97 swapped in this pass; see latest `LEVEL_REORDER.md` mapping. Scores/stars remain on numbered slots.
- Only four of the 80 levels after 20 now have two choices: 24, 25, 41, 82. These introduce minor second, minor third, tritone and minor ninth. All other post-20 levels have four or six answers; the eleven-level binary block is removed.
- First appearances are derived from actual preceding interval/instrument pools, including answer candidates. Each introduction has slow sustained notes (1100 ms), at most four answers, a root range at most five semitones wide and fixed presentation. New instruments always use spaced candidates. New intervals use spaced familiar anchors except the focused two-choice minor/major-third introduction at 25. Tests enforce these properties. This supersedes previous insistence that every target after 24 must have a semitone neighbor: supported introductions intentionally remain easier.
- Harmonic introduction remains 12. Current harmonic IDs: 12, 28, 32, 48, 51, 67, 68, 74, 78, 91, 93, 96, 97. Low brass return moved to 97; One quiet breath moved to 86 for compound consolidation. New ninths/tenths are introduced slowly at 82–85 with spaced alternatives; 86 consolidates close compounds, 94 transfers them across familiar instruments, 99–100 integrate them.
- `createQuestion` replaces the target-only nearest-distractor rule with consecutive windows in the sorted interval pool (pack 2 onward). Close review pools create compact answer sets with plausible alternatives for every displayed option; introductory pools intentionally have wider spacing. Targets are balanced within ten-question runs. Binary lessons retain their old repetition behavior.
- Final broad simple/compound assessments allocate all four compound targets and six distinct simple targets per ten-question run in randomized order. Actual-generator recheck: 500,000 questions, zero options excluded by the previous nearest-answer clue, and full compound coverage in all 1,000 sampled final runs. All 34 instrument sets remain covered. Latest docs/source supersede historical review figures below.
- Final full `npm run check` passed: lint, both typechecks, 58 tests, 30,000 seeded questions, 8,523 exhaustive instrument/root/interval combinations, checksummed audio assets and en/de validation. Generated docs refreshed. Changes remain uncommitted.

### Curriculum rebalance (implemented by explicit user request, 2026-11-03)

- Subsequent user request: delay the harmonic introduction, otherwise keep the curriculum as-is. Levels 3 and 4 now use ascending melodic playback; level 12 is the first harmonic lesson. The tutorial detects this dynamically. All other level settings, names and ordering are unchanged; en/de descriptions and generated docs were updated. Current harmonic IDs: 12, 28, 32, 48, 51, 67, 68, 74, 78, 86, 91, 93, 96. This supersedes the earlier first-harmonic-at-3 note below.

- Follow-up review found remaining balance issues; see the **Second review** at the top of `CURRICULUM_REVIEW.md`. In 500,000 actual generated questions, the target-only nearest-answer guarantee excluded about 2.2 displayed alternatives on average at 99–100, and broad final pools had fewer close distractors than earlier dense lessons. Also flagged the eleven binary lessons at 41–51, introductions at 29 and 85, positional expert labels and sparse per-run compound coverage. This follow-up is review only; further corrections are not implemented. The report now contains both this current review and the historical pre-rebalance audit.

- Implemented the closeness-first audit. All 100 English/German lesson names and instrument sets are preserved; lessons were moved and pools retuned where needed. `LEVEL_REORDER.md` records the immediate previous-to-current mapping; its older mapping is historical. Scores/stars remain attached to numbered slots as before; no save migration or gate changes.
- Pack 1 progresses from broad pairs to six four-choice lessons, with pools at least two semitones apart. Pack 2 bridges into neighboring small comparisons. Pack 3 teaches upper neighboring pairs, then four/six-choice consolidation. Packs 4–5 keep close comparisons while adding secondary demands; recovery uses calmer presentation.
- `createQuestion` includes one of the nearest wrong answers from pack 2 onward, with randomized ties and remaining alternatives. Every target from level 24 onward has a semitone neighbor. First 50 still avoid fast playback and six answers; unison remains confined to pack 1.
- Compounds: 82 octave/minor ninth, 83 minor/major ninth, 84 major ninth/minor tenth, 85 four neighboring ninths/tenths. Level 97 consolidates octave through major tenth; 99–100 include simple intervals and all ninths/tenths. Final roots are 60–68 to fit all instrument samples.
- Level 96 is now Low harmonic labyrinth; Compound air is 85. First harmonic level is now 3, detected dynamically. Sevenths falling is now 45 and actually descends. Historical IDs/settings below are superseded.
- `CURRICULUM_REVIEW.md` is the pre-rebalance audit. Current source and regenerated `LEVEL_DESIGN.md` are authoritative. This rebalance is authorized work separate from the planning-only roadmap entry below.
- Full `npm run check` passed after the rebalance: lint, app/test typechecks, all 57 tests, 30,000 seeded questions, 8,955 exhaustive instrument/root/interval combinations, checksummed audio assets and en/de validation. Documentation regenerated. Changes remain uncommitted.

- Progress-tracking update (2026-11-03): this chat is planning only. ROADMAP.md records the proposed 1.1.0 beta, store listing with screenshots/explanation, difficulty review, more Musikverein/wind-band instrument levels with fewer strings, and a later rhythm-listening track. Do not implement these ideas without a subsequent request. Configured versions remain 1.0.0.
- All changes remain uncommitted. Do not automatically commit, push, deploy, or discard unrelated work.
- Current dependencies: Expo SDK 58, React Native 0.88, npm with `package-lock.json`. Follow AGENTS.md and versioned Expo docs before changing Expo/React Native APIs.
- Latest preview: `http://localhost:8082`. Reuse it if running; do not accumulate servers. It was started with the old unlock environment flag, but access now depends solely on the saved mode described below.

### Branding and icons

- New logo: ascending beamed notes with a smile/slur, ink on a paper tile. Clean SVG master and 1024px transparent-corner PNG: `assets/branding/listn-logo.svg` and `listn-logo.png`.
- Home displays the logo, Listn, and **Your ear trainer / Dein Gehörtrainer**. Removed the old eyebrow and multi-line tagline. Keep **Hear the difference. / Hör den Unterschied.** reserved for future website/store marketing.
- Updated configured app icon, website favicon, Android adaptive background/foreground and monochrome assets. iOS/general icon is opaque and square; Android foreground has safe padding. Native launcher changes require a new build; public website changes require deployment. `splash-icon.png` artwork was also replaced, but no new splash plugin was configured.
- Phosphor Regular icons replace Home, Menu, replay/restart, back/forward, stars, locks and Options; earned stars use Fill. `src/components/Icon.tsx` renders locally bundled transparent PNGs with theme tint. Original SVGs and pinned source revision are in `assets/icons/phosphor/`. No new runtime dependency was added.
- Phosphor MIT license: `licenses/Phosphor.txt`; attribution, source link and full notice are in Credits, `src/audio/licenses.json`, and `THIRD_PARTY_LICENSES.md`.

### Current screens and interactions

- Pack selection (`src/app/levels.tsx`) now uses five stacked rows, not horizontal scrolling: two-digit number, serif pack name, stars and level range for unlocked packs, required total stars and lock for locked packs. The first unlocked pack below 60 stars gets a rust outline. Title remains **Levels / Level**.
- Rows adapt to measured space. Verified without scrolling at 320×568 and 390×844 in English. Extremely constrained screens or enlarged text retain vertical scrolling; do not clip content to force a fit. Pack names below are intentional, including **Listning** and **Über der Oktave**.
- Level-details popup (`src/components/LevelDetails.tsx`): instruments and sorted intervals are listed without headings. Facts are stacked; pagination and Playback & format are removed. Tapping outside or the red close button closes it. Long content scrolls while Start, best/stars and previous/next level controls remain available.
- Highlights come from actual settings in `src/game/specialties.ts`, not the historical level descriptions. Omit standard ascending playback and two choices. Show other directions, harmonic/melodic direction changes, four/six choices, slow/fast playback, multiple instruments, compound/neighboring intervals, and notable registers. Instruments used in at most three levels count as uncommon. No “Specialties” heading; omit the section entirely if empty. **Harmonic intervals / Harmonische Intervalle is always bold**.
- In-game menu: **← Levels, Restart, Home, Resume** / **← Level, Neustart, Startseite, Weiter**, using Phosphor icons. Restart, Home and return to pack require confirmation. Tapping outside resumes; cancelling confirmation returns to the menu. Home has both icon and text.
- Results retain attempt headline, score and stars, but replace the explanatory/previous-best/save-status text with **Your high score: X/10 / Dein Highscore: X/10** plus best-star icons. Save failures still use the shared Page warning. Large buttons: Next level, Restart, Levels (current pack), Home, with corresponding German labels. Home has icon and text.

### Access modes and playback

- Explicit saved `accessMode`: `normal` or `all-levels`. Five taps on Language/Sprache in Options, no more than three seconds apart, toggle both ways. Only all-levels mode displays a mode label; normal mode stays hidden.
- Switching modes changes only access gates. Both modes share genuinely earned scores/stars; playing in either mode saves real results. Returning to normal recomputes access from those results. The old `allLevelsUnlocked` boolean migrates to `accessMode`; explicit normal mode takes precedence. `GameProvider` no longer uses the environment test override, though historical helper/export files remain.
- Every level is exclusively harmonic or melodic. Former `mixed` levels now use `melodic`, which randomly chooses only ascending/descending. Existing fixed ascending/descending levels remain fixed. No level mixes harmonic and melodic questions.
- Harmonic levels: **4, 10, 12, 17, 31, 45, 56, 66, 71, 74, 76, 78, 82, 89, 95**. Other settings, interval pools and scoring were preserved. English/German descriptions for former mixed levels and generated `LEVEL_DESIGN.md` were updated; validation enforces the separation.
- First harmonic level is currently 4, found dynamically from level configuration. Before it plays, show `HarmonicTutorial.tsx`: **Harmonic intervals / Harmonische Intervalle**, explaining simultaneous notes, interval distance, and unlimited replay. Button: **Let’s listen / Los geht’s**.
- Harmonic tutorial dismissal persists independently at `listn.tutorial.harmonic.seen.v1`; general tutorial and score/language settings are unaffected. Exercise is not mounted until tutorial hydration/dismissal, so audio waits. Saving errors permit retry or continuing without saving. General tutorial retains its original session/opt-out behavior.

### Validation and workflow

- Latest completed checks after the harmonic tutorial: **lint and typecheck passed; all 53 tests passed**. Earlier in this chat, the revised playback rules passed **30,000 generated questions** and docs regeneration. A complete `npm run check` was not rerun after every change; do not claim a fresh full check or release readiness.
- `tsx` tests/validation failed inside this Windows sandbox at `uv_os_get_passwd` with ENOMEM; approved outside-sandbox runs succeeded. Lint and typecheck run inside the sandbox. Batch necessary checks and explain any permission request; avoid repeating full tests for small text/style edits.
- User values concise responses and low usage, prefers direct implementation, and prohibits subagents unless explicitly requested. No new task is pending at handoff.

## Project

- Listn is an Expo/React Native ear-training app, formerly Intervalify.
- Workspace paths vary by PC. Use the current session's workspace path rather than assuming one fixed location.
- GitHub: https://github.com/tim-f-dev/listn
- Android package: `app.listn.mobile`.
- Website remains **intervalify.app**, the only intentional remaining use of the old name in the product.
- English and German are supported.
- Existing uncommitted work includes rename and redesign changes. Preserve unrelated work; do not automatically commit or push.

## Difficulty design principle (user instruction, 2026-11-03)

- Full curriculum audit is saved in `CURRICULUM_REVIEW.md`, with recommendations for all 100 levels and exact enumeration of possible distractor subsets. Close-target exposure falls after pack 3; priority mismatches include 72, 81, 84, 88, 94 and 95. Review did not rebalance level configurations. Distinguish broad vocabulary review from dense discrimination; random distractors currently do not guarantee close alternatives.

- The closeness of the candidate intervals is the primary difficulty factor across all levels, ahead of absolute interval size, instruments and other settings. Widely separated choices can make a late level too easy even with large compound intervals or unfamiliar instruments.
- Judge difficulty first by semitone separation among the actual answer choices, especially neighboring candidates, then by the number and similarity of competing answers. Account for the full interval pool when choices vary between questions.
- Secondary factors include absolute interval size, harmonic versus melodic presentation, direction changes, tempo/note duration, register/root variation and instrument timbre. These should refine a level's difficulty rather than substitute for demanding interval comparisons.
- This principle is saved for future curriculum review; the full set of levels has not yet been rebalanced against it. Level 96 now uses [12,14,15,16], four choices, normal-speed melodic playback, flute and roots 60–72; earlier descriptions of its two-choice recovery configuration are historical.

## Priorities

1. Rename to Listn.
2. Redesign.
3. Beta testing.
4. Full release.
5. Consider a rhythm section afterward.

## Design

- Home subtitle beneath Listn: **Your ear trainer** / **Dein Gehörtrainer**.
- Reserved for later website/store marketing: **Hear the difference.** / **Hör den Unterschied.** Do not display this tagline in the app yet.

Warm, old sheet-music/studio style: parchment backgrounds, dark brown text, rust accents and serif headings.

The palette uses nine solid colors; `onPrimary` aliases `paper` and the overlay derives from `ink`. Subdued sections and locked tiles use `canvas`; staff lines use `border`; answer feedback uses colored borders, text and symbols on `paper`. Shared colors live in `src/components/theme.ts`; use theme variables throughout. The play screen is the main design reference: level title and progress, staff lines behind a circular replay button, playback information and an answer grid.

Keep the play screen fitted to normal phone viewports without a scrollbar. Responsive spacing was adjusted and checked in English and German. Preserve scrolling when needed to keep content accessible on constrained screens.

| Token | Value |
| --- | --- |
| canvas | #F3E7CF |
| paper | #FFF8E9 |
| ink | #382B23 |
| muted | #75634D |
| primary | #A64E32 |
| onPrimary | #FFF8E9 |
| border | #CBB99B |
| gold | #957020 |
| success | #526B48 |
| red | #9D4437 |
| overlay | ink at approximately 48% opacity |

## Game and latest completed change

- Every level is exclusively harmonic or melodic. `melodic` playback randomizes only ascending/descending, never harmonic. Existing harmonic levels: 4, 10, 12, 17, 31, 45, 56, 66, 71, 74, 76, 78, 82, 89, 95. Harmonic intervals are always a bold highlight in level details, labeled “Harmonic intervals” / “Harmonische Intervalle.”

- Pack names (exact spelling is intentional): First Notes / Erste Töne; Sharper Ears / Geschärftes Gehör; No Easy Notes / Kein leichter Ton; Listning Challenge / Hörausforderung; Beyond the Octave / Über der Oktave. “Listning” references the app name; do not correct it to “Listening.”

- 100 individually configured levels, five packs of 20, ten questions per level.
- Definitions: `src/game/levels.ts`.
- **Unison is allowed only in pack 1 (levels 1-20).** It must never appear as the played interval or an answer option in levels 21-100.
- Updated 31 later levels; substituted familiar intervals where needed to preserve answer counts.
- Updated English/German descriptions and generated level documentation.
- Validation now checks the no-unison rule.

## Important files and checks

- Play screen: `src/app/play/[id].tsx`
- Theme: `src/components/theme.ts`
- Level translations: `src/localization/levels.en.json` and `src/localization/levels.de.json`
- Generated documentation: `LEVEL_DESIGN.md`
- `npm run check`: TypeScript, lint, tests, level validation, assets and translations.
- Historical full check: **46 tests and 30,000 generated questions**. See the latest handoff above for newer targeted check results.
- `npm run docs:levels` regenerates level documentation.
- `npm run i18n:sync-en` refreshes English source translations; German requires manual updates.

## Testing and release

- Last local server used `http://localhost:8082`, with `EXPO_PUBLIC_UNLOCK_ALL_LEVELS=true` for testing. Check whether it is still running; do not assume it is.
- An Android `.aab` was built/downloaded as an initial publishing test.
- Expo project ID: `6258989a-ef42-4979-820d-2269733869c0`.
- Rename follow-ups are recorded in `DEVELOPMENT.md`: check the new `listn` slug against the existing EAS project, Cloudflare deployment name, changed deep links and storage keys.
- Storage keys were renamed to `listn.*` without migration. Review migration of existing saved progress/preferences before release.
- Do not assume release readiness from the earlier successful build.

## Working preferences

- Be concise and use tokens wisely.
- Make authorized changes directly; avoid unnecessary confirmation questions.
- Preserve unrelated changes and run appropriate checks.
- No subagents unless explicitly requested.
- Workspace paths and permissions can differ between PCs. Check the current session's workspace and permissions; some machines may still reference an old folder.


## Additional context from the older Intervalify chat (added 2026-11-03)

This section is historical and does not supersede the latest handoff above. In particular, paged facts, old menu/result labels, mixed harmonic/melodic playback and environment-driven unlock behavior described below have been replaced. Historical level-order notes must also respect the newer no-unison rule.

### Progression and scoring

- Star thresholds are 5/10, 8/10 and 10/10 for one, two and three stars. Pack gates use total earned stars: 0, 30, 60, 90 and 120. Within an unlocked pack, one star in the preceding level opens the next level.
- Replays retain the best score and best star rating; they do not add duplicate stars. Total possible stars: 300.
- The earlier curriculum revision moved existing lessons where possible and retained names and instrument sets. Pack 1 uses interval pools with at least two semitones between every pair of candidates. Pack 2 introduces neighboring small intervals, with spaced wide reviews; larger neighboring intervals begin in pack 3. The first 50 avoid fast playback and six-answer questions.
- Gentle compound lessons are at 84, 88, 94 and 96: minor ninth, major ninth, minor tenth and major tenth (13, 14, 15 and 16 semitones). They use slow ascending playback, two choices and narrow root ranges. Current counterparts/anchors were subsequently changed by the no-unison revision; do not restore the older unison anchors.
- LEVEL_REORDER.md records the earlier old/new lesson positions. At that revision, saved scores stayed attached to numbered slots rather than moving with lesson names. Treat that mapping as historical when reviewing newer changes.

### Menus, level previews and tutorial

- Home uses a main Play action and a smaller Options action. Options contains language selection and credits; Privacy and Legal remain accessible from Home.
- Selecting a level opens the level-details card rather than immediately playing audio. It shows the localized name, instruments, interval pool, specialties/playback facts, personal best and stars. Previous/next stays within the pack, the upper-right close action is red, and Start is prominent. Locked levels can be previewed, while Start follows access rules.
- On small screens, level facts can be paged instead of introducing an additional scrollbar. Use the current redesign and accessibility guidance above when adapting layouts.
- The tutorial appears before the first level in an app session. Dismissing it normally suppresses it for that session; the explicit Don't Show again option persists locally. It includes the listening/replay explanation and comfortable-volume/headphone tip. Level audio waits until dismissal. Implementation: src/tutorial/ and src/components/LevelTutorial.tsx.
- Earlier play requirements included ascending interval order for all answer choices, selecting an answer during playback, chronological green/red question-result markers, and a top-right menu for Back to pack, Restart level and Home. Verify the current play UI before changing these.

### Test-only access and local previews

- Options has two persisted access modes: `normal` and `all-levels`. Five taps on Language/Sprache (at most three seconds apart) toggle between them. Switching changes only access rules; both modes share genuine earned scores and stars. Returning to normal recomputes gates from earned results. The old `allLevelsUnlocked` flag migrates to the explicit `accessMode`. GameProvider now uses this mode as the sole access authority; the old environment test override no longer forces access.

- npm run export:test builds an unlocked web preview into dist using a per-command EXPO_PUBLIC_UNLOCK_ALL_LEVELS=true flag. Normal export commands do not set that flag.
- src/game/test-mode.web.ts additionally limits the web override to localhost, 127.0.0.1 and [::1]. Public domains retain normal access rules even if an unlocked web export is uploaded. Native test-mode behavior is separate; inspect it before preparing native release builds.
- src/game/test-access.ts supplies all-level/all-pack access in memory without fabricating scores or stars. Results actually earned during testing save normally; the override itself does not permanently save every level as unlocked.
- Preserve the newer server information above. The older chat used 8084; that is historical, not a request to start another server. Reuse a suitable running preview and avoid accumulating servers on incrementing ports.
- The web export includes a generated offline service worker. An older open tab can retain an old build until its replacement cache is installed and old tabs close. Updating a preview should preserve saved progress and preferences; do not clear browser storage as a routine cache fix. See scripts/build-offline.mjs and scripts/serve-web.mjs.

### Audio, localization and ownership

- A prior first-question/wrong-note bug involved cold web audio-bank seeking. The fix waits for actual seek completion and buffered audio before playing, and waits for playback to start before counting note duration. Preserve cancellation/replay behavior and the regression tests when touching src/audio/webVoice.ts or src/audio/player.ts.
- Musical interval labels are centralized by semitone ID through localizedInterval in src/localization/core.ts. Keep calculations, MIDI values, IDs and assets language-independent. German compound names include kleine/große None and kleine/große Dezime.
- The original app license was deliberately changed from MIT to all rights reserved for Tim Fischer's original material. Third-party licenses and audio attribution remain applicable; consult LICENSE, THIRD_PARTY_LICENSES.md and licenses/. Do not restore MIT by copying an older scaffold.
- The README was intentionally made project-focused; detailed setup/deployment information belongs in DEVELOPMENT.md.

The original older-chat addition was documentation-only. Subsequent application changes and validation are recorded in the latest handoff at the top. This final handoff update itself changed documentation only.
