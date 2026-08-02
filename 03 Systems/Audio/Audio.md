---
title: Audio
type: system
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [system, audio, multiroom-audio]
---

# Audio

## Objective

Provide predictable room audio, announcements, and a future follow-me experience without stealing playback from another occupant or crossing incompatible audio domains silently.

## Confirmed domains

### multi-room audio domain

- Dressing Area: multi-room audio.
- Bathroom: multi-room audio.
- Study: two multi-room audio speakers configured as one stereo pair.
- Kitchen: multi-room audio.
- Exercise Area: multi-room audio.

### Separate lounge domain

- Lounge Zone: independent audio endpoint.
- Its exact Homey actions and ability to continue a multi-room audio session are unverified.

## Control policy

- Manual play/pause/volume changes take precedence.
- Follow-me behavior is opt-in through an explicit state such as `Audio_FollowMe`.
- Transition spaces do not own audio.
- A destination must be confirmed before the source is removed.
- Multi-person or guest ownership is not inferred from room presence alone.
- Quiet hours and TV/media activity must be guards where relevant.

## Implementation boundary

[[Follow-Me Audio]] documents the proposed multi-room audio handover pilot. Architecture beyond that pilot is explanatory and must not be marked operational without a test record in [[Flow Catalogue]].

## Failure behavior

If grouping fails, preserve the source playback where possible, avoid repeated retries, reconcile stored room state with multi-room audio state, and leave a manual recovery path in the multi-room audio app.

## Related

[[Multi-room Audio Platform]] · [[Independent Audio Endpoint]] · [[Presence Intelligence]] · [[ADR-007 Group Handover for Follow-Me Audio]]
