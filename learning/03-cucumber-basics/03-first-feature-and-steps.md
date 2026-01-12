
# Step 25 - First Feature and Step Definitions

## Goal 
Create:
- first .feature file (Gherkin)
- first step definition file
- connect Given / When / Then to Cypress commands

We start simple:
- open example Cypress site
- assert that homepage is visible

## 1. Basic Gherkin structure

Feature file uses:
- Feature: high-level description
- Scenario: single test case
- Given: initial state
- When: action
- Then: expected result

Example idea:
- Given I open the Cypress example page
- Then I should see "Kitchen Sink" text

## 2. Folder structure for this step --> We follow this pattern:

cypress/
  e2e/
    features/
      example/
        homepage.feature
    step-definitions/
      example/
        homepage.steps.js

## 3. Step text must match exactly --> If feature has:

Given I open the Cypress example page
Then step definition must use the same string:
    Given('I open the Cypress example page', () => { ... })

If the text does not match, Cucumber will mark step as undefined.

## 4. Mapping steps to Cypress commands --> We connect human-readable steps to Cypress:

- Given = setup / visit
- When = user actions (click, type)
- Then = assertions (should / and)

Example:
- Given I open the homepage  -> cy.visit(...)
- Then I should see some text  -> cy.contains(...).should(...)

## 5. Summary

After this step you will have:
- a working .feature scenario
- step definition file
- Cucumber + Cypress integration confirmed

Next steps:
- add more scenarios
- use Scenario Outline
- reuse steps across features
