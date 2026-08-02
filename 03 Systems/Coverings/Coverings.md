---
title: Coverings
type: system
status: pattern
revision: 1.0
audience: public
last-reviewed: 2026-08-02
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

## Status

This is a **Pattern**. Exact device behaviour, privacy thresholds, and scene
timing are installation-specific and require local testing.

## Related

[Lighting](../Lighting/Lighting.md) · [Stateful Automation Architecture](../../01%20Architecture/Stateful%20Automation%20Architecture.md) · [Maintenance](../../07%20Operations/Maintenance.md)
