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
| [automation controller](../04%20Devices/Automation%20Controller.md) | Cross-system intent, state, sequencing and notifications | Orchestrates; does not replace device safety |
| [Lighting Platform](../04%20Devices/Lighting%20Platform/Lighting%20Platform.md) | Scenes, dimming, lighting transport and manual controls | Receives intent or commands |
| [Presence Sensor Platform](../04%20Devices/Presence%20Sensor%20Platform/Presence%20Sensor%20Platform.md) | Observes motion, presence or occupancy signals | Supplies inputs; does not establish identity |
| [Residential Battery System](../04%20Devices/Residential%20Battery%20System/Residential%20Battery%20System.md) | Battery protection and native energy management | Exposes safe, verified control points only |
| [Energy Metering Gateway](../04%20Devices/Energy%20Metering%20Gateway/Energy%20Metering%20Gateway.md) | Measures power, import/export or consumption | Supplies telemetry; measurement quality must be checked |
| [Multi-room Audio Platform](../04%20Devices/Multi-room%20Audio%20Platform/Multi-room%20Audio%20Platform.md) | Playback, grouping and volume | Remains source of truth for playback |
| [Independent Audio Endpoint](../04%20Devices/Independent%20Audio%20Endpoint/Independent%20Audio%20Endpoint.md) | A separate audio domain | Requires separate capability testing |
| [Electric Vehicle](../04%20Devices/Electric%20Vehicle/Electric%20Vehicle.md) | Charging demand and optional state context | Never bypasses charging or battery safety |
| [Home Network Gateway](../04%20Devices/Home%20Network%20Gateway/Home%20Network%20Gateway.md) | Connectivity, segmentation and backup | Infrastructure, not automation logic |

## Private implementation record

Use the private edition to record actual models, serial numbers, room placement, firmware, purchase evidence, warranty and account details. None belong in this public book.

## Design rule

Give every role one clear primary responsibility. If two systems both try to own the same durable state, document the boundary and create a reconciliation rule.

## Related

[System Overview](System%20Overview.md) · [Technology Stack](Technology%20Stack.md) · [Integration Index](../04%20Devices/Integration%20Index.md) · [Device Template](../10%20Templates/Device%20Template.md)
