describe('Step 20 - cy.intercept basics', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/network-requests');
    cy.url().should('include', '/commands/network-requests');
  });

  it('spies GET request and waits for response', () => {
    // watch GET /comments/*
    cy.intercept('GET', '**/comments/*').as('getComment');

    // trigger request by clicking the button
    cy.contains('Get Comment').click();

    // wait for request to complete
    cy.wait('@getComment')
      .its('response.statusCode')
      .should('eq', 200);
  });

  it('spies POST request and checks status', () => {
    cy.intercept('POST', '**/comments').as('createComment');

    cy.contains('Post Comment').click();

    cy.wait('@createComment')
      .its('response.statusCode')
      .should('eq', 201);
  });

  it('spies PUT request and inspects body', () => {
    cy.intercept('PUT', '**/comments/*').as('updateComment');

    cy.contains('Update Comment').click();

    cy.wait('@updateComment').then((res) => {
      expect(res.response.statusCode).to.equal(200);
      expect(res.response.body).to.have.property('name');
    });
  });

});

// ========================================
// TODO PRACTICE - YOUR TURN
// ========================================
describe('Intercept practice', () => {

  // TODO:
  // 1) Visit https://example.cypress.io/commands/network-requests
  // 2) Intercept a request of your choice:
  //    GET /comments/*
  //    POST /comments
  //    PUT /comments/*
  // 3) Wait for the alias
  // 4) Assert on:
  //    - status code
  //    - optionally body properties

  // Bonus:
  // Inspect interception.request.body
  // if using POST or PUT

  // Structure:
  //
  // cy.intercept('METHOD', 'URL').as('alias')
  // cy.action_that_triggers_request()
  // cy.wait('@alias').its('response.statusCode').should('eq', ...)
});