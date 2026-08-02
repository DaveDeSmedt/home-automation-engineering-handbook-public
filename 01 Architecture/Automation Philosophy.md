---
title: Automation Philosophy
type: architecture
status: reference
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [architecture, principles, reliability]
---

# Automation Philosophy

## Desired experience

Automation should reduce effort without making the home feel unpredictable. Occupants must be able to use lights, audio, climate controls, and safety systems when Homey or the internet is unavailable.

## Principles

### Build in short, testable increments

A small route that works is more valuable than a complete theoretical engine that has not been tested. New automation begins as `proposed`, moves to `partially verified` during testing, and becomes `verified` only after the acceptance criteria are met.

### Use state deliberately

Events say that something happened. State records what the system currently believes or intends. Durable state must have one source of truth, defined valid values, and a recovery path. See [[Stateful Automation Architecture]].

### Manual control wins

Automation must not trap occupants in a mode they cannot understand or cancel. A manual action either takes immediate effect or enables an explicit override with a documented reset condition.

### Native strength, central coordination

Homey coordinates across systems. Native platforms continue doing what they are best placed to do: Hue controls its lighting network, multi-room audio controls playback, and residential battery platform retains battery-level protections.

### Fail quietly and visibly

Non-critical automation should fail without disabling basic room use. Critical failures should generate a concise, actionable notification; repeated noise is not observability.

### Evidence before claims

Screenshots, exported flow definitions, recorded evidence, or repeatable tests support implementation claims. Assumptions stay labeled. See [[Verification Standards]] and [[ADR-006 Evidence Before Implementation Claims]].

## Practical/textbook separation

The handbook may describe a general architecture more advanced than the illustrative reference model. Practical flow pages must state their actual deployment and test status. This separation allows the book to teach without pretending the house already implements every pattern.
