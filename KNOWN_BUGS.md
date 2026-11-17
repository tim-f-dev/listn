# Known bugs

## BUG-001: Low notes on low-register instruments are too quiet

- **Priority:** Low
- **Status:** Open; deferred
- **Reported:** 2026-11-10
- **Symptom:** Deep notes on deep instruments are too quiet during exercises.
- **Scope to confirm:** Affected instruments, note ranges, devices, and headphones versus phone speakers have not yet been isolated.
- **Proposed approach:** Compare perceived loudness across instrument/note ranges, then consider targeted sample gain adjustments with enough headroom for harmonic playback. If phone-speaker reproduction remains inadequate, review the affected instrument's exercise register.
- **Verification when addressed:** Listen to affected notes in melodic and harmonic exercises on Android, using both headphones and phone speakers; check loudness balance and clipping.

No fix for BUG-001 has been implemented.

## BUG-002: Tone playback stops after playing for a while

- **Priority:** High
- **Status:** Candidate fix implemented; awaiting Android device verification
- **Reported:** 2026-11-10
- **Symptom:** On Android, tones sometimes stop after several questions. Repeat may play once, then playback remains broken. Rapid taps or question changes may contribute; other platforms are unconfirmed.
- **Likely cause found:** Each question/replay creates two native players. In installed expo-audio 58.0.11, Android `AudioModule.remove()` only unregisters the player; `BaseAudioPlayer.sharedObjectDidRelease()` releases the underlying ExoPlayer, decoder and update coroutine. Our cleanup called `remove()` without explicitly releasing the shared object, leaving native resource reclamation dependent on garbage collection. Resource exhaustion is plausible but has not been confirmed with device logs.
- **Candidate fix:** Explicitly release each exclusively owned native player on completion, cancellation and failure. Guard pending load/fade callbacks against using disposed players. Preserve native error statuses so periodic healthy status updates cannot erase a decoder failure.
- **Regression coverage:** Normal playback/replay cleanup, 100 rapidly cancelled question loads followed by successful playback, cancellation during fade, and retained decoder errors.
- **Device verification still needed:** Play multiple packs on Android; answer/advance quickly during tones, repeat frequently, switch levels, and background/resume. Verify melodic and harmonic playback remains audible and repeat recovers after interruptions. Capture Android logs if the symptom returns.
