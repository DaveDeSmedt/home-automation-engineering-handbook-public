---
title: Coverings
type: system
status: pattern
revision: 1.1
audience: public
last-reviewed: 2026-09-30
tags: [system, coverings, privacy]
---

# Coverings

## Privacy-aware covering pattern

Window treatments can require a privacy response after dark even when a
reflective daytime treatment is useful. Combine exterior-light evidence with
the household mode, time period, room policy, and manual override. Keep the
policy conservative when inputs are stale or ambiguous.

## Engineering rules

- Treat a negative automation condition as a failed test, not automatic proof
  of the opposite physical state.
- Verify each group-control capability and percentage meaning before using it
  as a tilt or position target.
- Prefer explicit open/close/position commands, provide manual override, and
  reconcile after failed actions.

## Pattern: request queue with a script that never fails the run

Triggers (sunrise, midday, sunset) do not move coverings directly. They write a request (`OPEN_DAY`, `OPEN_BEDROOM`, `CLOSE_ALL`) to one variable. A single handler executes it and always resets the variable to `IDLE`, on success and on error.

The executing script checks capabilities, paces commands between devices, retries once, and **never throws**: an unresponsive device is logged and skipped. In the reference home, one blind that had just been moved by hand used to fail the whole run, which left the request stuck and silently blocked the next scheduled run.

Two lessons from review:

- A time trigger with a state condition ("open at sunrise *if* the house is awake") only checks at that instant. Add a trigger on the house waking up so late mornings are not missed.
- Route every trigger through the queue, including the first one you built.

## Status

This is a **Pattern**. Exact device behaviour, privacy thresholds, and scene
timing are installation-specific and require local testing.

## Related

[Lighting](../Lighting/Lighting.md) · [Stateful Automation Architecture](../../01%20Architecture/Stateful%20Automation%20Architecture.md) · [Maintenance](../../07%20Operations/Maintenance.md)
