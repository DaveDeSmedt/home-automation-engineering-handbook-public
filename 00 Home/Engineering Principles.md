---
title: Engineering Principles
type: standard
status: reference
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [principles, reliability, human-control]
---

# Engineering Principles

1. **Safety and manual control first.** Automation must not replace qualified electrical, battery, climate, fire, or security protections. Occupants retain a practical manual path.
2. **Reliability over cleverness.** A small tested flow is preferable to a broad untested engine.
3. **Local where demonstrated.** Prefer local operation, but verify outage behavior before calling an integration local.
4. **One owner for each state.** Avoid duplicate variables and contradictory vendor/Homey logic.
5. **Explicit targets over toggles.** Actions should be idempotent where possible.
6. **Presence is not identity.** Room sensors may support occupancy, not person-level authorization or ownership.
7. **Manual intent wins.** Automation respects manual lighting, audio, and comfort choices until a documented reset condition.
8. **Failures remain bounded.** One unavailable sensor or cloud API should not make the room unusable.
9. **Temporary changes must restore.** Reserve targets, group memberships, locks, and modes require timeout/restart recovery.
10. **Evidence before claims.** Installed hardware, exact cards, and acceptance tests determine implementation status.
11. **Build first, generalize second.** Practical iterations create the evidence from which architecture can safely grow.
12. **Document the why.** ADRs preserve context, alternatives, and consequences—not just the selected product.
13. **Privacy by design.** Do not commit credentials, access codes, detailed security response, or unnecessary personal data.
14. **Maintenance is part of design.** Every consequential automation needs ownership, observability, recovery, and review.

These principles apply across [System Index](../03%20Systems/System%20Index.md), [Advanced Flows](../05%20Homey/Advanced%20Flows/Advanced%20Flows.md), and [Maintenance](../07%20Operations/Maintenance.md).
