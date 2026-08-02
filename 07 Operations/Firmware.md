---
title: Firmware
type: operation
status: reference
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [operations, firmware, change-control]
---

# Firmware and App Updates

## Policy

Update deliberately rather than automatically treating every new version as urgent. Prioritize security, safety, compatibility, and confirmed bug fixes; delay non-critical changes when rollback is unavailable and the system is stable.

## Pre-update

1. Identify exact device/app and current/target version.
2. Read vendor release notes and known issues.
3. Inventory affected Homey cards, integrations, and flows.
4. Back up affected systems.
5. Confirm manual fallback and choose a low-impact window.

## Post-update

- Confirm device availability and native manual control.
- Test one trigger/condition/action path per affected integration.
- Check units, ranges, card names, and state reporting.
- Test critical recovery/notification behavior.
- Record observed version/date/result in the device page.

## Rollback/escalation

If rollback is unsupported, disable only the affected automations, preserve manual control, and record an incident. Do not repeatedly reinstall or reset devices without preserving evidence and credentials.

## Related

[Homey Apps](../05%20Homey/Apps/Homey%20Apps.md) · [Integration Roles](../01%20Architecture/Integration%20Roles.md) · [Backups](Backups.md) · [Troubleshooting](Troubleshooting.md)
