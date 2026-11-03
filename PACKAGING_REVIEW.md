# Packaging readiness — 2026-11-03

## Patch update completed

The user subsequently authorized the nine SDK-compatible updates. Installed versions are now expo 58.0.22, expo-asset 58.0.19, expo-audio 58.0.11, expo-constants 58.0.14, expo-linking 58.0.15, expo-router 58.0.29, expo-status-bar 58.0.4, react-native 0.88.1 and react-native-screens 4.30.1. package-lock.json records all nine; expo-asset and expo-constants remain within their existing manifest ranges. Expo's installer also added the expo-status-bar config plugin to app.json.

Post-update verification: Expo Doctor **20/20 passed**, Expo dependency compatibility check passed, full `npm run check` passed (58 tests), and fresh Android/iOS/web production exports plus offline-cache generation succeeded. The earlier dependency-mismatch findings below are resolved; the EAS association, native-device testing and publication follow-ups remain.

`npm audit` still reports 25 advisories (24 moderate, one high). The high advisory is zod in the ESLint development/peer dependency chain (`eslint-config-expo` → `eslint-plugin-react-hooks`); it is not an application runtime import. Several suggested audit fixes involve incompatible Expo/ESLint major downgrades. No additional audit fixes were applied as part of the requested nine-package update. The visible app version remains 1.0.0. No native binary was built or published.

## Original review before the patch update (historical)

The current source passes the application checks and produces production Android, iOS and web bundles. No new native binary was built, uploaded or published during this review. No application code or dependencies were changed.

## Verified

- Full `npm run check` passed: app/test typechecks, lint, 58 tests, 100 levels, 30,000 seeded questions, 8,523 exhaustive instrument/root/interval combinations, checksummed audio assets and English/German validation.
- Fresh `npm run export` succeeded for Android (Hermes), iOS (Hermes) and web. Offline web cache generation succeeded. These are JavaScript/assets exports, not compiled native app binaries.
- Expo Doctor passed 19/20 checks. The only failed check was SDK-compatible package patch versions; `npx expo install --check` confirmed the same nine mismatches.
- Fresh-install progress starts in normal mode. GameProvider does not import/use the old environment-driven test-mode modules. Existing testers can retain their explicitly saved all-levels mode.
- Android application ID remains `app.listn.mobile`. The production EAS profile uses remote build versions with auto-increment. The user-facing version in app.json/package.json remains 1.0.0.

## Recommended before the next package

1. Update the nine SDK 58-compatible patch versions with `npx expo install --fix`, then repeat checks/exports. No major SDK upgrade is needed for this recommendation.
2. Verify the remote EAS project association before launching the build. DEVELOPMENT.md records a rename-related project-ID/slug concern. Two read-only `npx --yes eas-cli@latest project:info` attempts failed at npm's CLI-cache lock (`ECOMPROMISED: Lock compromised`) before EAS ran, so the current remote association and signing/build-number state remain unverified. The npm cache failure is not evidence that application code is compromised.
3. Choose the intended user-facing release version. The roadmap proposes 1.1.0 beta; source remains 1.0.0. Remote auto-increment handles build numbers, not this visible version.

| Package | Installed | Expo check recommends |
| --- | --- | --- |
| expo | 58.0.16 | ~58.0.22 |
| expo-asset | 58.0.17 | ~58.0.19 |
| expo-audio | 58.0.9 | ~58.0.11 |
| expo-constants | 58.0.12 | ~58.0.14 |
| expo-linking | 58.0.13 | ~58.0.15 |
| expo-router | 58.0.24 | ~58.0.29 |
| expo-status-bar | 58.0.3 | ~58.0.4 |
| react-native | 0.88.0 | 0.88.1 |
| react-native-screens | 4.30.0 | ~4.30.1 |

## Before public distribution

- Smoke-test the installed Android build: cold-start first-note accuracy, harmonic synchronization, replay/cancellation, leaving/backgrounding a level, audio interruption/headphone behavior, airplane-mode playback, and progress/language persistence after restart. Shared logic/browser tests do not establish native audio correctness.
- Replace the upscaled 360 x 640 mobile web-preview store captures with native Android captures at the intended store resolution. Current exports meet the requested file dimensions, but are not native-resolution device captures.
- Decide whether older Intervalify test saves must migrate: current code reads only `listn.*` keys. The rename deliberately left older records unread. Scores currently stay attached to numbered slots across curriculum reorders; no lesson-identity migration is implemented.

No additional curriculum or visual redesign is recommended as packaging preparation. Real listening/playtesting remains the next source of difficulty calibration.
