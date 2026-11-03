# Listn chat handoff

Updated: 2026-11-03 (Europe/Berlin). This is the consolidated current handoff, replacing the contradictory chronological notes previously in this file. Verify the repository before continuing; other chats/user actions can change it.

## Current repository and working rules

- Workspace in this session: `D:\!programmierung\quizzler\listn`. Paths vary by machine; use the active workspace.
- Latest observed commit: `3e4201d` — `massive changed, new release`. The main branding/UI/curriculum implementation and SDK updates are now committed. Do not keep claiming all previous work is uncommitted.
- At this handoff, pending changes include CHAT_CONTEXT.md, PACKAGING_REVIEW.md, package.json and package-lock.json, plus the untracked DE/EN release-notes file. Recheck `git status` before acting. Do not automatically commit, push, build remotely, publish, deploy or discard unrelated work.
- App: Listn, formerly Intervalify; GitHub `https://github.com/tim-f-dev/listn`; Android package `app.listn.mobile`; website remains `https://intervalify.app/` intentionally.
- Configured version is **1.1.0** in app.json, package.json and both root package-lock.json version entries. User requested “1.1”; use full semantic version 1.1.0.
- npm project with package-lock.json. Follow AGENTS.md: read matching versioned Expo docs before touching Expo/RN APIs; use `npx expo install` for app dependencies; keep generated ios/android directories untouched. Run lint and typecheck before declaring a task done.
- User prefers concise responses, low usage and direct execution. No subagents unless explicitly requested. Avoid repeated permission questions and unnecessary full-check reruns for documentation/text changes.
- Latest preview was `http://localhost:8082/`, started with `npm run web -- --port 8082`. Reuse it if running; do not accumulate servers on new ports. Its old environment unlock flag no longer controls access. Current server status and restart after dependency updates must be checked rather than assumed.

## EAS association and release status — important

- **Current app.json project ID: `541b44e2-016a-4574-8a96-af84cc42aceb`; slug: `listn`.** This was read directly from the current repository during handoff consolidation.
- Earlier notes and checks referenced old project ID `6258989a-ef42-4979-820d-2269733869c0`. Do not restore that old ID. The repository changed to the current ID after those earlier checks.
- Remote EAS association has **not been verified in this chat**. Earlier `npx --yes eas-cli@latest project:info` attempts failed before EAS could query the project: npm `ECOMPROMISED / Lock compromised`, then missing `yallist` in the existing CLI cache. A fresh cache under `.audio-tools/eas-verify-cache` also failed with the cache-lock error.
- Those errors are local CLI/cache failures, not evidence that application code is compromised or that the current remote association is wrong. DEVELOPMENT.md and PACKAGING_REVIEW.md retain historical project/slug concerns; reconcile them with the current ID and verify remote state before a build.
- eas.json: minimum CLI >=27.2.0; `appVersionSource: remote`; production `autoIncrement: true`; development and preview use internal distribution. Auto-increment covers build numbers, not the visible app version.
- Preserve Android application ID and existing signing/upload credentials. Verify the next remote version code exceeds the last Play upload; no remote version/signing check succeeded here.
- An Android AAB was built/downloaded in an earlier chat as an initial publishing test. This chat generated production JS/assets exports, **not a new compiled native binary**. No build/upload/submission/publication/deployment was performed by this chat. Do not infer what the user may have done manually in Play Console.

## SDK patches and validation

All nine recommended SDK 58-compatible patches were installed with `npx expo install --fix`:

| Package | Installed |
| --- | --- |
| expo | 58.0.22 |
| expo-asset | 58.0.19 |
| expo-audio | 58.0.11 |
| expo-constants | 58.0.14 |
| expo-linking | 58.0.15 |
| expo-router | 58.0.29 |
| expo-status-bar | 58.0.4 |
| react-native | 0.88.1 |
| react-native-screens | 4.30.1 |

- package-lock.json records all nine. expo-asset and expo-constants remain within their older compatible manifest ranges, so their package.json minimum strings do not equal their installed patch versions.
- Expo's installer added the `expo-status-bar` config plugin automatically. No major SDK upgrade or unrelated audit fixes were made.
- Latest full post-patch check passed: lint; app and tests/tools typechecks; **58 tests**; all 100 levels; **30,000 seeded questions**; **8,523 exhaustive instrument/root/interval combinations**; checksummed audio assets; English/German translations.
- Expo Doctor: **20/20 passed**. `npx expo install --check`: dependencies up to date. Earlier 19/20 results and nine mismatch lists are historical and resolved.
- Fresh post-patch `npm run export` succeeded for Android and iOS Hermes bundles and web, including offline cache generation. These exports preceded the later 1.1.0 metadata bump. Lint/typecheck passed again after the version bump; do not claim a new 1.1.0 native binary exists.
- `npm audit` still reports **24 moderate and one high** advisory. The high advisory is zod in the ESLint development/peer chain (`eslint-config-expo` → `eslint-plugin-react-hooks`), not an app runtime import. Some suggested fixes involve incompatible Expo/ESLint major downgrades. Do not blindly run `npm audit fix --force`.
- Windows sandbox `tsx` runs can fail at `uv_os_get_passwd` with ENOMEM; approved outside-sandbox runs succeeded. Lint/typecheck work in the sandbox. npm cache installation failures are a separate issue.
- Main commands: `npm run check`, `npm run docs:levels`, `npm run export`, `npm run export:web`, `npm run validate:i18n`. English level source sync is `npm run i18n:sync-en`; German changes need manual translation.

## Difficulty principles agreed with the user

The dominant factor is **how close the actual answer intervals are to one another**, ahead of interval size, instruments and other settings. Large compound intervals against a distant fifth can be easy even late in the game.

Working priority order:

1. Closeness/similarity of competing intervals, especially near the correct answer.
2. Number of plausible competing answers.
3. Absolute interval size, including octave/compound confusion.
4. Presentation: harmonic/melodic, direction and changes of direction.
5. Timing: speed and audible note duration.
6. Register and root variation.
7. Instrument timbre and changes of instrument.

The order after closeness is provisional; these interact. Structural checks are not measured learner difficulty.

Additional explicit requirements:

- Beyond level 20, two-choice lessons should be **very rare**.
- First introduction of a new instrument or interval must be rather easy, never buried in a massive-demand task. Check first appearances in both target pools and possible answer options.
- Prefer moving existing lessons over inventing new ones, to preserve names. All 100 English/German names and each lesson's instrument set were preserved through the completed rebalances.
- Recovery should normally ease timing/presentation while retaining useful discrimination. Supported introductions deliberately use wider comparisons; they are valid exceptions to dense review pools.

## Current curriculum and question generation

- 100 individually authored levels, five packs of 20, ten questions per level. Source: `src/game/levels.ts`; generated documentation: `LEVEL_DESIGN.md`.
- Pack names are intentional: First Notes / Erste Töne; Sharper Ears / Geschärftes Gehör; No Easy Notes / Kein leichter Ton; **Listning Challenge** / Hörausforderung; Beyond the Octave / **Über der Oktave**. Do not correct Listning to Listening.
- Unison is exclusive to pack 1: it must not be a target or answer after level 20. Pack 1 keeps every candidate pair at least two semitones apart. Larger neighboring comparisons wait until pack 3. First 50 levels avoid fast playback and six answers.
- Only **24, 25, 41, 82** have two choices after level 20. They introduce minor second, minor third, tritone and minor ninth. The former eleven-lesson binary block was removed.
- Introductions use slow, sustained notes (1100 ms), at most four choices, roots spanning at most five semitones and fixed presentation. New instruments always get spaced familiar candidates. The minor/major-third pair at 25 is the focused binary exception to spaced new-interval introductions. Regression tests derive introductions from preceding configurations and enforce this policy.
- Ninths/tenths are introduced slowly at 82–85 with supported spaced alternatives. **86 One quiet breath** consolidates close compounds; 94 transfers them across familiar instruments; 99–100 integrate simple intervals and compounds. **97 is Low brass return**.
- **96 is Low harmonic labyrinth**, not the older Compound air configuration. Compound air is now 85. Sevenths falling is 45 and actually descends.
- `src/game/questions.ts`: from pack 2 onward, displayed answers are consecutive windows in the sorted eligible interval pool. Dense review pools produce compact plausible alternatives; introduction pools intentionally remain wider. Every displayed option can be a possible target of that answer set.
- The intermediate target-only nearest-distractor rule was removed: it created options that could be eliminated from the answer layout. Do not restore it. One nearest answer alone also failed to ensure several plausible close competitors.
- Target coverage is balanced within ten-question runs before repeating vocabulary. Binary lessons retain their earlier limited-repeat behavior instead of forced A/B alternation.
- Final broad simple/compound assessments include all four compound targets (13,14,15,16 semitones) and six distinct simple targets per ten-question run, in randomized order. Final roots 60–68 fit all instruments' bundled samples.
- Actual-generator follow-up: **500,000 questions**, zero options excluded by the former nearest-answer rule, complete compound coverage in all **1,000 final-assessment runs** sampled. Mean semitone-neighbor distractors at level 100 improved from about 1.09 to 1.58; earlier dense level 57 is about 1.67. These diagnostics do not prove perceptual calibration.
- `CURRICULUM_REVIEW.md` records the latest implementation followed by historical reviews; older “unresolved” findings/percentages are superseded. `LEVEL_REORDER.md` has successive mappings; the latest pass swapped only 29/30 and 86/97. Saved scores/stars stay attached to numbered slots, not lesson identities. No score migration or gate change was made.
- Important tests: `tests/curriculum.test.ts`, `tests/progression.test.ts`, `tests/game.test.ts` and `tests/specialties.test.ts`. Future changes must respect easy introductions rather than enforcing a semitone neighbor in every introductory task.

## Harmonic playback and tutorials

- Every level is exclusively harmonic or melodic. `melodic` randomizes ascending/descending only; fixed-direction lessons stay fixed. No lesson mixes melodic and harmonic questions.
- **First harmonic lesson is 12**, per the user's request to introduce it later. Levels 3 and 4 are ascending melodic. The tutorial finds the first harmonic level dynamically.
- Current harmonic levels: **12, 28, 32, 48, 51, 67, 68, 74, 78, 91, 93, 96, 97**. Earlier lists with 3/4 or 86 instead of 97 are obsolete.
- Before first harmonic playback: `HarmonicTutorial.tsx`, explaining simultaneous notes, interval distance and unlimited replay. Heading Harmonic intervals / Harmonische Intervalle; button Let's listen / Los geht's.
- Harmonic seen key: `listn.tutorial.harmonic.seen.v1`, independent of general tutorial and progress/language. Exercise/audio waits for hydration/dismissal. Failed saves support retry or continuing without saving.
- General tutorial appears before the first exercise entered in a session; ordinary dismissal lasts for that session, explicit opt-out persists at `listn.tutorial.hidden.v1`. It explains replay and comfortable volume/headphones. No audio before dismissal.

## Progress, access and persistence

- Stars at 5/10, 8/10, 10/10; total possible 300. Replays keep best score/stars, never add duplicate stars.
- Pack gates use total earned stars: 0,30,60,90,120. Within an unlocked pack, one star in the preceding level opens the next. Derived gates are recomputed from saved results.
- Saved `accessMode`: normal / all-levels. Five taps on Language/Sprache within three seconds between taps toggle either way. Only all-levels mode displays a mode label. Both modes share genuinely earned results; normal mode recomputes real gates. Old `allLevelsUnlocked` migrates; explicit normal wins.
- `GameProvider` no longer uses `EXPO_PUBLIC_UNLOCK_ALL_LEVELS`. Old test-mode/test-access helpers and export:test script remain but are not the app's access authority; do not describe export:test as actually forcing unlocks without checking the current wiring.
- Keys: `listn.progress.v1`, `listn.language.v1`, `listn.tutorial.hidden.v1`, independent harmonic seen key above. Writes are serialized; invalid saves are not silently overwritten; failures expose retry actions.
- Earlier Intervalify keys are not read or migrated. Decide whether existing test-user progress/settings need migration before distributing an update. Clearing storage is not a routine cache fix. There is no cloud backup/sync.

## Branding, UI and ownership

- Warm sheet-music/studio aesthetic: parchment, dark brown ink, rust accents, serif headings. Shared theme `src/components/theme.ts`; tokens: canvas #F3E7CF, paper/onPrimary #FFF8E9, ink #382B23, muted #75634D, primary #A64E32, border #CBB99B, gold #957020, success #526B48, red #9D4437, overlay derived from ink at about 48%.
- Logo: ascending beamed notes with a smile/slur. Masters `assets/branding/listn-logo.svg` and listn-logo.png. Home shows logo, Listn, **Your ear trainer / Dein Gehörtrainer**.
- **Hear the difference. / Hör den Unterschied.** is marketing copy for website/store, not the in-app Home subtitle. It is now used in the created German feature graphic and suggested release name.
- Configured launcher icons, favicon, adaptive foreground/background and monochrome assets were updated. General/iOS icon is opaque square; Android foreground has safe padding. splash-icon.png artwork was replaced, but no splash plugin was configured. Launcher changes require a native build; public web changes require deployment.
- Phosphor Regular icons are locally bundled transparent PNGs rendered by `src/components/Icon.tsx`; earned stars use Fill. Source SVGs/revision in assets/icons/phosphor. MIT attribution retained in licenses/Phosphor.txt, Credits, audio/licenses.json and THIRD_PARTY_LICENSES.md. No icon runtime dependency was added.
- Pack selection: five stacked numbered rows with serif names, stars/ranges or gate/lock. Rust outline on the first unlocked incomplete pack. Fit normal phones; preserve scrolling for constrained screens/enlarged text, never clip to force a fit. Verified earlier at 320x568 and 390x844 in English.
- Level preview opens before audio: instruments and sorted intervals without headings; actual-setting highlights; red close/outside dismissal; previous/next within pack, Start and best/stars stay accessible; long facts scroll. No pagination or Playback & format section. Locked previews remain available; Start obeys gates.
- Highlights derive from `src/game/specialties.ts`, not historical descriptions. Omit standard ascending/two-choice facts and an empty section; harmonic highlight always bold. Instruments used in at most three levels count as uncommon.
- Gameplay: sorted ascending answer labels, answers selectable during playback, chronological correct/wrong markers, repeat exact question/choices without exposing answer. Menu: Levels, Restart, Home, Resume with icons. Restart/Home/return-to-pack confirm; outside resumes; cancelled confirmation returns to menu.
- Results: attempt headline, score/stars, Your high score / Dein Highscore plus best stars; large Next level/Restart/Levels/Home actions. Save failures use shared Page warning. Home has icon and text.
- Ownership: Tim Fischer's original material is all rights reserved, not MIT. Preserve third-party notices/audio licenses. README is project-focused; detailed setup belongs in DEVELOPMENT.md.

## Audio, localization and offline behavior

- 128 bundled GM programs, 4,760 note slots in 128 AAC/M4A banks (~46.05 MiB); authored levels use 34 pitched instruments. Static bank/offset references ensure offline bundling. All required ranges/assets are validated.
- Preserve the cold-web-audio fix: wait for metadata, actual seek completion and buffered/playable audio; await playback start before timing audible duration. Keep cancellation/replay and web/audio regression tests intact. Native driver uses expo-audio; web driver is separate.
- Interval IDs, MIDI, calculations and assets are language-independent. Labels through localizedInterval in src/localization/core.ts; German compounds are kleine/große None and kleine/große Dezime. English/German UI and level descriptions are maintained together.
- Production web uses a versioned service worker and audio range-request support. Old open tabs may hold an old build until the replacement activates. Preserve local progress/preferences when refreshing; do not clear all storage. See scripts/build-offline.mjs and scripts/serve-web.mjs. Port 8084 references are historical, not permission to start another server.

## Google Play copy and assets

The user is filling out the German standard store listing. Copy/assets were supplied locally; no console upload or submission was performed by this chat.

- Suggested **release name** (latest): **Listn 1.1.0 – Hör den Unterschied**. This is a suggestion for the Play Console release-name field, not a change to expo.name. Configured app name stays Listn.
- German short description supplied: **Trainiere dein Gehör: Erkenne musikalische Intervalle in 100 Levels.**
- DE/EN release notes with `<de-DE>` and `<en-US>` tags are saved in `assets/store/release-notes-1.1.0.txt`. They cover new design/navigation/previews, rebalanced 100 levels, supported introductions, ninth/tenth practice and harmonic onboarding. English was explicitly requested in addition to German.
- Store icon: `assets/store/google-play-icon-512.png`, 512x512, opaque RGBA PNG/sRGB, 21,347 bytes, derived from existing assets/icon.png. Full square, no pre-rounded corners/shadow.
- Feature graphic: `assets/store/google-play-feature-de-1024x500.png`, RGB PNG without alpha/sRGB, 1024x500, 610,462 bytes. Built-in Imagegen used existing icon as style reference; final size exported from generated original. Warm paper, Listn, **Hör den Unterschied.**, **Dein Gehörtrainer**, the official beamed-notes-and-smile logo on the right (remade at the user’s request, replacing the separate staff notes/ripples). The earlier graphic is backed up as google-play-feature-de-1024x500-before-logo.png. Prompt/provenance/alt text: `assets/store/google-play-feature-de.prompt.txt`. No phone mockup/store badge/ranking claims. Official requirements were consulted.
- Four German phone screenshot exports: `assets/store/screenshots-de/01-startseite.png`, 02-levelpakete.png, 03-leveldetails.png, 04-hoeruebung.png. Each RGB PNG 1080x1920 (9:16), under 1 MB. ZIP: `assets/store/listn-telefon-screenshots-de.zip`; contact sheet: `assets/store/screenshots-de-preview.jpg`.
- **Screenshot limitation:** captured from the real mobile web preview at 360x640, DPR 1, then resampled 3x with Lanczos. They are not native-resolution Android-device captures. Originals and capture details remain under screenshots-de/source and README.md. Replace them with native Android captures before publication if possible; do not claim the web screenshots establish native QA.
- Captures used German/normal access, existing genuine 6 total stars, and level 15 preview/exercise with four answers. No questions answered/results saved. English/all-levels mode and default viewport were restored afterward.

### German full description supplied

Trainiere dein musikalisches Gehör mit Listn. Höre zwei Töne und erkenne den Abstand zwischen ihnen – das musikalische Intervall. In 100 Levels übst du, Unterschiede sicherer wahrzunehmen: von deutlich verschiedenen Intervallen bis zu feineren Vergleichen.

**Hören, vergleichen, erkennen**
Spiele die Töne beliebig oft ab und wähle das passende Intervall. Du trainierst sowohl auf- und absteigende Tonfolgen als auch harmonische Intervalle, bei denen beide Töne gleichzeitig erklingen.

**Schritt für Schritt weiterkommen**
Fünf Levelpakete führen dich durch unterschiedliche Aufgaben. Neue Instrumente und Intervalle werden behutsam eingeführt. Später fordern engere Vergleiche, mehr Antwortmöglichkeiten und wechselnde Klangfarben dein Gehör heraus. Auch Intervalle über eine Oktave hinaus gehören dazu.

**Verschiedene Instrumente kennenlernen**
Klavier, Gitarre, Flöte, Trompete, Streicher und weitere Instrumente bringen Abwechslung ins Training. So lernst du, Intervalle über verschiedene Klangfarben und Tonlagen hinweg zu erkennen.

**Deinen Fortschritt sehen**
Sammle bis zu drei Sterne pro Level und schalte weitere Aufgaben frei. Deine besten Ergebnisse bleiben gespeichert. Wiederhole jedes freigeschaltete Level, um dich zu verbessern.

Listn bietet:

- 100 Levels in fünf Paketen
- Melodische und harmonische Intervalle
- Zwei, vier oder sechs Antwortmöglichkeiten
- Beliebig häufiges Wiederholen der Töne
- Persönliche Bestwerte und Sterne
- Eine Oberfläche auf Deutsch und Englisch

Ob du ein Instrument spielst, singst oder dein musikalisches Gehör schulen möchtest: Mit Listn übst du bewusstes Zuhören – Ton für Ton.

## Remaining release work and ideas

- Verify the **current** EAS project association and signing/build-number state; fix the local CLI cache problem if still present. Do not delete projects or signing credentials as a routine repair.
- Package/install on Android and smoke-test cold first-note accuracy, harmonic synchronization, replay/cancellation, background/interruption/headphone behavior, airplane-mode playback and progress/language persistence after restart. Also review the new launcher/splash appearance. Native device behavior has not been validated by these exports/browser captures.
- Resolve legacy test-save migration expectations, obtain native store screenshots and review actual store-console state before publication. Keep version 1.1.0 unless instructed otherwise.
- Cloudflare Worker/domain association and website deployment follow-ups remain separate; local rename/config changes did not verify or change remote hosting. Website remains intervalify.app.
- Priorities: beta testing, then full release. No further feature/redesign work is recommended just to package this version; listening/playtesting should drive subsequent difficulty calibration.
- ROADMAP.md has ideas from a separate planning chat: more Musikverein/wind-band instruments with fewer strings, and a later rhythm-listening track. These expansion ideas were not implemented and are not blanket authorization to do so. Do not treat its older planning-only/version-1.0 wording as cancelling this chat's explicitly authorized implementations.
- Useful references: PACKAGING_REVIEW.md (latest status first, historical findings below), LEVEL_DESIGN.md, LEVEL_REORDER.md, CURRICULUM_REVIEW.md, DEVELOPMENT.md, VALIDATION.md, LOCALIZATION.md, THIRD_PARTY_LICENSES.md. Some historical docs still contain obsolete level IDs/version/build claims; prefer current source plus this handoff and verify facts before acting.

This handoff consolidation changes documentation only. It does not constitute a fresh full application check, native build, deployment or remote EAS verification.
