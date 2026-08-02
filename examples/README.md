# Safe Examples for Homey Pro

This folder contains small, privacy-safe learning materials for Homey Pro users. They use fictional zones and generic device capabilities. They contain no real device IDs, account names, addresses, network information, schedules, or security logic.

## Homey Pro quick path

1. Read the [variable template](variables/variable-template.md) and create only the variables you understand.
2. Build the [arrival-lighting flow blueprint](flows/arrival-lighting-blueprint.md) in a test zone.
3. Read the [occupancy-lighting HomeyScript](homeyscript/occupancy-lighting.js); replace the placeholder device ID only after confirming it in Homey Developer Tools.
4. Run the [acceptance checklist](acceptance-tests/occupancy-lighting-checklist.md) in daylight, with a manual switch available.

## Evidence and safety labels

| Label | Meaning |
|---|---|
| **Illustrative** | A teaching example. It has not been tested in your home and may need changes. |
| **Template** | A starting structure. Fill in your own validated names, values and conditions. |
| **Acceptance check** | A repeatable observation you should perform before trusting a flow. |
| **Tested** | Only used where the repository records the conditions and observed result. |

No file in this `examples/` folder is a copy of a live installation. Do not use these examples for alarms, locks, smoke detection, medical needs, vehicle charging, batteries, or any life-safety decision.

## Licence

The Markdown explanations and checklists are covered by the repository's [CC BY-SA 4.0 licence](../LICENSE.md). Runnable code in `examples/homeyscript/` is [MIT licensed](LICENSE).
