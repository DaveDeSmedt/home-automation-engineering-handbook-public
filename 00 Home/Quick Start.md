---
title: Quick Start
type: front-matter
status: reference
revision: 2.0
audience: public
last-reviewed: 2026-07-11
tags: [quick-start, reader-guide]
---

# Quick Start

## Read in ten minutes

1. Read [[Preface]].
2. Read the first sections of [[Stateful Automation Architecture]].
3. Pick one service in [[System Index]].
4. Use [[Advanced Flows]] to build one small, reversible automation.
5. Use [[Verification Standards]] to test it before calling it reliable.

## A safe first exercise

**Pattern — not a copy/paste deployment**

Create an automation that turns on a low-risk light when a presence input becomes active and the room is dark.

Before enabling it, define:

- the exact trigger;
- the darkness condition;
- a manual override rule;
- a timeout or exit condition;
- how you will restore manual control if it behaves unexpectedly.

This exercise teaches the structure used throughout the book: event → state → guard → action → verification.

## Keep your private facts private

If you adapt this vault into a real project, store addresses, exact inventory, network settings, photos and security notes in a separate private repository. Do not add them to the public edition.
