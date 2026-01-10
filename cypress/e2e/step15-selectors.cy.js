

// Step 15 - Cypress Selectors
// Goal: Practice cy.get() and cy.contains() selectors

describe('Selectors Practice', () => {

  it('Finds elements using get and contains', () => {
    cy.visit('https://example.cypress.io');

    // find element by tag
    cy.get('h1').should('contain', 'Kitchen Sink');

    // find by class name
    cy.get('.home-list').should('be.visible');

    // find by text directly
    cy.contains('Utilities').should('be.visible');

    // combine get + contains
    cy.get('.dropdown-menu').contains('Cypress.Screenshot').should('exist');
  });

// TODO: Add 3 more selectors from example list:
// - Select by ID
// - Select by attribute
// - Assert that button contains text
//
// Example ideas:
//
// cy.get('#dropdown-menu').should('exist')
// cy.get('[href="/commands/querying"]').click()
// cy.contains('Commands').should('be.visible')


});
