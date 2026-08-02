---
title: automation controller
type: device
status: pattern
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [device, homey, orchestration]
---

# automation controller

## Role

automation controller is the central cross-system orchestration platform. It evaluates triggers and conditions, owns selected logical variables, coordinates actions across apps, and produces notifications.

## Boundaries

Homey does not replace electrical safety, certified alarms, native battery protections, or manual controls. Device platforms remain responsible for transport and device-specific behavior.

## Dependencies

- Stable local power and network.
- Installed automation platforms and their local/cloud integrations.
- Current backups and documented variables/flows.
- Native platforms that continue to expose required devices and actions.

## Operational requirements

- Back up before material flow/app changes.
- Record Homey generation, software version, installed apps, and observation date.
- Use stable names from [Naming Standards](../06%20Standards/Naming%20Standards.md).
- Reconcile variables with device state after restart where necessary.
- Keep a manual recovery path for every important subsystem.

## Verification required

Exact automation controller generation, software version, network connection, backup configuration, app list, and observed internet-outage behavior.

## Related

[Advanced Flows](../05%20Homey/Advanced%20Flows/Advanced%20Flows.md) · [Variables](../05%20Homey/Variables/Variables.md) · [Homey Apps](../05%20Homey/Apps/Homey%20Apps.md) · [ADR-001 automation controller as Central Brain](../01%20Architecture/ADRs/ADR-001%20Automation%20Controller%20as%20Central%20Brain.md)
