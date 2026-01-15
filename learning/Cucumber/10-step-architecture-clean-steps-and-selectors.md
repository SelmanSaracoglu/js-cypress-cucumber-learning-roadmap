## Step Architecture (Clean Steps) + Selector Strategy (Avoid Step Spaghetti)

As your BDD suite grows, the biggest risk is **step spaghetti**:
- step definitions become huge and duplicated
- selectors are copied everywhere
- small UI changes break many steps

This step shows a scalable structure:
- Feature files stay readable
- Step definitions stay thin
- Implementation lives in reusable helpers (page/actions)
- Selectors are centralized

---

## 1) The problem: “fat steps” and duplicated selectors

Bad pattern:
- step file contains lots of Cypress code
- every step repeats selectors

~~~js
When("I login with username {string} and password {string}", (u, p) => {
  cy.get("#Email").clear().type(u);
  cy.get("#Password").clear().type(p);
  cy.get('input[value="Log in"]').click();
});
~~~

If `#Email` changes, you edit many places.

---

## 2) The clean architecture (simple, not over-engineered)

Recommended layers:

~~~text
cypress/
  e2e/
    features/
    step-definitions/
  support/
    pages/
      demoWebShop.login.page.js
    selectors/
      demoWebShop.selectors.js
~~~

Responsibilities:
- **Feature (.feature)**: intent + data + tags (MDR)
- **Step definitions**: glue only (call page/actions)
- **Page/actions**: Cypress commands and flows
- **Selectors**: stable locators in one place

---

## 3) Selector strategy (stability rules)

Best order (prefer top):
1) `data-*` attributes (`data-cy`, `data-test`) if available
2) stable `id`
3) stable `name` / attribute selectors
4) stable class (only if truly stable)
Avoid:
- `nth-child`
- deep chained selectors
- dynamic class names

DemoWebShop selectors we often use:
~~~js
const selectors = {
  emailInput: "#Email",
  passwordInput: "#Password",
  loginButton: 'input[value="Log in"]',
  errorBox: ".validation-summary-errors",
};
~~~

---

## 4) Thin step definitions (glue only)

Step file should look like this:

~~~js
Given("I am on the DemoWebShop login page", () => {
  loginPage.visit();
});

When("I attempt login with:", (dataTable) => {
  loginPage.loginWith(dataTable.rowsHash());
});

Then("I should see a DemoWebShop login error message", () => {
  loginPage.assertLoginError();
});
~~~

Notice:
- no selectors here
- no long logic here
- readable and maintainable

---

## 5) Page/actions example

`demoWebShop.login.page.js`:

~~~js
import { selectors } from "../selectors/demoWebShop.selectors";

export const loginPage = {
  visit() {
    cy.visit("/login");
    cy.contains("Returning Customer").should("be.visible");
  },

  loginWith(credentials) {
    cy.get(selectors.emailInput).clear().type(credentials.email);
    cy.get(selectors.passwordInput).clear().type(credentials.password);
    cy.get(selectors.loginButton).click();
  },

  assertLoginError() {
    cy.get(selectors.errorBox)
      .should("be.visible")
      .and("contain", "Login was unsuccessful");
  },
};
~~~

---

## Traceability (MDR)

Architecture supports MDR:
- Feature holds requirement tags + AUT IDs
- Steps remain stable even as selectors change (only selectors file updates)
- Evidence remains consistent because scenario names and tags are standardized

Traceability table example:

| Req/US/AC ID | Feature | Scenario | Automation ID | Tags | Evidence |
|---|---|---|---|---|---|
| US-LOGIN-DSHOP-020 | DemoWebShop Login | Invalid login shows error | AUT-050 | @smoke @ui @negative | Runner screenshot/video |

---

## Why this matters for testers

- Reduces maintenance costs (one selector change fixes many tests).
- Prevents duplication and improves readability.
- Makes your repo look professional (very important for GitHub + interviews).
- Enables faster debugging: steps show intent, pages show implementation.

---

## Common mistakes / gotchas

- Creating too many layers too early:
  - keep it minimal: selectors + one page object per screen.
- Putting assertions only in pages and never in steps:
  - it’s fine to keep UI assertions in page methods, but make sure intent remains clear.
- Storing dynamic values globally:
  - use aliases or local `then()` extraction when needed.
- Reusing overly generic steps:
  - too generic steps make features unclear.

---

## Missing but important

### Custom commands (later)
Cypress `Cypress.Commands.add()` can help for reusable flows,
but don’t start there. First get clean “pages/actions” working.
