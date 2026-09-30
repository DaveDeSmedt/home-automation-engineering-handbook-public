---
title: Lessons from a Live Audit
type: operation
status: reference
revision: 1.0
audience: public
last-reviewed: 2026-09-30
tags: [operations, audit, ai, maintenance]
---

# Lessons from a Live Audit

In September 2026 the reference home was reviewed end to end by an AI assistant connected to Homey Pro through Homey's MCP server. The assistant read every Advanced Flow, variable and relevant script directly from the running system, compared it with this handbook, and the owner decided what was a bug and what was a deliberate choice. This page records what that review found, stripped of anything specific to the house.

## What the review found

| Finding | Why it slipped through | Lesson |
|---|---|---|
| Two switch-off paths were wired to the wrong output of their re-check, so lights went off while people were still there | The flow looked complete; the fault only shows in use | Test the *negative* case of every re-check, not just the happy path |
| Two values (`Home` and `Awake`) meant the same thing; systems that checked only one silently did nothing | The vocabulary grew over time | One value per meaning, listed in [Variables](../05%20Homey/Variables/Variables.md) |
| A state change could lower ventilation while CO2 was still high | Separate event paths each set a mode | Route triggers through one decision point with priorities |
| A brightness script still referenced a sensor from another room that had since been removed | Copy-paste between zones | Search scripts for names of devices and variables when anything is renamed or retired |
| Routine flows used *toggle* actions, so running one twice inverted the result | Toggles look convenient | Prefer explicit set/on/off; toggles are for human buttons only |
| Dashboard override tiles flipped a variable that no gate read any more | A zone was split into several zones | When restructuring, check every writer has a reader |
| The handbook was about ten weeks behind the house | Documentation was updated when remembered | Treat "documentation updated" as part of done for every change |

## Deliberate choices that looked like bugs

A review also surfaces things that *look* wrong but are intentional: a zone whose switch-on path is disconnected outside winter, zero light targets during the day, a deactivated flow kept as reference. Record these as design decisions so the next review, human or AI, does not "fix" them.

## Working with an AI on a live system

- **Read first, change later.** A read-only audit of the running system is fast and safe, and it is where most of the value was.
- **The human decides.** Several findings were deliberate choices only the owner could recognise.
- **Verify after every write.** Editing an Advanced Flow through the connector rewrites the whole flow. In this review it silently dropped the transition duration on three brightness cards, which then had to be restored by hand. Re-read the flow after each change.
- **Keep the record in sync.** The same session that audits the system can update the handbook, which closes the documentation gap at the moment it is smallest.

## Hardware lesson

Some presence sensors that performed well on paper proved unreliable in daily life and were retired. Judge sensors by weeks of real use in the room where they will live, not by specifications.

## Related

[Maintenance](Maintenance.md) · [Troubleshooting](Troubleshooting.md) · [Verification Standards](../06%20Standards/Verification%20Standards.md) · [Stateful Automation Architecture](../01%20Architecture/Stateful%20Automation%20Architecture.md)
