
describe('Hooks and Test Setup Demo - Assertions page', () => {

  // This hook runs BEFORE EACH test in this describe block
  beforeEach(() => {
    cy.visit('https://example.cypress.io');

    cy.get('.home-list')
      .contains('a', 'Assertions')
      .click();

    cy.url().should('include', '/commands/assertions');
  });

  it('checks page title using setup from beforeEach', () => {
    cy.get('h1')
      .should('be.visible')
      .and('have.text', 'Assertions');
  });

  it('checks that the main list is visible', () => {
    cy.get('.assertions-ul')
      .should('exist')
      .and('be.visible');
  });

  it('checks that assertion table has at least one row', () => {
    cy.get('.assertion-table tr')
      .its('length')
      .should('be.greaterThan', 1);
  });

});

describe('Hooks and Test Setup Demo - Actions page', () => {

  // Here we show a second suite with its own beforeEach setup
  beforeEach(() => {
    cy.visit('https://example.cypress.io');

    cy.get('.home-list')
      .contains('a', 'Actions')
      .click();

    cy.url().should('include', '/commands/actions');
  });

  it('types into email field on Actions page', () => {
    cy.get('.action-email')
      .type('hooks@test.com')
      .should('have.value', 'hooks@test.com');
  });

  it('checks a checkbox on Actions page', () => {
    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .check()
      .should('be.checked');
  });

  it('selects a value from dropdown on Actions page', () => {
    cy.get('.action-select')
      .select('apples')
      .should('have.value', 'fr-apples');
  });

});

// ========================================
// TODO PRACTICE - YOUR TURN
// ========================================

describe('Hooks practice - your own refactor', () => {

  // TODO:
  // 1) Use beforeEach to visit https://example.cypress.io
  // 2) From the home page, navigate to any example (your choice)
  // 3) Add 2-3 tests that assume the page is already open
  //    thanks to beforeEach.

  // Example structure:
  //
  // beforeEach(() => {
  //   cy.visit('https://example.cypress.io');
  //   cy.get('.home-list').contains('a', 'YOUR PAGE HERE').click();
  // });
  //
  // it('does something on that page', () => {
  //   // your assertions...
  // });

});

