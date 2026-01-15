
## First Feature File and Step Definitions (Cypress + Cucumber)

This step creates your first runnable BDD test:
- a `.feature` file (Gherkin)
- a step definition file (`.js`)
- matching Given / When / Then steps to Cypress commands

We will use **DemoWebShop** (not the Cypress example site) to keep the repo professional.

---

## 1) Minimal Gherkin structure

A `.feature` file uses:
- `Feature:` high-level capability
- `Scenario:` one test case
- `Given:` starting state (setup)
- `When:` user action
- `Then:` expected result (assertion)

Example:

~~~gherkin
Feature: Home page

Scenario: AUT-012 | Open the home page
  Given I open the home page
  Then I should see the store title
~~~

---

## 2) Recommended folder structure

~~~text
cypress/
  e2e/
    features/
      smoke/
        homepage.feature
    step-definitions/
      smoke/
        homepage.steps.js
~~~

This keeps features organized by intent (smoke/regression/domain).

---

## 3) Step text must match exactly

Cucumber matches steps by exact string.

Feature step:
~~~gherkin
Given I open the home page
~~~

Step definition must match:
~~~js
Given("I open the home page", () => {
  cy.visit("/");
});
~~~

If the text differs, Cypress will report the step as **undefined**.

---

## 4) Mapping steps to Cypress commands

Typical mapping:
- `Given` → navigation / setup (`cy.visit`, initial checks)
- `When` → actions (`click`, `type`, `select`)
- `Then` → assertions (`should`, `and`)

Example step definitions:

~~~js
Given("I open the home page", () => {
  cy.visit("/");
});

Then("I should see the store title", () => {
  cy.contains("Demo Web Shop").should("be.visible");
});
~~~

---

## Traceability (MDR)

We enforce traceability from day one.

Rules we will apply:
- Scenario name includes Automation ID: `AUT-### | ...`
- Scenario has a requirement reference tag:
  - `@US-HOME-001` (placeholder is okay)
- Pack tags:
  - `@smoke @ui`

Example feature:

~~~gherkin
@US-HOME-001 @smoke @ui
Scenario: AUT-012 | Open the home page
  Given I open the home page
  Then I should see the store title
~~~

Traceability table (for this step):

| Req/US/AC ID | Feature | Scenario | Automation ID | Tags | Evidence |
|---|---|---|---|---|---|
| US-HOME-001 | Home page | Open the home page | AUT-012 | @smoke @ui | Cypress runner screenshot/video |

---

## Why this matters for testers

- Confirms your `.feature` + step definitions wiring works.
- Establishes a clean pattern you will reuse for all future features.
- Sets traceability discipline early (Req → Scenario → Evidence).
- Builds confidence: BDD is not “theory”, it’s runnable automation.

---

## Common mistakes / gotchas

- Step text mismatch (undefined steps).
- Putting selectors into `.feature` files:
  - keep `.feature` readable; selectors belong in step definitions.
- Over-splitting steps into tiny actions (“step spaghetti”).
- Forgetting tags and Automation IDs:
  - traceability becomes manual and painful later.

---

## Missing but important

### baseUrl strongly recommended
If you set:
~~~js
baseUrl: "https://demowebshop.tricentis.com"
~~~
Then use:
~~~js
cy.visit("/login");
~~~
This makes steps short and environment-friendly.
