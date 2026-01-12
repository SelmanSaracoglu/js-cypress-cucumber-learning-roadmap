
# Step 26 - Scenario Outline and Parameterized Steps

## Goal
Use:
- Scenario Outline
- Examples table
- Parameterized step definitions

So we can test the same behavior with multiple data sets.

## Scenario vs Scenario Outline

### Scenario --> Fixed data, single flow.
Scenario: Valid email
  Given I am on the Actions page
  When I type "user@example.com" into the email field
  Then the email field should contain "user@example.com"

### Scenario Outline --> Same steps, different data from table.
Scenario Outline: Typing different emails
  Given I am on the Actions page
  When I type "<email>" into the email field
  Then the email field should contain "<email>"

  Examples:
    | email              |
    | user1@example.com  |
    | test@example.org   |

`<email>` is a placeholder that will be replaced with each row.

## Parameterized Steps 
Feature step:
    When I type "<email>" into the email field

Step definition:
    When('I type {string} into the email field', (email) => {
        cy.get('.action-email').clear().type(email);
    });

- `{string}` captures quoted text
- The captured value is passed as argument (`email`)

Other parameter types:
- `{int}` for integers
- `{float}` for float
- `{word}` for single words (advanced usage)

## Reusability --> You can reuse:
- same Given for multiple scenarios
- same When/Then with different examples

This reduces:
- duplication in feature files
- step explosion in JS

## Why this matters for QA
- One Scenario Outline = many test cases
- Test case design (equivalence classes, boundary values)
- Perfect for:
  - multiple input sets
  - valid + invalid data
  - role-based scenarios

## Key takeaway
Scenario Outline + parameterized steps:
- keep BDD files clean
- make tests data-driven
- mirror classic test-case tables
