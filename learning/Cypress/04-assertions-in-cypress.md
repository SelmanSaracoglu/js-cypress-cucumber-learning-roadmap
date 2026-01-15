## Assertions in Cypress (Beginner-Friendly)

Assertions are the “verification” part of a test. Actions like clicking and typing only simulate user behavior. Assertions confirm the application actually behaved correctly.

Without assertions, a test can run steps and still pass even if the UI is broken.

---

## How Cypress assertions work

Cypress assertions are usually written with:
- `should()`
- `and()` (just chaining more assertions)

Key behavior: **Cypress automatically retries assertions** until they pass or the timeout is reached.  
This is why assertions also help reduce flakiness.

~~~js
cy.get(".alert").should("be.visible");
~~~

Chaining example:

~~~js
cy.get(".btn")
  .should("be.visible")
  .and("have.class", "btn-primary");
~~~

---

## Assertion categories you will use most

## 1) Visibility vs existence (most common confusion)

### exist
The element is in the DOM (may be hidden).

~~~js
cy.get("#spinner").should("exist");
~~~

### not.exist
The element is not in the DOM at all.

~~~js
cy.get("#spinner").should("not.exist");
~~~

### be.visible
The element is visible to the user (displayed).

~~~js
cy.get(".alert").should("be.visible");
~~~

### be.hidden
The element exists but is not visible.

~~~js
cy.get(".alert").should("be.hidden");
~~~

**Rule of thumb**
- Use `exist/not.exist` for loading overlays, removed elements, closed modals.
- Use `be.visible` for things the user should actually see.

---

## 2) Text assertions

### contain (partial match)
Use when the text contains extra parts.

~~~js
cy.get(".info").should("contain", "warning");
~~~

### have.text (exact match)
Use when the text must match exactly.

~~~js
cy.get("h1").should("have.text", "Assertions");
~~~

### have.value (input value)
Use for inputs after typing.

~~~js
cy.get("#email").should("have.value", "test@example.com");
~~~

**Important**
- `contain` is more flexible and less brittle than `have.text`.
- `have.text` is strict and can fail due to spaces/newlines.

---

## 3) Class and attribute assertions

### have.class
Check styling/state via class.

~~~js
cy.get(".btn").should("have.class", "btn-success");
~~~

### have.attr
Validate attributes like `href`, `type`, `name`.

~~~js
cy.get("a").should("have.attr", "href", "/home");
~~~

---

## 4) State assertions (checkbox, enabled, empty)

### checked / not.be.checked
~~~js
cy.get("#remember").should("be.checked");
cy.get("#remember").should("not.be.checked");
~~~

### enabled / disabled
~~~js
cy.get("#submit").should("be.enabled");
cy.get("#submit").should("be.disabled");
~~~

### empty
~~~js
cy.get("textarea").should("be.empty");
~~~

---

## Positive vs negative assertions

### Positive (something should be present/visible)
~~~js
cy.get(".success").should("be.visible");
~~~

### Negative (something should NOT be present)
~~~js
cy.get(".error").should("not.exist");
~~~

Negative assertions are powerful for verifying:
- loading spinners disappeared
- error messages are gone
- modals closed
- redirects happened correctly

---

## Chaining best practice

Chain assertions on the same element to keep tests readable:

~~~js
cy.get(".btn")
  .should("be.visible")
  .and("have.class", "btn-primary")
  .and("not.be.disabled");
~~~

---

## Why this matters for testers

- Assertions turn “automation steps” into real tests.
- They catch regressions by validating visible behavior and UI state.
- Negative assertions prevent false positives (e.g., spinner never disappeared).
- Cypress retrying assertions makes tests more stable without manual waits.

---

## Common mistakes / gotchas

- Confusing `exist` with `be.visible`.
- Using `have.text` when UI text includes extra whitespace or dynamic content.
- Forgetting to assert after an action (click/type with no verification).
- Writing assertions that are too weak:
  - Example: only checking URL change but not checking page content.
- Over-asserting tiny UI details (pixel-perfect / fragile rules) causing maintenance pain.
