# Listn chat handoff

Updated: 2026-11-10 (Europe/Berlin). This is the consolidated current handoff, replacing the contradictory chronological notes previously in this file. Verify the repository before continuing; other chats/user actions can change it.

## Current repository and working rules

- Workspace in this session: `D:\!programmierung\quizzler\listn`. Paths vary by machine; use the active workspace.
- Latest observed commit: `1791083` — `mild changes`. The main branding/UI/curriculum implementation and SDK updates are now committed. Do not keep claiming all previous work is uncommitted.
- Pending local work includes the Blasorchester curriculum, bilingual copy, archive, audit/tests/docs and the prior native-audio cleanup fix/KNOWN_BUGS.md. Recheck `git status`. No commit, push, native build, publication or deployment was done for this rework.
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
- Prefer moving existing lessons over inventing new ones, to preserve names. The 2026-11-10 rework explicitly replaces all 100 English/German names and instrument sets; earlier name-preservation rules are superseded by that user request.
- Recovery should normally ease timing/presentation while retaining useful discrimination. Supported introductions deliberately use wider comparisons; they are valid exceptions to dense review pools.

## Current curriculum and question generation

- Source: `src/game/levels.ts`; 100 authored levels in five packs, ten questions each. All English/German lesson names and descriptions were replaced on 2026-11-10.
- Blasorchester focus: **95% expected wind-instrument questions**, 17 used GM programs. Core: clarinet 22 levels, trumpet 18, flute 15, trombone/horn/alto sax 14 each. Supporting tuba/tenor/baritone sax, occasional piccolo/soprano sax/oboe/bassoon. Piano occurs twice; nylon guitar, violin and electric piano once each.
- Distinct **Tenorhorn, Bariton/Euphonium and Flügelhorn are NOT available** in the bundled GM samples. An optional question offered to source new sounds; no answer arrived, so existing samples were used and these gaps documented. Do not relabel other brass presets as those sounds or claim the full requested instrumentation is complete.
- `LEVEL_DESIGN.md` is generated by `scripts/document-levels.ts` and includes instrument regularity, every appearance, expected question share, bilingual names and a weak-link audit. No adjacent lessons share an instrument; every transition changes at least two of instrument pool, interval pool, presentation and timing. Intentional repeated interval pools are listed. Soprano sax and bassoon return lessons were added after the audit exposed long gaps/one-off introductions.
- The complete retired curriculum and both translations are preserved under `archive/curricula/pre-blasorchester-2026-11-10/`. All slots are replaced in place, old N → new N; no reorder or score migration. `LEVEL_REORDER.md` and `CURRICULUM_REVIEW.md` now mark earlier mappings/reviews historical.
- Opening: 1 clarinet [0,7], 2 trumpet [4,12], 3 flute [2,7], 4 trombone [5,12], 5 alto sax [4,7]. Four answers start at **6**. No lesson uses only Prime/octave. First harmony remains **12**. Unison stays exclusive to pack 1; all pack-1 candidate pairs are at least two semitones apart.
- First 50 lessons avoid fast playback and six answers. New instrument/interval introductions remain slow, sustained (1100 ms), narrow in roots (at most five semitones), fixed presentation and at most four answers; spaced comparisons except the focused minor/major thirds at 25.
- Only **24,25,41,82** have two choices after level 20. Minor second/third at 24/25, tritone 41, major sixth 42, minor/major sevenths 43/45. Compounds 13–16 introduced at 82–85, consolidated slowly at 86, transferred at 94. Six-answer practice starts at 57 on trumpet.
- Every lesson is exclusively melodic or harmonic. `melodic` randomizes direction only. Root ranges are the lower note, regardless of playback direction; all instruments in a pool must cover root + largest interval. Tuba avoids the lowest bundled register, but BUG-001 still needs listening checks.
- Question generation is unchanged: from pack 2 onward, answers are consecutive windows in the sorted eligible pool. All options can be targets; do not restore target-only nearest-distractor filtering. Review pools are close; introduction pools deliberately spaced. Target coverage is balanced in ten-question runs, while binary lessons avoid forced alternation.
- 99–100 retain all four compound targets plus six distinct simple targets in every ten-question run. Prior 500,000-question diagnostics describe the previous curriculum, not a new run on this rework.
- Pack names are unchanged, including intentional **Listning Challenge / Hörausforderung** and **Beyond the Octave / Über der Oktave**.

## Current validation and known bugs — 2026-11-10

- Final `npm run check` passed: lint; app/test/tool typechecks; **66 tests**; 100 levels; **30,000 seeded questions**; **7,483 exhaustive instrument/root/interval combinations**; 4,760 note slots in 128 checksummed banks; English/German validation. `npm run docs:levels` regenerated the report. No new native runtime/device test was performed.
- `tests/curriculum-update.test.ts` covers instrument weights, opening/adjacent variety, all renamed bilingual titles, archive slot parity and old-save load/save retention across curriculum replacement and access modes.
- `KNOWN_BUGS.md`: BUG-001 quiet low notes is low priority/deferred. BUG-002 Android tones stop after extended play is high priority; candidate fix implemented, device confirmation pending.
- Likely BUG-002 cause: installed expo-audio 58.0.11 Android `remove()` unregisters a player without releasing its ExoPlayer/decoder/update coroutine until shared-object GC. `src/audio/nativeVoice.ts` now explicitly calls inherited `release()` on exclusively owned players and retains error statuses; service.ts uses it. `tests/native-audio.test.ts` covers normal/replay cleanup, 100 rapid cancellations and recovery, fade cancellation, sticky errors. The exact device symptom is not yet confirmed fixed.

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

- 128 bundled GM programs, 4,760 note slots in 128 AAC/M4A banks (~46.05 MiB); authored levels now use 17 pitched instruments (95% expected wind questions). Static bank/offset references ensure offline bundling. All required ranges/assets are validated.
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
Klarinette, Flöte, Trompete, Posaune, Horn, Tuba und alle vier Saxofone bringen Abwechslung ins Training. So lernst du, Intervalle über verschiedene Klangfarben und Tonlagen hinweg zu erkennen.

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
- Preserve current Listn saves on fixed numbered slots; older Intervalify-key migration remains separate. Obtain fresh native store screenshots and review actual store-console state before publication. Keep version 1.1.0 unless instructed otherwise.
- Cloudflare Worker/domain association and website deployment follow-ups remain separate; local rename/config changes did not verify or change remote hosting. Website remains intervalify.app.
- Priorities: beta testing, then full release. No further feature/redesign work is recommended just to package this version; listening/playtesting should drive subsequent difficulty calibration.
- ROADMAP.md now records the implemented wind-band rework and remaining sample gaps. Its older planning-only/version-1.0 sections are explicitly historical. A rhythm-listening track remains a future idea, not implemented or authorized by this rework.
- Useful references: PACKAGING_REVIEW.md (latest status first, historical findings below), LEVEL_DESIGN.md, LEVEL_REORDER.md, CURRICULUM_REVIEW.md, DEVELOPMENT.md, VALIDATION.md, LOCALIZATION.md, THIRD_PARTY_LICENSES.md. Some historical docs still contain obsolete level IDs/version/build claims; prefer current source plus this handoff and verify facts before acting.

This handoff includes the implemented 2026-11-10 curriculum rework and successful full checks. No new native binary, device QA, deployment or remote EAS verification was performed. Existing store screenshots show retired lesson names/settings and need replacement. App version remains 1.1.0; no automatic bump was requested.
