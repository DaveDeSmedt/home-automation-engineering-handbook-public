---
title: Multi-room Audio Platform
type: integration-pattern
status: pattern
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [integration, multiroom-audio, pattern]
---

# Multi-room Audio Platform

## Role

A multi-room audio platform owns synchronized playback, grouping and native volume controls. Homey may request a change of group or destination, but the platform remains the source of truth for playback and group membership.

## Illustrative zones

| Zone | Example role |
|---|---|
| [Study](../../02%20Rooms/Study.md) | Source or destination for focused listening |
| [Bathroom](../../02%20Rooms/Bathroom.md) | Short-stay destination |
| [Dressing Area](../../02%20Rooms/Dressing%20Area.md) | Short-stay destination |
| [Kitchen](../../02%20Rooms/Kitchen.md) | Shared destination with potentially overlapping presence |
| [Exercise Area](../../02%20Rooms/Exercise%20Area.md) | Higher-volume or independent-use destination |

These are teaching zones, not an inventory.

## Capability boundary

A group-handover pattern may use actions that join another player's group and leave the current group. Do not assume that a direct move-playback action exists. Record the exact card labels, app version and test result in a private practical-flow record.

## Safe handover pattern

1. Confirm that a session is actually playing.
2. Confirm that the destination is eligible.
3. Join the destination to the active group.
4. Verify continuity after a short delay.
5. Remove the source only after continuity is confirmed.
6. Reconcile any stored audio state with the platform if an action fails.

## Do not assume

- exact cross-room latency;
- cross-brand continuity;
- source-app continuity;
- volume matching;
- a particular card name or app capability.

## Related

[Audio](../../03%20Systems/Audio/Audio.md) · [Follow-Me Audio](../../03%20Systems/Audio/Follow-Me%20Audio.md) · [Stateful Automation Architecture](../../01%20Architecture/Stateful%20Automation%20Architecture.md) · [Verification Standards](../../06%20Standards/Verification%20Standards.md)
