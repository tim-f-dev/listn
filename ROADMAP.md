# Listn progress and ideas

Updated: 2026-11-10. Current status below supersedes historical planning notes further down. Future ideas do not authorize implementation or publication.

## Current implementation and remaining work

- Configured version is 1.1.0. Branding, navigation, previews, tutorials and English/German support are implemented.
- All 100 lessons now emphasize a German Blasorchester, with new bilingual names. Wind instruments account for 95% of expected questions; string/electric guests are rare. Four-choice practice starts at 6; harmony still starts at 12.
- `LEVEL_DESIGN.md` lists instrument frequency, every appearance and weak links. The preceding curriculum and translations are archived under `archive/curricula/pre-blasorchester-2026-11-10/`.
- Saved scores/stars remain on permanent numbered slots across curriculum/app updates. No save-key or pack-gate change was made.
- Remaining: distinct licensed Tenorhorn, Bariton/Euphonium and Flügelhorn sounds; learner listening tests; Android long-session/replay/interruptions/offline/update testing; native store screenshots; current EAS association/signing/version-code verification.
- Known bugs are tracked in `KNOWN_BUGS.md`. Low-note loudness remains deferred; the Android playback cleanup fix awaits device confirmation.
- The rhythm-listening track remains a future idea. No build, upload or deployment was performed for this rework.

## Historical planning notes — 2026-11-03

## Current position

- Rename to Listn and the main visual redesign are implemented locally, with uncommitted changes. Updated branding, icons, level previews, menus/results, saved access modes and the harmonic tutorial are in place. See CHAT_CONTEXT.md for details.
- The app currently has 100 interval-training levels in five packs, English/German support and local progress saving.
- The configured version is still 1.0.0 in package.json and app.json. No version bump or new release was performed in this planning chat.
- Lint and typecheck passed on 2026-11-03. The prior handoff records 53 passing tests; the full release check has not been rerun in this chat.
- Beta preparation remains ahead. DEVELOPMENT.md records release follow-ups, including EAS project association, signing/version codes, saved-data handling and website deployment. Their remote status has not been verified here.

## Next release target

- Proposed target: **Listn 1.1.0 beta**. Treat this as a working release label until preparing the release; leave configured versions unchanged for now.
- Prepare an app-store listing with screenshots and a clear explanation of the app and its practice loop. Store choice and exact assets/copy remain to be decided.

## Level review and expansion

- Recheck the current levels for difficulty: identify lessons that are too hard or too easy and improve progression based on listening/playtesting.
- Add more levels featuring typical Musikverein / wind-band instruments, with greater emphasis on woodwinds and brass and less emphasis on strings. Examples to consider: clarinet, flute, saxophone, trumpet/Flügelhorn, horn, tenor horn/baritone, trombone, euphonium and tuba. Exact instruments and level count remain open.
- These are saved ideas; no curriculum or instrument changes have been made for them. Their scope for the beta is not yet fixed.

## Longer term

- Add a separate rhythm-listening training track someday, after the interval-training beta/release work. Format and scope remain open.
