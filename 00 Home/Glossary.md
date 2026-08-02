---
title: Glossary
type: reference
status: reference
revision: 3.0
audience: public
last-reviewed: 2026-07-11
tags: [glossary, reference, public-edition]
---

# Glossary

| Term | Meaning in this book |
|---|---|
| **Action** | A command sent by an automation, such as activating a scene or setting a variable. |
| **Advanced Flow** | Homey's visual flow editor for multi-step logic, conditions and branching. |
| **Automation state** | A durable fact used by more than one event: for example, `Audio_Current_Room` or a manual-override flag. |
| **Condition / guard** | A test that must be true before an action runs. |
| **Destination zone** | A logical area that may own an experience such as audio, lighting or comfort. |
| **Event** | A momentary change, such as a sensor becoming active. |
| **Fail-safe** | Behaviour that preserves safety and manual usability when automation is unavailable or uncertain. |
| **Follow-me audio** | A pattern in which an audio session changes destination zone after a confirmed movement sequence. |
| **Idempotent** | Safe to run more than once without creating additional unwanted effects. |
| **Manual override** | A person’s deliberate command that temporarily takes priority over automation. |
| **Native platform** | The manufacturer's own control layer, which retains device transport and safety responsibilities. |
| **Occupancy** | A sustained interpretation that an area is in use. |
| **Pattern** | A reusable design approach requiring local validation. |
| **Presence** | A sensor signal suggesting that a person remains in an area; it does not establish identity. |
| **Proposed** | A design that has not yet been tested in a real installation. |
| **Reconciliation** | Comparing stored automation state with actual device state and repairing drift. |
| **Source of truth** | The one component or variable authorized to own a particular fact. |
| **State machine** | A defined set of states, transitions and rules for moving between them. |
| **Tested** | Demonstrated under stated conditions and checked against acceptance criteria. |
| **Transition zone** | A route area that helps interpret movement but normally does not own audio or comfort. |
| **Verification required** | A fact that must be confirmed from the real installation, not inferred from a pattern. |

See [Verification Standards](../06%20Standards/Verification%20Standards.md) for evidence rules and [Index](Index.md) for navigation.
