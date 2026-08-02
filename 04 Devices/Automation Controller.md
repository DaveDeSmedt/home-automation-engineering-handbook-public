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
- Use stable names from [[Naming Standards]].
- Reconcile variables with device state after restart where necessary.
- Keep a manual recovery path for every important subsystem.

## Verification required

Exact automation controller generation, software version, network connection, backup configuration, app list, and observed internet-outage behavior.

## Related

[[Advanced Flows]] · [[Variables]] · [[Homey Apps]] · [[ADR-001 automation controller as Central Brain]]
