---
title: Verification Standards
type: standard
status: reference
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [standard, evidence, testing]
---

# Verification Standards

## Evidence hierarchy

1. Repeatable acceptance test with date and observed result.
2. Screenshot/export of exact Homey/native configuration.
3. Direct recorded evidence of installed hardware/location.
4. Manufacturer documentation for device capability, paired with model/firmware confirmation.
5. Prior conversation or design note—useful context, not sufficient proof of current behavior.

## Implementation labels

- `verified`: all material acceptance criteria passed.
- `partially verified`: hardware/cards or part of behavior confirmed.
- `proposed`: no complete acceptance result.

## Test record

Every consequential flow should record:

- test date and operator;
- starting device/variable state;
- exact trigger and steps;
- expected result;
- observed result;
- failure/recovery observation;
- screenshots/exports where useful;
- conclusion and status change.

## Rules

- Documentation quality does not promote implementation status.
- A test in one direction does not verify the reverse direction.
- A sensor being installed does not verify its field of view or clear delay.
- A card being available does not verify that the device executes it reliably.
- Cloud behavior must not be described as local without an outage test.
- Safety claims require the appropriate manufacturer/installer evidence, not a Homey test alone.

## Unknowns

Write `unknown` or `verification required` with a responsible reviewer and action. Never substitute a typical model, default threshold, or remembered version.

## Related

[ADR-006 Evidence Before Implementation Claims](../01%20Architecture/ADRs/ADR-006%20Evidence%20Before%20Implementation%20Claims.md) · [Flow Template](../10%20Templates/Flow%20Template.md) · [Publication Audit](../00%20Home/Publication%20Audit.md)
