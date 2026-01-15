## Network Requests with cy.intercept() (Spy Mode)

`cy.intercept()` lets Cypress observe (spy on) network traffic so you can:
- wait for requests reliably (no `cy.wait(3000)` guessing)
- confirm the backend call happened
- assert on request/response data (status, body, headers, etc.)

This is one of the biggest upgrades that makes UI tests stable.

---

## What cy.intercept() does (today: spying)

In **spy mode**, Cypress:
- watches matching requests
- does NOT change the response (real backend still responds)

Basic pattern:

~~~js
cy.intercept("GET", "**/search*").as("searchRequest");
cy.get('input[name="q"]').type("computer");
cy.get('input[value="Search"]').click();
cy.wait("@searchRequest");
~~~

---

## Why intercept is needed (the flaky vs stable difference)

### Bad (flaky + slow)
~~~js
cy.get("button").click();
cy.wait(3000);
~~~

### Good (reliable + fast)
~~~js
cy.intercept("POST", "**/addproducttocart/**").as("addToCart");
cy.contains("Add to cart").click();
cy.wait("@addToCart");
~~~

Benefits:
- no magic waits
- retries are handled by Cypress
- you prove the backend call actually happened

---

## Aliasing network calls

You almost always alias an intercept:

~~~js
cy.intercept("GET", "**/search*").as("search");
cy.wait("@search");
~~~

Rules:
- `.as("name")` creates the alias
- `cy.wait("@name")` waits for that request to happen

---

## Inspecting the interception object

`cy.wait()` yields an **interception** object with:
- `request` (method, url, headers, body)
- `response` (statusCode, headers, body)
- timing info

Example status assertion:

~~~js
cy.wait("@search").then((interception) => {
  expect(interception.response.statusCode).to.equal(200);
});
~~~

Shortcut style:

~~~js
cy.wait("@search")
  .its("response.statusCode")
  .should("eq", 200);
~~~

---

## Common patterns you will use

### 1) Wait + assert status
~~~js
cy.wait("@alias").its("response.statusCode").should("eq", 200);
~~~

### 2) Assert request URL contains expected query
~~~js
cy.wait("@alias").its("request.url").should("include", "q=computer");
~~~

### 3) Assert response body shape (when it’s JSON)
~~~js
cy.wait("@alias").its("response.body").should("have.property", "count");
~~~

Note: Many classic web apps return HTML pages, not JSON. In that case, you still can assert:
- request URL
- status code
- that the request occurred
- follow-up UI state

---

## Spy vs Stub (important distinction)

- **Spy**: observe only, real backend responds.
- **Stub**: provide a fake response (mock) from Cypress.

Today’s topic is **Spy only**. Stubbing comes next.

---

## Why this matters for testers

- Removes flaky timing problems (no guessing waits).
- Makes tests faster and more deterministic.
- Gives evidence: “button click triggered the correct API call”.
- Enables deeper validation of backend behavior from UI tests.
- Essential for modern Cypress workflows (especially with `cy.intercept` + `wait` + assertions).

---

## Common mistakes / gotchas

- Setting `cy.intercept()` **after** the action that triggers the request:
  - You must intercept first, then click/type.
- Matching the wrong URL pattern:
  - Use wildcards like `**/search*` and confirm via Cypress runner logs.
- Expecting JSON body for requests that return HTML:
  - In such cases, assert status + URL + UI outcome instead.
- Using `cy.wait(3000)` even though intercept is available:
  - prefer alias waits.
