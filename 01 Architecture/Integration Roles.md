---
title: Integration Roles
type: architecture
status: reference
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [architecture, integrations, roles]
---

# Integration Roles

A public handbook should describe what each component is responsible for, not disclose what is installed in a particular home.

| Role | Responsibility | Homey boundary |
|---|---|---|
| [[automation controller]] | Cross-system intent, state, sequencing and notifications | Orchestrates; does not replace device safety |
| [[Lighting Platform]] | Scenes, dimming, lighting transport and manual controls | Receives intent or commands |
| [[Presence Sensor Platform]] | Observes motion, presence or occupancy signals | Supplies inputs; does not establish identity |
| [[Residential Battery System]] | Battery protection and native energy management | Exposes safe, verified control points only |
| [[Energy Metering Gateway]] | Measures power, import/export or consumption | Supplies telemetry; measurement quality must be checked |
| [[Multi-room Audio Platform]] | Playback, grouping and volume | Remains source of truth for playback |
| [[Independent Audio Endpoint]] | A separate audio domain | Requires separate capability testing |
| [[Electric Vehicle]] | Charging demand and optional state context | Never bypasses charging or battery safety |
| [[Home Network Gateway]] | Connectivity, segmentation and backup | Infrastructure, not automation logic |

## Private implementation record

Use the private edition to record actual models, serial numbers, room placement, firmware, purchase evidence, warranty and account details. None belong in this public book.

## Design rule

Give every role one clear primary responsibility. If two systems both try to own the same durable state, document the boundary and create a reconciliation rule.

## Related

[[System Overview]] · [[Technology Stack]] · [[Integration Index]] · [[Device Template]]
