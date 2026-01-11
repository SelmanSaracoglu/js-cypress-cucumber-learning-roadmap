describe('Assertions Demo', () => {

  it('Navigates to Assertions page and validates title', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.home-list').contains('a', 'Assertions').click();

    cy.url().should('include', '/commands/assertions');

    cy.get('h1')
      .should('be.visible')
      .and('have.text', 'Assertions');
  });

  it('Checks visibility, text and attributes', () => {
    cy.visit('https://example.cypress.io/commands/assertions');

    cy.get('.assertion-table')
      .should('be.visible')
      .and('have.class', 'table');

    cy.get('.assertion-table tr')
      .eq(1)
      .should('contain', 'Row 1');

    cy.get('.assertion-table a')
      .first()
      .should('have.attr', 'href');
  });

  it('Uses positive and negative assertions', () => {
    cy.visit('https://example.cypress.io/commands/assertions');

    cy.get('.assertions-ul')
      .should('exist')
      .and('be.visible');

    cy.get('#loading').should('not.exist');
  });

  // ==============================
  // TODO PRACTICE
  // ==============================
  it('Custom practice assertions', () => {
    cy.visit('https://example.cypress.io/commands/assertions');

    // TODO 1: Find "Chai" and assert visible + contain

    // TODO 2: Find a button and assert: visible, enabled, class exists

    // TODO 3: Find an input, type text, assert have.value

    // BONUS: Write a negative assertion (not.exist / not.have.class)
  });

});