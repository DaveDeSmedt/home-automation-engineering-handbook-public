---
title: Technology Stack
type: architecture
status: partially verified
revision: 2.0
audience: public
last-reviewed: 2026-07-10
tags: [architecture, technology, integrations]
---

# Technology Stack

| Domain | Technology | Role | Evidence status |
|---|---|---|---|
| Orchestration | [automation controller](../04%20Devices/Automation%20Controller.md) | Cross-system automation | Verified |
| Lighting | [Lighting Platform](../04%20Devices/Lighting%20Platform/Lighting%20Platform.md) | Lighting devices and native control | Verified platform; inventory incomplete |
| Presence | [Presence Sensor Platform](../04%20Devices/Presence%20Sensor%20Platform/Presence%20Sensor%20Platform.md) | Room/transition presence input | Confirmed locations documented |
| Energy storage | [Residential Battery System](../04%20Devices/Residential%20Battery%20System/Residential%20Battery%20System.md) | Two battery units | Verified quantity; configuration incomplete |
| Energy telemetry | [Energy Metering Gateway](../04%20Devices/Energy%20Metering%20Gateway/Energy%20Metering%20Gateway.md) | Grid/energy measurements | Verified device; exact signals incomplete |
| Audio | [Multi-room Audio Platform](../04%20Devices/Multi-room%20Audio%20Platform/Multi-room%20Audio%20Platform.md) | Multi-room audio domain | Reference inventory |
| Lounge audio | [Independent Audio Endpoint](../04%20Devices/Independent%20Audio%20Endpoint/Independent%20Audio%20Endpoint.md) | Separate endpoint | Reference integration capability |
| Vehicle | [Electric Vehicle](../04%20Devices/Electric%20Vehicle/Electric%20Vehicle.md) | EV charging context | Verified vehicle; charger details require verification |
| Network | [Home Network Gateway](../04%20Devices/Home%20Network%20Gateway/Home%20Network%20Gateway.md) | Network gateway role | Verification required |
| Documentation | Obsidian Markdown + GitHub | Knowledge base and version history | Verified |

## Protocol policy

Do not infer a protocol from a brand name. Each device page records Wi-Fi, Ethernet, Zigbee, Bluetooth, Matter, Thread, or cloud use only after verification. Mixed local/cloud integrations must document the practical outage behavior.

## Selection principles

- Prefer mature integrations and predictable manual fallback.
- Avoid duplicating the same orchestration logic in Homey and vendor apps.
- Keep vendor-native safety and hardware responsibilities intact.
- Add new platforms only when they close a real capability gap.
- Record replacement decisions in an ADR before broad migration.
