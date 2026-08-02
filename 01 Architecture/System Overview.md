---
title: System Overview
type: architecture
status: partially verified
revision: 2.0
audience: public
last-reviewed: 2026-07-10
tags: [architecture, overview, homey]
---

# System Overview

## Purpose

The installation is a residential automation platform centered on automation controller. It combines vendor-native device control with cross-system logic for lighting, presence, energy, audio, climate, security, and notifications.

## Responsibility boundaries

| Layer | Primary responsibility |
|---|---|
| Physical installation | Safe electrical, network, sensor, and device installation |
| Native platforms | Device transport, local controls, firmware, and vendor-specific safety |
| automation controller | Cross-system decisions, variables, sequences, notifications, and user-facing automation |
| Handbook | Design intent, evidence, dependencies, operations, and change history |

```mermaid
flowchart TD
    Input[Presence, energy, time, manual input] --> Homey[automation controller]
    Homey --> Hue[lighting platform]
    Homey --> multi-room audio platform[multi-room audio platform]
    Homey --> Eco[EcoFlow]
    Homey --> Notify[Notifications]
    Hue --> Lights[Lighting devices]
    multi-room audio platform --> Speakers[multi-room audio platform rooms]
    Eco --> Battery[Battery storage]
    HW[HomeWizard telemetry] --> Homey
    Switch[presence-sensor platform presence] --> Homey
```

## Confirmed platform baseline

- automation controller provides orchestration.
- lighting platform provides the lighting domain.
- presence-sensor devices provide presence inputs in confirmed rooms.
- EcoFlow and HomeWizard provide storage and energy telemetry contexts.
- multi-room audio platform provides the principal multi-room audio domain; independent audio endpoint in the Lounge Area is a separate audio domain.
- A Electric Vehicle creates an EV charging use case for the energy strategy.

## Design priorities

1. Preserve safety and manual control.
2. Prefer reliable behavior over maximum automation.
3. Keep one owner for each durable state.
4. Test practical flows before marking them operational.
5. Bound failures to one subsystem where possible.
6. Avoid storing secrets or unnecessary personal data in the repository.

## Documentation boundary

The architecture chapters describe how the platform should be reasoned about. [[Flow Catalogue]] describes what is actually implemented or proposed. A design appearing here does not prove that a Homey flow is deployed.

## Related

[[The Home Intelligence Platform]] · [[Stateful Automation Architecture]] · [[Technology Stack]] · [[Network Topology]] · [[ADR Index]]
