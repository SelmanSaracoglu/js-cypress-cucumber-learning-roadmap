## Background, Hooks, and Tags (Cypress + Cucumber)

This step teaches three “suite hygiene” tools that keep BDD automation clean and scalable:
- `Background` for shared preconditions inside a feature file
- Cucumber `Before` / `After` hooks for technical setup/cleanup
- Tags for grouping scenarios (smoke/regression/negative/etc.)

---

## 1) Background (runs before EACH scenario in the feature)

Use `Background` when multiple scenarios in the same feature share the same starting state.

Instead of repeating:

~~~gherkin
Scenario: AUT-021 | A
  Given I open the home page

Scenario: AUT-022 | B
  Given I open the home page
~~~

Use:

~~~gherkin
Feature: Header navigation

Background:
  Given I open the home page

Scenario: AUT-021 | Open login page
  When I click the "Log in" link
  Then I should be on the login page

Scenario: AUT-022 | Open register page
  When I click the "Register" link
  Then I should be on the register page
~~~

What Background is good for:
- opening a page
- ensuring a base state (e.g., “user is on home page”)

What Background is NOT good for:
- heavy setup that should be done once
- steps that only some scenarios need

---

## 2) Hooks (Before / After) in step definition files

Hooks run automatically around scenarios.
They are implemented in **step definition code**, not in `.feature` files.

### Before / After per scenario
~~~js
import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.log("Starting scenario");
});

After(() => {
  cy.log("Finished scenario");
});
~~~

What hooks are good for:
- logging
- clearing cookies/localStorage
- resetting app state
- test cleanup patterns (when needed)

### Tag-scoped hooks (very useful)
Run a hook only for scenarios with a specific tag:

~~~js
Before({ tags: "@smoke" }, () => {
  cy.log("Smoke scenario setup");
});
~~~

This prevents heavy setup from running for every test.

---

## 3) Tags (grouping + test strategy)

Tags are labels placed above Feature or Scenario.

~~~gherkin
@smoke @ui @US-HOME-010
Scenario: AUT-021 | Open login page
  ...
~~~

Common tags:
- `@smoke` (fast critical checks)
- `@regression` (full suite)
- `@negative` (error paths)
- `@wip` (work in progress)
- `@ui` / `@api` (test type)

Why tags matter:
- selective execution (smoke only in CI)
- traceability (requirement tags)
- reporting and organization

---

## Traceability (MDR)

We standardize traceability through tags + IDs:

- Scenario name includes Automation ID:
  - `AUT-021 | ...`
- Requirement/User Story tag:
  - `@US-HEADER-001` (placeholder ok)
- Pack tags:
  - `@smoke` / `@regression`
- Type tags:
  - `@ui` / `@api` / `@negative`

Example:

~~~gherkin
@US-HEADER-001 @smoke @ui
Scenario: AUT-021 | Open login page from header
  When I click the "Log in" link
  Then I should be on the login page
~~~

Traceability table (example):

| Req/US/AC ID | Feature | Scenario | Automation ID | Tags | Evidence |
|---|---|---|---|---|---|
| US-HEADER-001 | Header navigation | Open login page from header | AUT-021 | @smoke @ui | Cypress runner output |

---

## Why this matters for testers

- Background reduces duplication and keeps features readable.
- Hooks keep technical setup/cleanup out of Gherkin (clean separation).
- Tags let you build real test packs (smoke/regression) and run them in CI.
- Traceability becomes natural (req tags + AUT IDs + evidence).

---

## Common mistakes / gotchas

- Using Background for steps that only some scenarios need (creates hidden coupling).
- Putting assertions into hooks (hard to debug and not business-readable).
- Over-tagging everything:
  - keep a consistent, small taxonomy.
- Forgetting traceability tags:
  - later it becomes manual work to map tests to requirements.
- Creating too many hooks:
  - prefer a few clear hooks, optionally tag-scoped.

---

## Missing but important

### Keep Background short
A good Background is usually 1–2 steps (open page + basic check).
If Background becomes a “mini test”, split the feature or move setup to hooks/API.
