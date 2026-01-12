
# Step 27 - Background, Hooks and Tags

## Goal
Learn how to:
- use Background to avoid repeating common Given steps
- use Cucumber hooks (Before, After) per scenario
- use tags (@smoke, @regression) to mark scenarios

## Background --> Background runs BEFORE each Scenario in a feature file.

Instead of:
Scenario: A
  Given I am on the Actions page
Scenario: B
  Given I am on the Actions page

We use Background:
  Given I am on the Actions page
Scenario: A
  ...
Scenario: B
  ...

This keeps features:
- shorter
- easier to read
- less duplicated setup

## Hooks (Before / After) --> In step definitions we can use:
- `Before()`  -> runs before each Scenario
- `After()`   -> runs after each Scenario

Example:
const { Before, After } = require('@badeball/cypress-cucumber-preprocessor');

Before(() => {
  // runs before each scenario in this file
  cy.log('Starting scenario');
});

After(() => {
  // runs after each scenario in this file
  cy.log('Finished scenario');
});

Hooks are good for:
- logging
- resetting app state
- clean up actions

## Tags --> Tags are labels before Feature or Scenario:

@smoke
Scenario: Quick check for Actions page
  ...

Common tag names:
- @smoke
- @regression
- @critical
- @wip (work in progress)

Benefits:
- group scenarios
- mark priority
- later: run by tag in CI

## Combination
We can combine:
- Background for shared Given
- Hooks for technical setup/teardown
- Tags for test grouping

Result:
- clean feature file
- reusable steps
- clear test strategy

## Key takeaway
- Use Background to avoid repeating the same Given in every scenario.
- Use Before/After hooks in step definition files for cross-cutting concerns.
- Use tags to mark scenarios for smoke/regression suites.
