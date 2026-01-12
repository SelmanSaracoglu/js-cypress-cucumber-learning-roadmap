describe('Step 23 - Cucumber Preparation', () => {
  it('confirms we are still running Cypress successfully', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Kitchen Sink').should('exist');
  });
});

// No TODO practice yet - real work begins in Step 24