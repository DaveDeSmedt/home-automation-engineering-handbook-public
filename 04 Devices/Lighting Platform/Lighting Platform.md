---
title: Lighting Platform
type: device-domain
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [device, hue, lighting]
---

# Lighting Platform

## Role

lighting platform is the principal lighting domain. Homey selects room intent; Hue executes scenes or device targets and should retain native/manual control where installed.

```mermaid
flowchart LR
    Homey[Homey intent] --> Bridge[Hue bridge/domain]
    Manual[Hue controls/app] --> Bridge
    Bridge --> Groups[Rooms, zones, scenes]
    Groups --> Devices[Lights and sensors]
```

## Inventory requirements

Record the bridge model/firmware, each fixture/sensor/control, canonical room, Hue name, Homey name, group/zone, scenes, protocol path, and manual fallback.

## Design rules

- Prefer stable scene names and explicit targets over toggles.
- Do not put competing automations in Hue and Homey without documenting precedence.
- Keep room-specific lux, transition, and vacancy behavior in [[Lighting]].
- Test what remains functional when Homey or the internet is unavailable.

## Verification required

Exact bridge/device inventory, room assignments, scenes, network connection, and outage behavior.

## Related

[[Lighting]] · [[ADR-002 Keep Lighting Control in the Lighting Platform]] · [[Integration Roles]]
