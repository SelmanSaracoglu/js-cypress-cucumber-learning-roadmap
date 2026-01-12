
describe('Step 19 - Aliases and cy.wrap', () => {

  // Use Actions page again for practice
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
    cy.get('.home-list').contains('a', 'Actions').click();
    cy.url().should('include', '/commands/actions');
  });

  it('creates an alias for email input and reuses it', () => {
    // create alias
    cy.get('.action-email')
      .as('emailInput');

    // use alias to type and assert
    cy.get('@emailInput')
      .type('alias@test.com')
      .should('have.value', 'alias@test.com');

    // reuse alias again
    cy.get('@emailInput')
      .clear()
      .type('second@test.com')
      .should('have.value', 'second@test.com');
  });

  it('uses alias for a group of elements and checks length', () => {
    // alias for all checkboxes
    cy.get('.action-checkboxes [type="checkbox"]')
      .as('checkboxes');

    // check count using its + wrap
    cy.get('@checkboxes')
      .its('length')
      .then((len) => {
        cy.wrap(len).should('be.greaterThan', 0);
      });

    // use alias again to interact
    cy.get('@checkboxes')
      .first()
      .check()
      .should('be.checked');
  });

  it('wraps a plain JS object and asserts properties', () => {
    const user = {
      name: 'Test User',
      role: 'QA Engineer',
      active: true
    };

    cy.wrap(user)
      .should('have.property', 'name', 'Test User')
      .and('have.property', 'role', 'QA Engineer')
      .and('have.property', 'active', true);
  });

});

// ========================================
// TODO PRACTICE - YOUR TURN
// ========================================

describe('Aliases and wrap - practice', () => {

  // TODO:
  // 1) Use beforeEach to visit https://example.cypress.io
  //    and open any example page (Assertions, Actions, etc.)

  // 2) Create an alias for a commonly used element on that page
  //    Example:
  //    cy.get('.some-selector').as('myElement')

  // 3) In at least 2 tests, reuse that alias with cy.get('@myElement')
  //    and perform different assertions or actions.

  // 4) Create a simple JS object (for example: testData with keys like url, status)
  //    and use cy.wrap(testData) to assert its properties.

  // Hint structure:
  //
  // beforeEach(() => {
  //   cy.visit('https://example.cypress.io');
  //   cy.get('.home-list').contains('a', 'YOUR PAGE').click();
  // });
  //
  // it('reuses an alias', () => {
  //   cy.get('.your-selector').as('aliasName');
  //   cy.get('@aliasName').should(...);
  // });
  //
  // it('wraps a JS object', () => {
  //   const data = { ... };
  //   cy.wrap(data).should('have.property', '...');
  // });

});
