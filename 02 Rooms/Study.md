---
title: Study
type: room
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [room, study, presence, multiroom-audio]
---

# Study

## Role

A destination room connected to [[Transition Corridor]], used as the initial source room in the follow-me-audio pilot.

## Confirmed inventory

- Illustrative presence sensing.
- Two multi-room audio speakers configured as one stereo pair.

## Intended automation behavior

- Presence may support lighting and audio routing after per-flow tests.
- The Study multi-room audio room may act as the source or destination of a multi-room audio group handover.
- Manual playback and volume changes remain authoritative.

## Verification required

- Hue lights/scenes, lux source, and manual controls.
- Presence sensor model, coverage, reset delay, and Homey card names.
- multi-room audio model, room name, preferred volume, and group behavior.
- Climate, security, and notification devices.

## Related

[[Transition Corridor]] · [[Follow-Me Audio]] · [[Multi-room Audio Platform]] · [[Presence Sensor Platform]]
