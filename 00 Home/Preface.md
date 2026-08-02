---
title: Preface
type: front-matter
status: reference
revision: 1.0
audience: public
last-reviewed: 2026-07-11
tags: [front-matter, purpose]
---

# Preface

Smart-home automation is often demonstrated as a collection of clever reactions: a sensor detects motion, a light turns on; a tariff changes, a charger pauses. That is a useful beginning, but it does not by itself create a dependable home.

Reliable automation needs memory and boundaries. It needs to know whether a room is already occupied, whether a person has manually taken control, whether an action is safe to repeat, and what should happen when a sensor or cloud service stops responding. This book calls that approach **stateful automation**.

**Homey Pro** is used as the orchestration example because its Advanced Flows, variables, HomeyScript and integrations make these ideas concrete. The underlying principles apply more widely: separate observation from decision, keep device-native safety controls in place, make manual use pleasant, and treat every untested rule as a hypothesis. This is an independent handbook, not official Homey documentation.

The examples are deliberately generic. A Study, Transition Corridor and Bathroom are teaching zones, not a disclosed floor plan. A lighting platform, multi-room audio platform and battery system are roles, not endorsements or claims that every product behaves the same way.

Read this book as a toolkit. Start small, test in daylight, preserve a manual fallback, and write down what you actually observe.

If you use Homey Pro, begin with the [Homey Pro quick path](../examples/README.md#homey-pro-quick-path). It links a small variable set, a flow blueprint, an anonymised HomeyScript example and an acceptance checklist. Treat the materials as patterns until you have verified them in your own home.
