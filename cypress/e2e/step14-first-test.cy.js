// Step 14 - First Cypress Test
// Goal: Open a website and assert that it loads.

// describe groups tests
describe('My First Cypress Test', () => {

  // it defines a single test scenario
  it('Visits the example website', () => {
    // 1) open the webpage
    cy.visit('https://example.cypress.io');

    // 2) assert that page loaded by checking text
    cy.contains('Kitchen Sink').should('be.visible');

    // 3) extra assertion: URL includes "cypress"
    cy.url().should('include', 'cypress' );
  });

});
