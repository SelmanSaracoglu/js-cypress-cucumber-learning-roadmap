## What is Cypress?

Cypress is a JavaScript-based test automation tool used for:
- UI testing
- API testing
- End-to-end workflows
- Continuous testing in CI/CD pipelines

It runs in the browser and provides clear feedback with automatic waiting and detailed debugging.

## Why Cypress?

Cypress simplifies UI automation because:
- No explicit waits needed in most cases
- Automatically retries commands until they pass or time out
- Built-in assertions
- Live browser preview + time-travel debugging
- Detailed command logs

Compared to Selenium:
- Cypress runs inside the browser (different execution model)
- Uses JavaScript
- You usually do not need `async/await` for Cypress commands

## Installation (local)

1) Initialize Node project
~~~bash
npm init -y
~~~

2) Install Cypress as a dev dependency
~~~bash
npm install cypress --save-dev
~~~

3) Open Cypress Test Runner
~~~bash
npx cypress open
~~~

Cypress creates a structure like:
- `cypress/e2e/`
- `cypress/fixtures/`
- `cypress/support/`
- `cypress.config.js`

## First test building blocks

### describe()
Groups related tests (like a test suite).

~~~js
describe("Login feature", () => {
  // tests go here
});
~~~

### it()
A single test scenario.

~~~js
it("should open the login page", () => {
  // steps
});
~~~

### cy.visit()
Opens a URL in the browser.

~~~js
cy.visit("https://demowebshop.tricentis.com/");
~~~

### cy.contains()
Finds elements by visible text (useful for buttons/links/messages).

~~~js
cy.contains("Log in").click();
~~~

### should()
Asserts expected behavior (validation).

~~~js
cy.contains("Welcome").should("be.visible");
~~~

## Automatic waiting

Cypress automatically waits and retries until:
- an element exists / is visible (depending on your command)
- the page is ready
- an assertion passes or the command times out

This usually means you do NOT need:
- hard sleeps
- manual waits
- `async/await` for Cypress command flow

## When a test fails

Cypress typically:
- shows the exact failing command in the runner
- stops the test execution at that point
- marks the test as failed (red)
- can capture screenshots/videos depending on configuration

## Why this matters for testers

- Faster feedback loop: run tests locally with clear logs and UI replay.
- Less flaky tests: built-in retry + auto waiting reduces timing issues.
- Simple readable specs: `describe/it` keep suites organized.
- CI-ready: same tests can run headless in pipelines once stable.
- Great for E2E flows: login → search → add to cart → validations.

## Common mistakes / gotchas

- Trying to use `async/await` around Cypress commands (usually wrong pattern).
- Expecting values from Cypress commands like normal JS returns:
  - Cypress commands are queued; you must use Cypress chaining (`.then(...)`) when needed.
- Overusing `cy.wait(…)` instead of relying on built-in retries.
- Writing brittle selectors:
  - Prefer stable selectors (data attributes) when possible. For public demo sites, use reliable CSS/text carefully.
