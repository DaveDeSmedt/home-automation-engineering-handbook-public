---
title: Flow ID Standards
type: standard
status: reference
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [standard, flows, identifiers]
---

# Flow ID Standards

| Prefix | Domain |
|---|---|
| `A` | Audio |
| `L` | Lighting |
| `P` | Presence |
| `E` | Energy |
| `C` | Climate |
| `S` | Security |
| `N` | Notifications |
| `O` | Operations/recovery |

IDs use three digits (`A-001`). Once an ID has been used in production/history, do not reuse it for another purpose. Retired flows remain in [[Flow Catalogue]] with status `retired` and a replacement link.

One directional route may have its own ID when trigger, guards, or recovery differ. A verified Study → Bathroom flow does not automatically verify Bathroom → Study.

Names follow [[Naming Standards]]. Individual documentation follows [[Flow Template]].
