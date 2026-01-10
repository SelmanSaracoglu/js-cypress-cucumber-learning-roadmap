// Step 16 - User Actions Test
// Goal: Navigate from home page to Actions example, then practice user actions
// All interactions happen on: https://example.cypress.io/commands/actions

describe('User Actions Demo', () => {

  it('Performs typing, clicking, checkbox and select actions on Actions page', () => {
    // 1) Start from main Cypress example page
    cy.visit('https://example.cypress.io');

    // 2) Click on the "Actions" example link inside the visible home list
    cy.get('.home-list').contains('a', 'Actions').click();

    // 3) Assert we are on the Actions page
    cy.url().should('include', '/commands/actions');

    // 4) TYPE into email field
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com');

    // 5) CLICK the Submit button inside the example form
    cy.contains('button', 'Submit').click();

    // 6) TYPE with special keys into a disabled-looking input (force: true)
    cy.get('.action-disabled')
      .type('Hello{selectall}Updated{backspace}', { force: true });

    // 7) CHECKBOXES: check and uncheck examples
    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .check()
      .should('be.checked');

    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .uncheck()
      .should('not.be.checked');

    // 8) SELECT dropdown inside Actions page (class: .action-select)
    cy.get('.action-select')
      .select('apples')
      .should('have.value', 'fr-apples');

    cy.get('.action-select')
      .select('oranges')
      .should('have.value', 'fr-oranges');

    // short sanity check at the end
    cy.get('.action-select').should('be.visible');
  });

});
