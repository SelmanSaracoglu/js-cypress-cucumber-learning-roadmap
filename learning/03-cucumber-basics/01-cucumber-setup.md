# Step 23 - Preparing Cypress for Cucumber (BDD)

## Goal
Set up Cypress to support:
- .feature files
- Given / When / Then step definitions
- Gherkin syntax

## What changes with BDD?

### BEFORE (classic style)
it('logs in successfully', () => {
  cy.visit('/login');
  cy.get('#email').type('test@test.com');
  cy.get('#password').type('123');
  cy.contains('Login').click();
});

### AFTER (Cucumber style)
Given I am on login page
When I type my credentials
Then I should be logged in

**Required packages** --> We will use: @badeball/cypress-cucumber-preprocessor

Why we choose this package?
- supports latest Cypress (10+)
- stable
- official docs match current Cypress structure

**Folder structure for BDD** --> Your project will use:

cypress/
  e2e/
    *.feature               --> Feature files → readable BDD 
    step-definitions/       --> Step Definition files → bridge between Gherkin and Cypress
      *.js

**Key Concepts**
### Feature File (.feature) --> Plain English test scenarios using:
- Feature
- Scenario
- Given / When / Then

### Step Definitions --> JavaScript functions that execute steps.
Example:
Given('I visit the homepage', () => {
  cy.visit('/');
});

### Matching logic --> Steps match EXACT text from .feature files.

**Before integration**
- Cypress structure ready
- Folder naming clarified
- Next step installs dependencies

**Key takeaway**
Cucumber allows:
- business-readable tests
- separation of intent vs implementation
- better collaboration with non-devs


