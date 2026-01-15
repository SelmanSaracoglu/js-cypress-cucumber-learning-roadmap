## User Actions in Cypress (type, click, check, uncheck, select)

Cypress tests become powerful when you can interact with the UI like a real user:
- type into inputs
- click links/buttons
- check/uncheck checkboxes and radio buttons
- select values from dropdowns

In Cypress, actions are always done on an element you locate first (with `cy.get()` or `cy.contains()`), then you call an action on it.

---

## 1) cy.type() — typing into input fields

Use `type()` to enter text into an `<input>` or `<textarea>`.

~~~js
cy.get("#username").type("admin");
cy.get('input[name="email"]').type("test@example.com");
~~~

### Special keys

Cypress supports keyboard keys using curly braces:

- `{enter}`
- `{backspace}`
- `{selectall}`

~~~js
cy.get("#search").type("cypress{enter}");
~~~

### Common patterns testers use

Clear and type (stable for re-typing):
~~~js
cy.get("#Email").clear().type("user@example.com");
~~~

Assert input value after typing:
~~~js
cy.get("#Email").type("user@example.com").should("have.value", "user@example.com");
~~~

---

## 2) cy.click() — clicking buttons, links, elements

Use `click()` to interact with buttons/links.

~~~js
cy.get(".btn-primary").click();
cy.contains("Log in").click();
~~~

Why Cypress clicks are stable:
- Cypress automatically waits for the element to be actionable.
- It retries if the element is not ready yet (within timeout).

---

## 3) cy.check() / cy.uncheck() — only for checkboxes and radios

`check()` and `uncheck()` work only on:
- `<input type="checkbox">`
- `<input type="radio">`

Checkbox example:
~~~js
cy.get('input[type="checkbox"]').check();
cy.get('input[type="checkbox"]').uncheck();
~~~

Radio example:
~~~js
cy.get('input[value="male"]').check();
~~~

Important: you cannot `uncheck()` a radio button (radios are exclusive by design).

---

## 4) cy.select() — dropdowns (<select>)

Use `select()` only for native HTML `<select>` elements.

~~~js
cy.get("select#country").select("Germany");
~~~

You can select by:
- visible text (most readable)
- value
- index (less stable)

~~~js
cy.get("select").select("US");   // by visible text or value (depending on HTML)
cy.get("select").select("1");    // by value if "1" exists
~~~

(For non-`<select>` custom dropdowns, you usually click the dropdown and click an option using `contains()`.)

---

## When commands fail (why you usually don’t need waits)

Cypress retries until:
- element exists and is actionable
- the action succeeds
- or the default timeout is reached

That’s why you typically avoid hard waits.

---

## Why this matters for testers

- Most UI tests are exactly these actions + assertions.
- Good action + assertion pairing prevents false positives.
- Clear typing patterns reduce flakiness in login/search flows.
- Checkbox/radio/dropdown interactions are common in forms and filters.
- Cypress retry model reduces timing issues compared to manual waits.

---

## Common mistakes / gotchas

- Using `cy.select()` on a custom dropdown that isn’t a real `<select>`.
- Trying to `check()` a non-checkbox/radio element (will fail).
- Forgetting `.clear()` before `.type()` when an input already has text.
- Clicking the wrong element when multiple “Log in” texts exist:
  - Scope with `cy.get(container).contains(text)`.
- Asserting nothing after an action:
  - Always validate something observable (URL, message, element state).
