## Cypress Hooks and Test Setup (before, beforeEach, afterEach, after)

Hooks are special functions that run automatically at specific times in a test suite. Their main purpose is to **avoid repeating the same setup code** in every test and to make sure each test starts from a **known state**.

Hooks must be placed inside a `describe()` block.

---

## The problem hooks solve

Beginner tests often look like this:

~~~js
it("test 1", () => {
  cy.visit("/");
  cy.contains("Log in").click();
  // assertions...
});

it("test 2", () => {
  cy.visit("/");
  cy.contains("Log in").click();
  // assertions...
});
~~~

This creates:
- duplicated code
- harder maintenance (change one thing in many tests)
- higher chance of mistakes

Hooks let you write that setup **once**.

---

## Hook types (what runs when)

## before()
Runs **once** before all tests in the `describe` block.

Use it for one-time setup work.
Example tester use cases:
- seed test data via API
- create a reusable user once

~~~js
before(() => {
  // one-time setup
});
~~~

## beforeEach()
Runs **before every** `it()` in the block.

This is the most common hook in UI testing because you typically want:
- the same starting page
- a clean state before each test

~~~js
beforeEach(() => {
  cy.visit("/");
});
~~~

## afterEach()
Runs **after every** `it()` in the block.

Useful when you want cleanup per test.
Example use cases:
- log out after each test
- clear cookies/localStorage when needed

~~~js
afterEach(() => {
  // cleanup after each test
});
~~~

## after()
Runs **once** after all tests in the `describe` block.

Usually not needed for simple UI suites, but can be used for final cleanup.

~~~js
after(() => {
  // final cleanup
});
~~~

---

## A practical pattern for UI tests (recommended)

Use `beforeEach()` for navigation and setup.
Keep `it()` focused on one scenario and its assertions.

~~~js
describe("Login page tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Log in").click();
    cy.url().should("include", "/login");
  });

  it("shows Returning Customer section", () => {
    cy.contains("Returning Customer").should("be.visible");
  });

  it("shows New Customer section", () => {
    cy.contains("New Customer").should("be.visible");
  });
});
~~~

---

## Cypress-specific notes (important)

- Hooks run **per spec file**.
- `beforeEach()` does not share state across different spec files.
- Tests should be independent:
  - One failing test should not break the next test.
- Prefer setting state via UI/API inside hooks rather than relying on variables.

---

## Best practices

- Put navigation and common setup in `beforeEach()`.
- Keep each `it()` small and focused (one scenario).
- Avoid making tests depend on the previous test’s outcome.
- If you need cleanup, prefer Cypress tools like:
  - clearing cookies/localStorage
  - visiting a known page
  - logging out through UI

---

## Why this matters for testers

- Cleaner suites: less repetition, more readable specs.
- Faster maintenance: update setup in one place.
- More stable tests: each test starts from the same baseline.
- Better debugging: when tests are isolated, failures are easier to diagnose.

---

## Common mistakes / gotchas

- Putting assertions that belong to a specific test into `beforeEach()`:
  - Keep hook assertions minimal (just “we are on the right page”).
- Sharing variables across tests expecting them to keep updated values:
  - Cypress runs commands asynchronously; this often creates confusion.
- Overusing `before()` for UI state:
  - UI state can drift; `beforeEach()` is safer for consistent starting state.
