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
| [[ADR-001 automation controller as Central Brain]] | Use automation controller for cross-system orchestration while retaining native safety controls. | Pattern |
| [[ADR-002 Keep Lighting Control in the Lighting Platform]] | Keep lighting transport and manual controls in the lighting platform. | Pattern |
| [[ADR-003 Use Dedicated Presence Inputs]] | Treat presence as an input to occupancy logic, not proof of identity. | Pattern |
| [[ADR-004 Retain Native Battery Safety Controls]] | Preserve native battery-management safeguards. | Pattern |
| [[ADR-005 Protect Storage During EV Charging]] | Use conservative, reversible energy constraints around high-demand charging. | Proposed |
| [[ADR-006 Evidence Before Implementation Claims]] | Tie claims to observable evidence and acceptance tests. | Reference |
| [[ADR-007 Group Handover for Follow-Me Audio]] | Use a join–verify–leave sequence for compatible audio groups. | Proposed |

Create future decisions with [[ADR Template]]. Superseded ADRs remain in place and link to their replacement.
