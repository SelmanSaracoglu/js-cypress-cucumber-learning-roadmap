const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the Actions page', () => {
  cy.visit('https://example.cypress.io');
  cy.get('.home-list').contains('a', 'Actions').click();
  cy.url().should('include', '/commands/actions');
});

When('I type {string} into the email field', (email) => {
  cy.get('.action-email')
    .clear()
    .type(email);
});

Then('the email field should contain {string}', (expectedEmail) => {
  cy.get('.action-email')
    .should('have.value', expectedEmail);
});

// ========================================
// TODO PRACTICE - YOUR TURN
// ========================================
//
// 1) In actions-email-outline.feature, add a second Scenario Outline:
//
//   Scenario Outline: Invalid emails in email field
//     When I type "<email>" into the email field
//     Then the email field should contain "<email>"
//
//     Examples:
//       | email      |
//       | abc        |
//       | invalid@   |
//       | @no-user   |
//
// (We still assert only the value, but in a real app you could check error messages.)
//
// 2) Add a new step in steps.js:
//
//   Then('the email field value length should be {int}', (len) => {
//     cy.get('.action-email')
//       .invoke('val')
//       .then((val) => {
//         expect(val.length).to.equal(len);
//       });
//   });
//
// 3) Create a small outline that checks length:
//
//   Scenario Outline: Email length check
//     When I type "<email>" into the email field
//     Then the email field value length should be <length>
//
//     Examples:
//       | email               | length |
//       | a@test.com          | 10     |
//       | longer@test.com     | 16     |
//
// 4) Run this feature via Cypress runner and observe how each row becomes a separate test.
