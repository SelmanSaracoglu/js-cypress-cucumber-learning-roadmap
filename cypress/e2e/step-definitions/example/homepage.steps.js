
const { Given, When, Then } = require ('@badeball/cypress-cucumber-preprocessor');

Given('I open the Cypress example page', () => {
    cy.visit('https://example.cypress.io');
});

Then('I should see the Kitchen Sink text', () => {
    cy.contains('Kitchen Sink').should('be.visible');
});


// ========================================
// TODO PRACTICE - YOUR TURN
// ========================================
//
// 1) Add a new Scenario into homepage.feature, for example:
//
//   Scenario: Check page title
//     Given I open the Cypress example page
//     Then the document title should contain Cypress
//
// 2) Implement matching step in homepage.steps.js:
//
// Then('the document title should contain Cypress', () => {
//   cy.title().should('contain', 'Cypress');
// });
//
// 3) Run only this feature in Cypress runner.
//
// 4) Later you can add more steps, like:
//    - When I click on the "Actions" link
//    - Then I should be on the Actions page
//
// and map them to cy.get(...).contains(...).click() + URL assertions.


