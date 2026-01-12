
describe('Step 21 - Stub responses with cy.intercept', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/network-requests');
  });

  it('stubs GET /comments', () => {
    cy.intercept('GET', '**/comments/*', {
      statusCode: 200,
      body: { name: 'Mock response from Cypress' }
    }).as('mockedGet');

    cy.contains('Get Comment').click();

    cy.wait('@mockedGet').then((res) => {
      expect(res.response.statusCode).to.equal(200);
      expect(res.response.body.name).to.equal('Mock response from Cypress');
    });
  });

  it('stubs POST /comments with custom body', () => {
    cy.intercept('POST', '**/comments', {
      statusCode: 201,
      body: { id: 123, text: 'POST created via mock' }
    }).as('mockedPost');

    cy.contains('Post Comment').click();

    cy.wait('@mockedPost').its('response.body').should((body) => {
      expect(body.text).to.equal('POST created via mock');
    });
  });

  it('stubs PUT request and simulates error', () => {
    cy.intercept('PUT', '**/comments/*', {
      statusCode: 500,
      body: { error: 'Server exploded!' }
    }).as('errorPut');

    cy.contains('Update Comment').click();

    cy.wait('@errorPut')
      .its('response.statusCode')
      .should('eq', 500);
  });
});

// ========================================
// FIXTURE DEMO
// ========================================

describe('Step 21 - Using fixtures in intercept', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/network-requests');
  });

  it('returns body from fixture file', () => {
    cy.fixture('mock-comment.json').then((mockBody) => {
      cy.intercept('GET', '**/comments/*', mockBody).as('fixtureGet');
    });

    cy.contains('Get Comment').click();

    cy.wait('@fixtureGet')
      .its('response.body')
      .should('have.property', 'name');
  });
});

// ========================================
// TODO PRACTICE - YOUR TURN
// ========================================

describe('Intercept stubbing practice', () => {

  // TODO:
  // 1) Create a fixture named "custom-comment.json"
  //    with fields like:
  //    { "name": "My fixture user", "status": "ok" }

  // 2) Intercept GET request using fixture:
  //    cy.fixture('custom-comment.json').then(...)
  //    cy.intercept('GET', '**/comments/*', fixtureData)

  // 3) Trigger "Get Comment" click

  // 4) Assert on:
  //    - response.body.name === your fixture name

  // BONUS:
  // Stub a POST request to return 400 and assert negative scenario
});