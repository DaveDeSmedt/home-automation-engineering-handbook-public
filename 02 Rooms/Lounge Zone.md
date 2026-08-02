---
title: Lounge Zone
type: room
status: pattern
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [room, lounge, presence, independent-audio]
---

# Lounge Zone

## Role

A destination zone connected to [Living Transition](Living%20Transition.md).

## Confirmed inventory

- Illustrative presence sensing.
- independent audio endpoint audio endpoint.

## Constraints

The Lounge Zone is not part of the verified multi-room audio group domain. Seamless session transfer between multi-room audio and independent audio endpoint must not be claimed until an exact integration and acceptance test exist.

Presence in an open-plan lounge may overlap Dining or Living Transition. Sensor field of view and stale-state behavior require observation before presence drives lighting or audio changes.

## Verification required

independent audio endpoint model and Homey capabilities, lighting/scenes, presence sensor details, TV/media interaction, and manual override behavior.

## Related

[Independent Audio Endpoint](../04%20Devices/Independent%20Audio%20Endpoint/Independent%20Audio%20Endpoint.md) · [Audio](../03%20Systems/Audio/Audio.md) · [Dining Zone](Dining%20Zone.md)
