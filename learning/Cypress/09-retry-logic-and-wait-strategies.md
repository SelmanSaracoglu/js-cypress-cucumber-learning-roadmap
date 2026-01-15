## Retry Logic & Wait Strategies in Cypress (Beginner-Friendly)

Flaky tests usually happen because the test is faster than the UI (or the network). Cypress solves most timing problems using **auto-retry**.

Your goal as a tester:
- avoid guessing waits
- wait for real events (network call, DOM change, state change)
- write assertions that Cypress can retry

---

## Cypress superpower: Auto-retry

Cypress automatically retries these until they pass or timeout:
- `cy.get()`
- `cy.contains()`
- `.should()` assertions

Example:

~~~js
cy.get(".alert")
  .should("be.visible");
~~~

What Cypress does:
- keeps searching for `.alert`
- once it exists, keeps checking visibility
- fails only after the timeout

This is why you usually do NOT need manual sleeps.

---

## Bad waiting vs good waiting

## ❌ Bad: fixed sleeps

~~~js
cy.wait(2000);
~~~

Problems:
- makes tests slow
- still flaky (2s may be enough today, not tomorrow)
- hides real timing issues

## ✅ Good: event-based waiting (network)

~~~js
cy.intercept("GET", "**/items*").as("items");
cy.get(".reload").click();
cy.wait("@items");
~~~

This is reliable because you wait for a real event: “request finished”.

## ✅ Good: DOM-based waiting (auto-retry)

~~~js
cy.get(".success-message").should("exist");
~~~

Use this when the UI changes asynchronously and you expect an element to appear/disappear.

---

## Common retry patterns testers use

## 1) Element appears later
~~~js
cy.contains("Submit").click();
cy.get(".success").should("be.visible");
~~~

## 2) Value changes over time
~~~js
cy.get("#status").should("contain", "Done");
~~~

## 3) Button becomes enabled
~~~js
cy.get("button.save")
  .should("not.be.disabled")
  .click();
~~~

---

## should() retries, then() does NOT (critical)

## should() = retry until pass
~~~js
cy.get(".count").should("have.text", "5");
~~~

## then() = single shot (no retry)
~~~js
cy.get(".count").then(($el) => {
  expect($el.text()).to.eq("5");
});
~~~

Why this matters:
- If `.count` changes later, `.then()` might read the old value and fail.
- `.should()` will keep retrying until it becomes "5" or times out.

### Rule of thumb
- Use `should()` when the UI can change and you need retry.
- Use `then()` when you need to:
  - extract values
  - do one-time calculations
  - work with plain JS data (often paired with `cy.wrap()`)

---

## Combining intercept + retry (best practice)

A strong stability pattern:

~~~js
cy.intercept("GET", "**/items*").as("items");
cy.get(".reload").click();
cy.wait("@items");
cy.get(".item-row").should("have.length.at.least", 1);
~~~

You wait for the request, then assert UI changes with retry.

---

## Why this matters for testers

- Eliminates most flaky timing problems without manual waits.
- Makes tests faster (no unnecessary sleeps).
- Improves reliability in CI environments (slower machines).
- Forces you to validate real behavior (network + UI state).
- Helps you debug properly: if a test fails, it fails for a real reason.

---

## Common mistakes / gotchas

- Using `cy.wait(3000)` “just to be safe”.
- Using `.then()` for dynamic UI changes (no retry).
- Waiting for the wrong event:
  - intercept must be set **before** the action that triggers the request.
- Asserting too weakly after a wait:
  - prefer asserting visible UI result (message, list length, button state).
- Over-waiting:
  - avoid waiting for network calls that are irrelevant to the assertion.

