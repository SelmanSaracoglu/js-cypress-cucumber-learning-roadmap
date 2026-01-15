## Test Data in Cypress: fixtures, Cypress.env(), and clean data patterns

As your tests grow, hardcoded strings become a problem:
- credentials repeated everywhere
- search terms duplicated
- updating data breaks many tests
- test intent becomes unclear

This step teaches you how to manage test data in a clean, Cypress-friendly way using:
- **fixtures** (JSON files)
- **Cypress.env()** (environment values)
- simple **data helper patterns** (small, stable, beginner-friendly)

---

## 1) Fixtures (JSON test data files)

Fixtures live under:
- `cypress/fixtures/`

Typical fixture files:
- `users.json` (login users)
- `searchTerms.json` (common search keywords)
- `addresses.json` (checkout addresses)

### Load a fixture with cy.fixture()

~~~js
cy.fixture("users.json").then((data) => {
  // data is your JSON object
});
~~~

### Why fixtures matter
- Data is **separate from test logic**
- Reusable across multiple specs
- Easy to edit without touching test code
- Looks professional in GitHub

---

## 2) Using fixture data inside a test (practical pattern)

Example: `users.json`

~~~json
{
  "validUser": {
    "email": "user@example.com",
    "password": "123456"
  }
}
~~~

In test:

~~~js
cy.fixture("users.json").then((users) => {
  cy.get("#Email").type(users.validUser.email);
  cy.get("#Password").type(users.validUser.password);
});
~~~

---

## 3) Cypress.env() (environment values)

`Cypress.env()` is best for values that:
- may change by environment (local vs CI)
- should not be hardcoded everywhere
- might be sensitive (credentials)

Read env value:
~~~js
const password = Cypress.env("PASSWORD");
~~~

Where env values can come from:
- `cypress.config.js` (env block)
- CLI (example): `npx cypress run --env PASSWORD=123456`

Note: If `Cypress.env("PASSWORD")` is undefined, your test will type `undefined` (bad). Always ensure it’s set.

---

## 4) Safe hybrid: fixture for structure + env for secrets

Common team pattern:
- keep emails/usernames in fixtures
- keep passwords/tokens in env

~~~js
cy.fixture("users.json").then((users) => {
  cy.get("#Email").type(users.validUser.email);
  cy.get("#Password").type(Cypress.env("PASSWORD"));
});
~~~

---

## 5) Simple data helpers (no libraries required)

Sometimes you need unique data (register email etc.). Use a timestamp:

~~~js
const uniqueEmail = `user_${Date.now()}@test.com`;
~~~

Why this matters:
- avoids collisions (same email can’t register twice)
- keeps test reliable

---

## Why this matters for testers

- Tests become maintainable (change data in one place).
- Reduces duplication and mistakes.
- Makes your repo “real QA automation” level.
- Allows environment-based execution (local/CI) without rewriting tests.
- Helps you create stable unique data for register flows.

---

## Common mistakes / gotchas

- Putting secrets directly into fixtures and committing them.
- Forgetting that fixture loading is async:
  - use `.then()` or alias; don’t expect synchronous access.
- Using `Cypress.env()` without setting the value (returns undefined).
- Over-randomizing data:
  - random can hide bugs and make debugging harder; use predictable patterns (timestamp).
