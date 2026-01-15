## Preparing Cypress for Cucumber (BDD)

This step explains how to run **.feature** files in Cypress using the Cucumber (BDD) style:
- Feature / Scenario written in Gherkin
- Given / When / Then steps implemented in JavaScript

We will use: **@badeball/cypress-cucumber-preprocessor** (Cypress 10+ compatible).

---

## What changes with BDD?

### Classic Cypress style (spec-based)
~~~js
it("logs in successfully", () => {
  cy.visit("/login");
  cy.get("#Email").type("test@test.com");
  cy.get("#Password").type("123456");
  cy.get('input[value="Log in"]').click();
});
~~~

### Cucumber style (feature-based)
Gherkin file describes intent:

~~~gherkin
Scenario: Successful login
  Given I am on the login page
  When I enter valid credentials
  Then I should be logged in
~~~

Step definitions implement the steps:

~~~js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("/login");
});
~~~

Key idea:
- **Feature file = readable intent**
- **Step definitions = implementation**

---

## Folder structure (recommended for Cypress + Cucumber)

A clean, common structure:

~~~text
cypress/
  e2e/
    features/
      *.feature
    step-definitions/
      *.js
cypress.config.js
~~~

Why:
- keeps feature files separate from implementation
- avoids mixing `.cy.js` specs and `.feature` files
- easier traceability later (MDR)

Note: You can keep `.feature` directly in `cypress/e2e/`, but `features/` is cleaner.

---

## Step definition matching rules (important)

Cucumber matches steps by the **exact step text**.

Feature:
~~~gherkin
Given I am on the login page
~~~

Step definition must match:
~~~js
Given("I am on the login page", () => { ... });
~~~

If the text differs (even small changes), the step will be reported as **undefined**.

---

## Parameterized steps (reduce duplication)

Instead of many similar steps, use parameters:

~~~gherkin
When I type email "test@test.com"
~~~

~~~js
When('I type email "{string}"', (email) => {
  cy.get("#Email").type(email);
});
~~~

This keeps features readable and step definitions reusable.

---

## Traceability (MDR)

BDD becomes powerful when each Scenario is traceable to requirements.

How we link artifacts:
- Requirement / User Story / AC ID
  → Feature
  → Scenario
  → Step Definitions
  → Test evidence (screenshots, videos, CI run logs)

Recommended conventions:
- **Automation ID** in Scenario name: `AUT-001 | ...`
- Requirement ID via tag: `@US-LOGIN-001` or `@AC-LOGIN-002`
- Pack tags: `@smoke @regression @ui @negative`

Example:

~~~gherkin
@US-LOGIN-001 @smoke @ui
Scenario: AUT-001 | Successful login
  Given I am on the login page
  When I enter valid credentials
  Then I should be logged in
~~~

---

## Traceability table (example)

| Req/US/AC ID | Feature | Scenario | Automation ID | Tags | Evidence |
|---|---|---|---|---|---|
| US-LOGIN-001 | Login | Successful login | AUT-001 | @smoke @ui | Cypress run (screenshots/video) |

---

## Why this matters for testers

- Feature files are readable for non-technical stakeholders.
- Step definitions keep implementation centralized and reusable.
- Traceability becomes easier (Req → Scenario → Evidence).
- Cleaner collaboration: business intent and technical code are separated.

---

## Common mistakes / gotchas

- Step text mismatch causes **undefined steps**.
- Over-creating steps ("step spaghetti"):
  - too many micro-steps make features unreadable and hard to maintain.
- Putting selectors directly into feature files:
  - keep selectors in step definitions, not in Gherkin.
- Not standardizing tags and Automation IDs:
  - traceability becomes messy quickly.

---

## Missing but important

### Where the plugin is wired
To actually run `.feature` files, Cypress needs:
- plugin setup in `cypress.config.js`
- `specPattern` including `**/*.feature`

You already have this config structure in place (based on your earlier config), so next step will focus on dependency installation and first runnable `.feature`.
