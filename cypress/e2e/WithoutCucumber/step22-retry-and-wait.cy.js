
describe('Step 22 - Retry logic and proper waiting', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/network-requests');
  });

  it('uses retry on DOM element becoming visible', () => {
    cy.contains('Get Comment').click();

    cy.get('.network-comment')
      .should('be.visible')  // auto-retry
      .and('contain', 'Comment');
  });

  it('waits for network call instead of fixed wait', () => {
    cy.intercept('GET', '**/comments/*').as('getComment');

    cy.contains('Get Comment').click();

    cy.wait('@getComment')
      .its('response.statusCode')
      .should('eq', 200);

    cy.get('.network-comment')
      .should('contain', 'laudantium');
  });

  it('demonstrates should() retry vs then()', () => {
    cy.contains('Post Comment').click();

    // will retry until body text appears
    cy.get('.network-post')
      .should('contain', 'POST')
      .and('be.visible');

    // then() does NOT retry
    cy.get('.network-post').then(($el) => {
      expect($el.text()).to.contain('POST');
    });
  });

});

// ========================================
// TODO PRACTICE - YOUR TURN
// ========================================
describe('Retry practice', () => {

  // TODO:
  // 1) Visit network-requests page
  // 2) Intercept any request
  // 3) Trigger button click
  // 4) Assert using ONLY should()
  //    to see auto-retry work
  //
  // Bonus:
  // Add a failing assertion first
  // Watch Cypress retry visually
});

