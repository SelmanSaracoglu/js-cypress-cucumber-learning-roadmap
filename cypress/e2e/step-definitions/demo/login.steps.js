const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the demo login page', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.url().should('include', '/login');
});

When(
  'I login with username {string} and password {string}',
  (username, password) => {
    cy.get('#username').clear().type(username);
    cy.get('#password').clear().type(password);
    cy.get('button[type="submit"]').click();
  }
);

Then('the login result should be {string}', (result) => {
  if (result === 'success') {
    cy.url().should('include', '/secure');
    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
  } else if (result === 'failure') {
    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('be.visible')
      .and('match', /Your (username|password) is invalid!/);
  } else {
    throw new Error('Unknown result type: ' + result);
  }
});


// ========================================
// TODO PRACTICE - YOUR TURN
// ========================================
//
// 1) Extend the Examples table in login.feature with at least 2 more rows:
//    - empty username, valid password -> failure
//    - valid username, empty password -> failure
//
// 2) Add a new Scenario (not Outline) that checks only the "happy path":
//
//    Scenario: Successful login shows secure content
//      Given I am on the demo login page
//      When I login with username "tomsmith" and password "SuperSecretPassword!"
//      Then the login result should be "success"
//
// 3) Create another Then step:
//
//    Then('an error message should be displayed', () => {
//      cy.get('#flash')
//        .should('be.visible')
//        .and('contain', 'Your');
//    });
//
//    and create one Scenario that explicitly uses it:
//
//    Scenario: Invalid login shows error message
//      Given I am on the demo login page
//      When I login with username "wrong" and password "wrong"
//      Then an error message should be displayed
//
// 4) Run the feature in Cypress runner and watch how each Examples row becomes its own test.