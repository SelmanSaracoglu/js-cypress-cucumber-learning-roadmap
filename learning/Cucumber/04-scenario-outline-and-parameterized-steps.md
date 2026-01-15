
## Scenario Outline and Parameterized Steps (Cypress + Cucumber)

Scenario Outline is how you run the **same scenario multiple times** with different data sets.
It is the BDD version of a “test case table”.

You will use:
- `Scenario Outline`
- `Examples` table
- parameterized step definitions like `{string}`, `{int}`

---

## Scenario vs Scenario Outline

### Scenario (single dataset)
Use when the data is fixed and you want a single flow.

~~~gherkin
Scenario: AUT-016 | Search for a single keyword
  Given I open the home page
  When I search for "computer"
  Then I should see search results
~~~

### Scenario Outline (multiple datasets)
Use when the **same behavior** should be tested with different input values.

~~~gherkin
Scenario Outline: AUT-017 | Search with different keywords
  Given I open the home page
  When I search for "<keyword>"
  Then I should see search results

  Examples:
    | keyword   |
    | computer  |
    | camera    |
    | laptop    |
~~~

Cucumber will run this scenario once per row.

---

## Parameterized steps (how placeholders become arguments)

In the `.feature` file:
- `<keyword>` is a placeholder replaced from the table.

In step definitions you capture values with types:

### {string} (most common)
~~~js
When('I search for "{string}"', (keyword) => {
  // use keyword
});
~~~

Other types:
- `{int}`: integers
- `{float}`: decimals
- `{word}`: one word only (use carefully)

Example with `{int}`:

~~~gherkin
Then I should see at least 1 product
~~`

~~~js
Then("I should see at least {int} product", (minCount) => {
  cy.get(".product-item").should("have.length.at.least", minCount);
});
~~~

---

## Reusability without step explosion

Goal:
- Write a few reusable steps
- Avoid writing a separate step for each input variation

Good:
- `When I search for "{string}"`
- `Then I should see search results`

Bad:
- `When I search for computer`
- `When I search for laptop`
- `When I search for camera`

---

## Traceability (MDR) with Scenario Outline

You still need:
- Automation ID
- Requirement ID
- Tags

For Scenario Outline:
- One Automation ID can represent multiple datasets (table rows).
- Evidence includes multiple executions (one per row).

Recommended convention:
- Keep **one AUT ID** for the outline
- Keep requirement tags on the outline

Example:

~~~gherkin
@US-SEARCH-002 @regression @ui
Scenario Outline: AUT-017 | Search with different keywords
  Given I open the home page
  When I search for "<keyword>"
  Then I should see search results

  Examples:
    | keyword   |
    | computer  |
    | camera    |
    | laptop    |
~~~

Traceability example:

| Req/US/AC ID | Feature | Scenario | Automation ID | Tags | Evidence |
|---|---|---|---|---|---|
| US-SEARCH-002 | Search | Search with different keywords | AUT-017 | @regression @ui | Runner results per Examples row |

---

## Why this matters for testers

- Matches real test design: equivalence classes and boundary testing.
- Turns one scenario into multiple test cases without duplication.
- Makes BDD files clean and reviewable.
- Encourages reusable steps and reduces maintenance.

---

## Common mistakes / gotchas

- Forgetting quotes:
  - If your step uses `{string}`, your feature input must be quoted: `"text"`.
- Step mismatch due to placeholder formatting:
  - `<keyword>` in feature must map to `"{string}"` in step definition step text.
- Too many Examples rows:
  - keep it meaningful (representative sets), not hundreds of inputs in UI tests.
- Using Scenario Outline when the flow changes:
  - If steps change per dataset, split into multiple scenarios instead.

---

## Missing but important

### DataTables vs Examples
- `Examples` is for running the same scenario multiple times.
- `DataTables` is for sending a table to one step (often used for forms).
We’ll cover DataTables in the next step for cleaner multi-field inputs.
