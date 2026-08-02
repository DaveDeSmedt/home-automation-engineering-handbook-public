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
| Orchestration | [[automation controller]] | Cross-system automation | Verified |
| Lighting | [[Lighting Platform]] | Lighting devices and native control | Verified platform; inventory incomplete |
| Presence | [[Presence Sensor Platform]] | Room/transition presence input | Confirmed locations documented |
| Energy storage | [[Residential Battery System]] | Two battery units | Verified quantity; configuration incomplete |
| Energy telemetry | [[Energy Metering Gateway]] | Grid/energy measurements | Verified device; exact signals incomplete |
| Audio | [[Multi-room Audio Platform]] | Multi-room audio domain | Reference inventory |
| Lounge audio | [[Independent Audio Endpoint]] | Separate endpoint | Reference integration capability |
| Vehicle | [[Electric Vehicle]] | EV charging context | Verified vehicle; charger details require verification |
| Network | [[Home Network Gateway]] | Network gateway role | Verification required |
| Documentation | Obsidian Markdown + GitHub | Knowledge base and version history | Verified |

## Protocol policy

Do not infer a protocol from a brand name. Each device page records Wi-Fi, Ethernet, Zigbee, Bluetooth, Matter, Thread, or cloud use only after verification. Mixed local/cloud integrations must document the practical outage behavior.

## Selection principles

- Prefer mature integrations and predictable manual fallback.
- Avoid duplicating the same orchestration logic in Homey and vendor apps.
- Keep vendor-native safety and hardware responsibilities intact.
- Add new platforms only when they close a real capability gap.
- Record replacement decisions in an ADR before broad migration.
