
const {
  Given,
  When,
  Then,
  Before,
  After,
} = require('@badeball/cypress-cucumber-preprocessor');

// Hooks for this feature file
Before(() => {
  // This runs before each Scenario in this file
  cy.log('Starting scenario (Cucumber Before hook)');
});

After(() => {
  // This runs after each Scenario in this file
  cy.log('Finished scenario (Cucumber After hook)');
});

// Shared Given from Background
Given('I am on the Actions page', () => {
  cy.visit('https://example.cypress.io');
  cy.get('.home-list').contains('a', 'Actions').click();
  cy.url().should('include', '/commands/actions');
});

// Steps used in scenarios

Then('the email field should be visible', () => {
  cy.get('.action-email').should('be.visible');
});

When('I type {string} into the email field', (email) => {
  cy.get('.action-email').clear().type(email);
});

Then('the email field should contain {string}', (expectedEmail) => {
  cy.get('.action-email').should('have.value', expectedEmail);
});

// ========================================
// TODO PRACTICE - YOUR TURN
// ========================================
//
// 1) Add a new Scenario in actions-background-and-tags.feature:
//    Tag it with @smoke @regression, for example:
//
//    @smoke @regression
//    Scenario: Check disabled-looking input is interactable
//      Then the disabled-looking input should accept text
//
// 2) Implement matching step here:
//
// Then('the disabled-looking input should accept text', () => {
//   cy.get('.action-disabled')
//     .type('test via BDD', { force: true })
//     .should('have.value', 'test via BDD');
// });
//
// 3) Add another scenario with a new tag, e.g. @negative,
//    and assert a condition that should NOT be true
//    (like checking that a field does not have some value).
//
// 4) In Cypress runner, observe tags shown next to scenarios.
//    In CI or CLI, tags can be used to filter which scenarios run
//    (for example running only @smoke later).


