
describe('Step 24 - Cucumber setup sanity check', () => {
    it('still runs classic Cypress tests after Cucumber setup', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('Kitchen Sink').should('be.visible');
    });
});

