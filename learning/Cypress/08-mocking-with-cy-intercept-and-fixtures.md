## Mocking responses with cy.intercept() and fixtures (Beginner-Friendly)

In Step 20 you learned how to **spy** on network calls.
In this step you learn how to **stub/mock** responses.

Mocking means: Cypress returns your fake data instead of letting the real backend respond.

This is extremely useful for testing:
- success and error states
- edge cases that are hard to create in real data
- stable, repeatable tests (no flakiness from backend)

---

## Spy vs Stub (quick recap)

### Spy (observe only)
Backend still responds with real data.

~~~js
cy.intercept("GET", "**/users*").as("getUsers");
cy.wait("@getUsers");
~~~

### Stub (override response)
Cypress provides the response. The real backend is not used for that request.

~~~js
cy.intercept("GET", "**/users*", {
  statusCode: 200,
  body: { users: [] },
}).as("getUsers");
~~~

---

## Basic stub example

You can stub a request by passing a response object.

~~~js
cy.intercept("GET", "**/comments/*", {
  statusCode: 200,
  body: { name: "Mocked name from Cypress" },
}).as("getComment");
~~~

What you gain:
- deterministic response
- fast tests
- stable UI behavior (your app still “thinks” it received a real response)

---

## Mocking create/update requests (POST/PUT)

You can stub POST/PUT responses the same way.

### Simulate success (201 Created)
~~~js
cy.intercept("POST", "**/comments", {
  statusCode: 201,
  body: { id: 999, text: "Created by mock" },
}).as("createComment");
~~~

### Simulate error (500)
~~~js
cy.intercept("POST", "**/comments", {
  statusCode: 500,
  body: { error: "Server failed" },
}).as("createComment");
~~~

Tester value:
- you can reliably test UI error messages and recovery flows

---

## Fixtures: storing mock data in files

Fixtures are JSON files stored under:
- `cypress/fixtures/`

Example file:
- `cypress/fixtures/users.json`

Load fixture and use it as response:

~~~js
cy.fixture("users.json").then((data) => {
  cy.intercept("GET", "**/users*", {
    statusCode: 200,
    body: data,
  }).as("getUsers");
});
~~~

Why fixtures matter:
- mock data is readable and reusable
- you can update data without touching test logic
- your repo looks more professional

---

## Recommended pattern: intercept → trigger → assert

1) Stub the request  
2) Trigger the UI action that makes the request  
3) Assert on UI and/or the request result

~~~js
cy.intercept("GET", "**/users*", { statusCode: 200, body: { users: [] } }).as("getUsers");
cy.contains("Load users").click();
cy.wait("@getUsers").its("response.statusCode").should("eq", 200);
cy.contains("No users").should("be.visible");
~~~

---

## What to mock in real QA work

- error responses (401/403/500)
- empty states (0 results)
- edge cases (very long names, missing fields)
- performance / slow responses (later: delay)
- consistent datasets for screenshot tests

---

## Why this matters for testers

- Faster and more stable tests (backend changes won’t break your UI tests).
- You can test scenarios not available in real environments.
- Perfect for CI pipelines (predictable + offline-friendly).
- Great for negative testing (error handling, validation messages).

---

## Common mistakes / gotchas

- Creating intercept after the action:
  - Always intercept **before** clicking/typing that triggers the request.
- Matching the wrong URL pattern:
  - Use wildcards like `**/users*` and confirm in runner.
- Stubbing but still expecting real backend data:
  - If you stub, the UI will only see your mocked response.
- Not waiting when needed:
  - Sometimes you still need `cy.wait("@alias")` to sync before UI assertions.
