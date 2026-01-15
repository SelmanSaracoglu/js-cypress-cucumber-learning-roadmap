## BDD Login Scenario with Scenario Outline (Cypress + Cucumber)

This step builds a realistic, interview-friendly BDD login test using:
- `Scenario Outline` + `Examples`
- valid + invalid credential cases
- step definitions that call Cypress commands

Target app:
- https://the-internet.herokuapp.com/login
- Valid username: `tomsmith`
- Valid password: `SuperSecretPassword!`

Success criteria:
- URL includes `/secure`
- Flash message contains `You logged into a secure area!`

Failure criteria:
- URL stays on `/login`
- Flash message contains either:
  - `Your username is invalid!`
  - `Your password is invalid!`

---

## Feature design (one outline, multiple datasets)

We model 3 cases:
1) Valid login
2) Invalid username
3) Invalid password

Recommended approach:
- **one Scenario Outline**
- include expected outcome in the Examples table (`success` vs `fail`)
- assert based on that expectation

Example outline:

~~~gherkin
Feature: Login

Scenario Outline: AUT-026 | Login attempts with different credentials
  Given I am on the login page
  When I login with username "<username>" and password "<password>"
  Then the login should be "<result>"

Examples:
  | username  | password               | result  |
  | tomsmith  | SuperSecretPassword!   | success |
  | wronguser | SuperSecretPassword!   | fail    |
  | tomsmith  | wrongpass              | fail    |
~~~

---

## Step mapping to Cypress

### Given (setup/navigation)
~~~js
cy.visit("https://the-internet.herokuapp.com/login");
~~~

### When (action)
Fill the form + click login:
- `#username`
- `#password`
- `button[type="submit"]` (or the Login button)

### Then (assertions)
Success:
- `cy.url().should("include", "/secure")`
- `cy.get("#flash").should("contain", "You logged into a secure area!")`

Fail:
- `cy.url().should("include", "/login")`
- `cy.get("#flash").should("contain", "invalid!")`
  (or assert one of the two invalid messages)

---

## Traceability (MDR)

We apply traceability even in interview-style demos.

Conventions:
- Automation ID in Scenario name: `AUT-026 | ...`
- Requirement/User Story tag: `@US-AUTH-001` (placeholder is fine)
- Pack tags: `@smoke` or `@regression`
- Type tags: `@ui`, and for failures `@negative`

Example:

~~~gherkin
@US-AUTH-001 @regression @ui
Scenario Outline: AUT-026 | Login attempts with different credentials
  ...
~~~

Traceability table:

| Req/US/AC ID | Feature | Scenario | Automation ID | Tags | Evidence |
|---|---|---|---|---|---|
| US-AUTH-001 | Login | Login attempts with different credentials | AUT-026 | @regression @ui | Cypress run + screenshots/videos |

---

## Why this matters for testers

- Demonstrates test design (positive + negative auth cases).
- Shows data-driven BDD execution via Examples tables.
- Mirrors real-world QA workflows: one intent, many datasets.
- Strong interview material: readable feature + runnable automation.

---

## Common mistakes / gotchas

- Step text mismatch → undefined steps.
- Forgetting to clear inputs before typing (especially if steps reuse the same page).
- Using too strict message asserts (flash may include extra whitespace or an “×” close icon):
  - prefer `contain` instead of `have.text`.
- Mixing UI flows in one outline:
  - Outline works best when steps stay identical and only data changes.

---

## Missing but important

### Keep outcomes explicit
Include a `result` column (success/fail) in Examples.
This prevents writing two almost-identical outlines and keeps traceability cleaner.
