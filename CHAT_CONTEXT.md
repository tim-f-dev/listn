# Listn chat handoff

Last updated: 2026-11-03. This document captures the previous chat; verify current repository state before continuing.

## Project

- Listn is an Expo/React Native ear-training app, formerly Intervalify.
- Current folder: `C:\!apps\listn`. The old `C:\!apps\intervalify` path is outdated.
- GitHub: https://github.com/tim-f-dev/listn
- Android package: `app.listn.mobile`.
- Website remains **intervalify.app**, the only intentional remaining use of the old name in the product.
- English and German are supported.
- Existing uncommitted work includes rename and redesign changes. Preserve unrelated work; do not automatically commit or push.

## Priorities

1. Rename to Listn.
2. Redesign.
3. Beta testing.
4. Full release.
5. Consider a rhythm section afterward.

## Design

Warm, old sheet-music/studio style: parchment backgrounds, dark brown text, rust accents and serif headings.

Shared colors live in `src/components/theme.ts`; use theme variables throughout. The play screen is the main design reference: level title and progress, staff lines behind a circular replay button, playback information and an answer grid.

Keep the play screen fitted to normal phone viewports without a scrollbar. Responsive spacing was adjusted and checked in English and German. Preserve scrolling when needed to keep content accessible on constrained screens.

| Token | Value |
| --- | --- |
| canvas | #F3E7CF |
| paper | #FFF8E9 |
| ink | #382B23 |
| muted | #75634D |
| primary | #A64E32 |
| primaryMuted | #9B644D |
| onPrimary | #FFF8E9 |
| pale | #EBDDC3 |
| border | #CBB99B |
| staff | #D7C39E |
| gold | #957020 |
| amber | #F3DEAD |
| success | #526B48 |
| successSurface | #E3E9D6 |
| red | #9D4437 |
| pink | #F3DED2 |
| locked | #E8DDC8 |
| overlay | rgba(56,43,35,0.48) |

## Game and latest completed change

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
- Last completed full check passed: **46 tests and 30,000 generated questions**. This records the last result, not a guarantee for subsequent edits.
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
- Workspace permissions may still reference the old folder, so access to the renamed project may require tool escalation.
