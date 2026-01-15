
## Cucumber DataTables (Cleaner Inputs for Cypress BDD)

DataTables are a Gherkin feature that lets you pass structured data (tables) into a step.
They are perfect for:
- form inputs (login, register, address)
- multiple fields in one action step
- readable test data in the feature file

Use DataTables to reduce:
- step explosion (too many small steps)
- duplicated steps for each field
- noisy Scenario Outlines when you just need one dataset

---

## 1) When to use DataTables vs Examples

### Use Scenario Outline + Examples when:
- you want to run the **same scenario multiple times**
- you need multiple datasets (valid/invalid combinations)

### Use DataTables when:
- you want to pass **one structured dataset** to a step
- you need multiple fields (email, password, firstName, lastName)
- readability matters more than repeated execution

---

## 2) Common DataTable shapes

### A) Two-column table (key/value) – most common for forms
~~~gherkin
When I fill the login form with:
  | email    | test@test.com |
  | password | 123456        |
~~~

In step definitions you read it as an object:
~~~js
When("I fill the login form with:", (dataTable) => {
  const data = dataTable.rowsHash(); // { email: "...", password: "..." }
});
~~~

### B) Header table (rows) – good for lists
~~~gherkin
Then I should see users:
  | name  | role   |
  | Ali   | tester |
  | Ayse  | admin  |
~~~

Read as array of objects:
~~~js
Then("I should see users:", (dataTable) => {
  const rows = dataTable.hashes(); // [ { name: "Ali", role: "tester" }, ... ]
});
~~~

---

## 3) Practical DemoWebShop usage (login)

Feature:
~~~gherkin
When I attempt login with:
  | email    | wrong@wrong.com |
  | password | wrongpass       |
Then I should see a login error message
~~~

Step definition idea:
- map table keys to selectors:
  - email → `#Email`
  - password → `#Password`

---

## 4) Traceability (MDR)

DataTables do not change MDR rules.
You still enforce:
- Automation ID in scenario name: `AUT-### | ...`
- Requirement tag: `@US-...` / `@AC-...`
- Pack tags: `@smoke @regression`
- Type tags: `@ui @negative`

Example:
~~~gherkin
@US-LOGIN-DSHOP-002 @smoke @ui @negative
Scenario: AUT-030 | DemoWebShop invalid login using DataTable
  Given I am on the DemoWebShop login page
  When I attempt login with:
    | email    | wrong@wrong.com |
    | password | wrongpass       |
  Then I should see a DemoWebShop login error message
~~~

Traceability table example:

| Req/US/AC ID | Feature | Scenario | Automation ID | Tags | Evidence |
|---|---|---|---|---|---|
| US-LOGIN-DSHOP-002 | DemoWebShop Login | invalid login using DataTable | AUT-030 | @smoke @ui @negative | Cypress runner screenshot/video |

---

## Why this matters for testers

- You can model real test cases with clean, readable inputs.
- You avoid step spaghetti (one step can fill multiple fields).
- Feature files look like a real test case spec (table-driven).
- Faster authoring of negative/edge cases (edit table, not code).

---

## Common mistakes / gotchas

- Using the wrong DataTable parsing method:
  - key/value table → `rowsHash()`
  - header rows table → `hashes()`
- Key mismatch:
  - table keys must match what your code expects (e.g., `email` vs `Email`)
- Overloading one step with too many fields:
  - keep table focused (form fields only)
- Mixing DataTable + Scenario Outline unnecessarily:
  - if you need many datasets, prefer Examples.
  
---

## Missing but important

### Prefer stable selector mapping
Keep a simple mapping inside step definitions (or helper functions) so your step does not become messy.
Example concept:
- `email` → `#Email`
- `password` → `#Password`
This keeps the DataTable clean and the step maintainable.
