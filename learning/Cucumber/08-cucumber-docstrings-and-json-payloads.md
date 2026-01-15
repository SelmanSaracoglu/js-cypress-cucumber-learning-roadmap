
## Cucumber DocStrings (Multi-line Text, JSON Payloads)

DocStrings let you write multi-line text blocks in `.feature` files.
They are perfect for:
- API request payloads (JSON)
- long expected messages
- templates and multi-line UI content

DocStrings reduce messy steps like:
- passing long strings as parameters
- escaping quotes everywhere
- storing “small payloads” in fixtures when you want readability in Gherkin

---

## 1) What a DocString looks like

A DocString is written using triple quotes:

~~~gherkin
When I send this JSON payload:
  """
  {
    "email": "test@test.com",
    "password": "123456"
  }
  """
~~~

In step definitions, you receive it as a **string**.

---

## 2) Reading DocStrings in step definitions

Most common: treat it as string and parse JSON.

~~~js
When("I send this JSON payload:", (docString) => {
  const payload = JSON.parse(docString);
});
~~~

Important:
- DocString arrives as a plain string
- you decide how to interpret it (JSON, plain text, etc.)

---

## 3) Using DocStrings for API tests (Cypress cy.request)

Even in a UI-focused repo, this pattern is valuable.

Feature:
~~~gherkin
When I send a POST request to "/api/login" with body:
  """
  { "email": "a@a.com", "password": "123456" }
  """
Then the response status should be 200
~~~

Step definition idea:
- parse JSON
- use `cy.request({ method, url, body })`
- assert status and body fields

---

## 4) Using DocStrings for expected UI messages

Feature:
~~~gherkin
Then I should see the following message:
  """
  Login was unsuccessful. Please correct the errors and try again.
  """
~~~

Step definition:
- compare using `contain` (not strict equality)
- avoid failing on whitespace differences

---

## 5) Traceability (MDR)

DocStrings do not change traceability rules.
Keep:
- `AUT-###` in scenario name
- requirement tags: `@US-...` / `@AC-...`
- suite/type tags: `@smoke @regression @api @ui @negative`

Evidence:
- runner logs + screenshots/videos
- if API scenario: CI output + request/response assertions

Traceability table example:

| Req/US/AC ID | Feature | Scenario | Automation ID | Tags | Evidence |
|---|---|---|---|---|---|
| US-API-001 | API payload validation | POST payload accepted | AUT-034 | @api @regression | CI logs + assertions |

---

## Why this matters for testers

- Lets you express realistic payloads in BDD (super common in interviews).
- Makes scenarios readable and self-contained.
- Reduces step explosion by passing structured content in one step.
- Helps you test negative payloads without creating many fixtures.

---

## Common mistakes / gotchas

- Invalid JSON formatting (missing commas/quotes) → `JSON.parse()` fails.
- Using DocStrings for huge payloads:
  - for large data, prefer fixtures.
- Overly strict message asserts:
  - UI messages may include extra whitespace or formatting.
- Confusing DataTables vs DocStrings:
  - DataTables: structured table rows/columns
  - DocStrings: multi-line text (often JSON)

---

## Missing but important

### Defensive JSON parsing
In real projects, you may want explicit failure messages if JSON.parse fails.
For learning, keep it simple, but remember this is a common source of test failures.
