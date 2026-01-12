

// Step 15 - Cypress Selectors
// Goal: Practice cy.get() and cy.contains() selectors

describe('Selectors Practice', () => {

  it('Finds elements using get and contains', () => {
    cy.visit('https://example.cypress.io');

    // find element by tag
    cy.get('h1').should('contain', 'Kitchen Sink');

    // find by class name
    cy.get('.home-list').should('be.visible');
    cy.get('.container').should('be.visible')

    // find by text directly
    cy.contains('Utilities').should('be.visible');

    // combine get + contains
    cy.get('.dropdown-menu').contains('Cypress.Screenshot').should('exist');

    cy.get('#query-btn').should('exist')

  });

});
