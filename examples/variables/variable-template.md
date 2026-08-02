# Homey Pro Variable Template

**Status:** Template / illustrative

Use consistent names so flows are understandable when you return to them later.

| Variable | Type | Example initial value | Meaning |
|---|---|---:|---|
| `zone.<zone>.occupied` | Boolean | `false` | The current interpreted occupancy state, not merely the latest sensor event. |
| `zone.<zone>.manual_hold_until` | Text or date/time | empty | Optional expiry for a person's manual preference. |
| `home.quiet_hours` | Boolean | `false` | A separately tested policy flag; it is not a safety control. |
| `system.<service>.last_verified_at` | Text or date/time | empty | Records when you last checked a routine's outcome. |

Replace `<zone>` with a generic, stable name. Keep real addresses, family names, alarm details and device identifiers out of any public material.

Before a variable affects a flow, document who sets it, who clears it, the safe fallback if it is missing, and one acceptance check.
