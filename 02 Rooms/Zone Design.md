---
title: Zone Design
type: index
status: reference
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [rooms, index, topology]
---

# Zone Design

> [!note] Illustrative topology
> The zones below are a teaching model for stateful automation. They are not a floor plan, a record of sensor placement or a description of any real property.

## Bidirectional topology

```mermaid
flowchart LR
    FH[Entry Corridor]
    GB[Guest WC]
    K[Kitchen]
    LE[Living Transition]
    DR[Dining Zone]
    LA[Lounge Zone]
    BH[Transition Corridor]
    O[Study]
    D[Dressing Area]
    B[Bedroom]
    BA[Bathroom]
    FH <--> GB
    FH <--> K
    K <--> LE
    LE <--> DR
    LE <--> LA
    FH <--> BH
    BH <--> O
    BH <--> D
    BH <--> B
    BH <--> BA
```

The model allows movement in both directions and between branches through the Entry Corridor. Real homes need their own topology, measured coverage and privacy review.

## Illustrative service coverage

| Room | Presence | Audio | Classification |
|---|---|---|---|
| [[Entry Corridor]] | Planned | None recorded | Transition |
| [[Transition Corridor]] | Current | None | Transition |
| [[Guest WC]] | Not recorded | None recorded | Destination |
| [[Kitchen]] | Two planned sensors | multi-room audio | Destination |
| [[Living Transition]] | Not recorded | None recorded | Transition |
| [[Dining Zone]] | Not recorded | None recorded | Destination |
| [[Lounge Zone]] | Current | independent audio endpoint | Destination/separate audio domain |
| [[Study]] | Current | multi-room audio stereo pair | Destination |
| [[Dressing Area]] | Current | multi-room audio | Destination |
| [[Bedroom]] | Not recorded | None recorded | Destination |
| [[Bathroom]] | Current | multi-room audio | Destination |
| [[Exercise Area]] | Planned | multi-room audio | Destination; adjacency not confirmed |
| [[Utility Area]] | Not recorded | None recorded | Service area; adjacency not documented |

“Not recorded” is not the same as “absent.” Update the individual page after physical verification.
