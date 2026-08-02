---
title: Flow Catalogue
type: catalogue
status: pattern
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [homey, flows, catalogue, evidence]
---

# Flow Catalogue

## Status key

- **Verified:** deployed and passed recorded acceptance criteria.
- **Partially verified:** some cards/state are evidenced, but the complete behavior is not accepted.
- **Proposed:** design only.

## Current catalogue

| ID | Flow | Status | Evidence / next action |
|---|---|---|---|
| A-001 | Study → Transition Corridor → Bathroom audio handover | Partially verified design | multi-room audio join/leave group cards evidenced; build/test route |
| A-002 | Bathroom → Transition Corridor → Study handover | Proposed | Create only after A-001 is stable |
| A-003 | Dressing Area audio handover routes | Proposed | Add after pilot; confirm sensor and multi-room audio behavior |
| A-004 | Kitchen audio handover | Proposed | Wait for two planned presence sensors |
| A-005 | Exercise Area audio handover | Proposed | Confirm route and install planned sensor |
| L-001 | Presence/daylight room lighting pattern | Proposed reference | Inventory Hue scenes and build one-room pilot |
| E-001 | EV charging battery-protection entry | Proposed/partial concept | Confirm charging signal and exact residential battery platform card |
| E-002 | EV charging battery-setting restoration | Proposed | Test normal, timeout, restart, and failure paths |
| N-001 | Operational failure notification pattern | Proposed | Define channel and severity policy |

## A-001 draft specification

**Trigger:** Bathroom presence becomes active.

**Guards:** `Audio_FollowMe = Yes`; `Audio_Current_Room = Study`; Study multi-room audio is playing; Transition Corridor route evidence is valid if used; no manual/quiet/multi-person guard blocks transfer.

**Actions:**

1. Set `Audio_Previous_Room` to the current room.
2. Bathroom multi-room audio joins the Study multi-room audio group.
3. Wait a short tested interval (initial design: two seconds).
4. Study multi-room audio leaves the current group.
5. Set `Audio_Current_Room = Bathroom` only after successful actions.

**Acceptance:** playback continues in Bathroom; Study stops after the overlap; no unintended transfer occurs without the expected route; manual recovery remains possible; variables match real group state.

## Promotion rule

A flow moves to `verified` only when the exact Homey cards, configuration, test date, observed result, and failure/recovery behavior are recorded using [[Flow Template]].

## Related

[[Advanced Flows]] · [[Follow-Me Audio]] · [[Energy Management]] · [[Verification Standards]]
