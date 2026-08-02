---
title: ADR Index
type: index
status: reference
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [adr, index, architecture]
---

# Architecture Decision Records

An ADR captures a design decision, why it was made, what was considered and what it changes. In this public edition, ADRs are reusable patterns—not a record of one household's choices.

| ADR | Decision pattern | Status |
|---|---|---|
| [ADR-001 automation controller as Central Brain](ADR-001%20Automation%20Controller%20as%20Central%20Brain.md) | Use automation controller for cross-system orchestration while retaining native safety controls. | Pattern |
| [ADR-002 Keep Lighting Control in the Lighting Platform](ADR-002%20Keep%20Lighting%20Control%20in%20the%20Lighting%20Platform.md) | Keep lighting transport and manual controls in the lighting platform. | Pattern |
| [ADR-003 Use Dedicated Presence Inputs](ADR-003%20Use%20Dedicated%20Presence%20Inputs.md) | Treat presence as an input to occupancy logic, not proof of identity. | Pattern |
| [ADR-004 Retain Native Battery Safety Controls](ADR-004%20Retain%20Native%20Battery%20Safety%20Controls.md) | Preserve native battery-management safeguards. | Pattern |
| [ADR-005 Protect Storage During EV Charging](ADR-005%20Protect%20Storage%20During%20EV%20Charging.md) | Use conservative, reversible energy constraints around high-demand charging. | Proposed |
| [ADR-006 Evidence Before Implementation Claims](ADR-006%20Evidence%20Before%20Implementation%20Claims.md) | Tie claims to observable evidence and acceptance tests. | Reference |
| [ADR-007 Group Handover for Follow-Me Audio](ADR-007%20Group%20Handover%20for%20Follow-Me%20Audio.md) | Use a join–verify–leave sequence for compatible audio groups. | Proposed |

Create future decisions with [ADR Template](../../10%20Templates/ADR%20Template.md). Superseded ADRs remain in place and link to their replacement.
