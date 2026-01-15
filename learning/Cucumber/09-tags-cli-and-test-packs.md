
## Tags in CLI and Test Packs (Smoke / Regression / Negative)

Tags are not just labels. In real projects they define:
- what runs in CI
- what runs locally
- which tests belong to which pack (smoke/regression)
- traceability mapping (Req/US/AC tags)

This step focuses on:
- a practical tagging strategy
- running tests by tags from the command line
- building “test packs” without creating separate suites manually

---

## 1) Tagging strategy (minimal but powerful)

Use a small, consistent set.

### Pack tags
- `@smoke` → fast critical checks (runs on every PR)
- `@regression` → full suite (runs nightly or before release)

### Type tags
- `@ui` → UI flows
- `@api` → API scenarios
- `@negative` → error-path tests

### Traceability tags (MDR)
- `@US-...` or `@AC-...` → requirement mapping

Example:
~~~gherkin
@US-LOGIN-DSHOP-010 @smoke @ui
Scenario: AUT-040 | Open login page
  ...
~~~

---

## 2) Avoid tag chaos (rules)

Good:
- 1 requirement tag + 1 pack tag + 1 type tag
- optional extra tags: `@wip`, `@critical`

Bad:
- 8–10 tags per scenario (hard to reason about)
- inconsistent spelling (`@Smoke` vs `@smoke`)
- tagging by random categories without a strategy

---

## 3) Running by tags (concept)

With the Cucumber preprocessor, tags are usually controlled by **environment variables**.
Different setups exist, but the most common approach is:
- run only scenarios that match a tag expression

Typical tag expressions:
- run smoke: `@smoke`
- run regression but not wip: `@regression and not @wip`
- run all UI tests: `@ui`
- run negative tests: `@negative`

Note: The exact CLI parameter can vary by plugin version/config.
So the best approach is: **standardize commands in package.json scripts**.

---

## 4) Package.json scripts (recommended)

Create scripts so nobody memorizes long commands.

Example scripts (pattern):
~~~json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "cy:smoke": "cypress run --env TAGS='@smoke'",
    "cy:regression": "cypress run --env TAGS='@regression and not @wip'",
    "cy:negative": "cypress run --env TAGS='@negative'"
  }
}
~~~

What this gives you:
- one command = one pack
- consistent usage across team + CI

---

## 5) How MDR uses tags

MDR/Traceability becomes easier when:
- Each scenario includes:
  - `AUT-###` in name
  - `@US-...` or `@AC-...`
  - pack + type tags

This allows reporting like:
- “Which requirements are covered by smoke?”
- “Which requirements have only regression coverage?”
- “Show evidence for AUT-040”

Traceability table example:

| Req/US/AC ID | Automation ID | Pack | Type | Evidence |
|---|---|---|---|---|
| US-LOGIN-DSHOP-010 | AUT-040 | @smoke | @ui | Runner video/screenshot |
| US-LOGIN-DSHOP-011 | AUT-041 | @regression | @negative | Runner logs |

---

## Why this matters for testers

- CI pipelines depend on tags (fast checks vs full suite).
- Reduces execution time and makes feedback faster.
- Enables structured coverage reporting (MDR).
- Helps you explain “test strategy” in interviews clearly.

---

## Common mistakes / gotchas

- No consistent tag strategy → nobody trusts the packs.
- Using smoke pack as “everything important” → smoke becomes slow.
- Not excluding `@wip` → unstable tests break pipelines.
- Requirement tags missing → traceability becomes manual.
- Assuming tag filtering works without scripts/config:
  - always verify by running a tag command locally.

---

## Missing but important

### Keep smoke very small
A good smoke pack:
- 5–20 scenarios max (depends on app)
- only critical paths
- should run in minutes

Regression can be large. Smoke must stay fast.
