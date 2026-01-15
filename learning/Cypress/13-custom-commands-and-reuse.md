
## Custom Commands in Cypress (Reusable Actions)

As tests grow, you start repeating the same steps:
- visit home
- go to login
- type email/password
- click login
- search for a term

Custom commands let you move repeated logic into one reusable function so your tests stay:
- short
- readable
- consistent
- easy to maintain

Custom commands are defined in:
- `cypress/support/commands.js`

And then used in any spec file.

---

## Why custom commands matter

Without reuse, tests become:
- long and repetitive
- hard to update (change in 10 files)
- inconsistent (different selectors per test)

With commands:
- you change the logic once
- all tests benefit

---

## Creating a custom command

Syntax:

~~~js
Cypress.Commands.add("commandName", (arg1, arg2) => {
  // Cypress commands here
});
~~~

Example: `openHome`

~~~js
Cypress.Commands.add("openHome", () => {
  cy.visit("/");
});
~~~

Use in test:

~~~js
cy.openHome();
~~~

---

## Practical commands for DemoWebShop

### 1) openHome()
Opens the home page.

### 2) goToLogin()
Navigates to the login page.

### 3) search(term)
Types a term into search and clicks Search.

### 4) login(email, password)
Fills login form and clicks login.

These commands should:
- use stable selectors (`id`, `name`, `href`, etc.)
- include minimal “navigation correctness” assertions (URL includes)

---

## Where to put assertions?

Best practice:
- Commands should do actions + minimal safety checks (e.g., “we are on /login”).
- Tests should do the main validations (messages, UI behavior, business rules).

Example idea:
- `cy.goToLogin()` can assert URL includes `/login`.
- The test asserts “Returning Customer is visible” or “error message appears”.

---

## Why this matters for testers

- Keeps tests readable (focus on intent, not mechanics).
- Reduces flaky mistakes from duplicated code.
- Makes refactoring easy when UI changes.
- Helps you scale from “single spec” to real suites.

---

## Common mistakes / gotchas

- Putting too many assertions inside commands (makes debugging harder).
- Making commands depend on previous test state (avoid hidden dependencies).
- Using commands to hide important business validations.
- Forgetting that commands must be registered before specs run:
  - keep them in `cypress/support/commands.js` which is loaded automatically.
