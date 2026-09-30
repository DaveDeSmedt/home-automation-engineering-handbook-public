---
title: System Index
type: index
status: reference
revision: 1.0
audience: public
last-reviewed: 2026-09-30
tags: [systems, index]
---

# System Index

- [Coverings](Coverings/Coverings.md) — privacy-aware covering pattern and request queue.
- [Lessons from a Live Audit](../07%20Operations/Lessons%20from%20a%20Live%20Audit.md) — what an AI-assisted review of the running system found.

| System | Purpose | Implementation status |
|---|---|---|
| [Lighting](Lighting/Lighting.md) | Safe, comfortable, predictable illumination | In daily use in the reference home |
| [Presence Detection](Presence/Presence%20Detection.md) | Sensor inputs and occupancy limitations | Partially verified |
| [Presence Intelligence](Presence/Presence%20Intelligence.md) | Textbook model for movement and room state | Architecture reference; only selected inputs deployed |
| [Energy Management](Energy/Energy%20Management.md) | Coordinate storage, telemetry, solar context, and EV charging | EV-charge protection in daily use; other use cases proposed |
| [Audio](Audio/Audio.md) | Audio-domain responsibilities and control policy | Partially verified |
| [Follow-Me Audio](Audio/Follow-Me%20Audio.md) | multi-room audio room-to-room handover pilot | Proposed pending route acceptance test |
| [Climate](Climate/Climate.md) | Comfort, humidity, and ventilation requirements | CO2-led ventilation pattern in daily use |
| [Security](Security/Security.md) | Safe boundaries for alerts, detection, and manual response | Proposed; inventory incomplete |
| [Notifications](Notifications/Notifications.md) | Actionable routing and severity policy | Proposed; active routes incomplete |

Each system page links implementation details to [Flow Catalogue](../05%20Homey/Flow%20Catalogue.md) instead of presenting architecture as proof of deployment.
