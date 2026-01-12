
# Step 19 - Aliases and cy.wrap

## Goal
- Reuse elements and data in Cypress tests
- Use aliases with .as()
- Use cy.wrap() to work with plain values in Cypress chains

## What is an alias?

An alias is a named reference to:
- a DOM element
- a network request
- some test data

We create aliases with `.as('name')` and access them with:
- `cy.get('@name')` for elements or data
- `cy.wait('@name')` for network requests

Aliases help to:
- avoid repeating the same selectors
- keep tests readable
- organize complex flows

## Basic element alias example

cy.get('.action-email')
  .as('emailInput')

cy.get('@emailInput')
  .type('alias@test.com')
  .should('have.value', 'alias@test.com')

Here:
- `.as('emailInput')` creates alias
- `cy.get('@emailInput')` retrieves the same element again

## Why not just store in a variable?

// This is NOT reliable in Cypress:
let emailInput;
cy.get('.action-email').then(($el) => {
  emailInput = $el;
});

Because Cypress commands are async and queued:
- simple JS variables lose sync with Cypress chain
- alias + cy.get('@alias') stays inside Cypress command chain

## What is cy.wrap()?

`cy.wrap()` converts a non-Cypress value into a Cypress chainable.

Use cases:
- work with plain JS objects
- pass values into Cypress chains
- make assertions on non-DOM data

const user = { name: 'John', role: 'tester' };

cy.wrap(user)
  .should('have.property', 'name', 'John');

You can also wrap values inside .then:

cy.get('.assertion-table tr').its('length').then((len) => {
  cy.wrap(len).should('be.greaterThan', 1);
});

## Combining aliases with wrap

- Use alias for elements you will reuse
- Use wrap for values you want to assert or chain further

Example:

cy.get('.assertion-table tr')
  .as('rows');

cy.get('@rows')
  .its('length')
  .then((len) => {
    cy.wrap(len).should('be.greaterThan', 1);
  });

## Best practices

- Give clear alias names:
  - '@emailInput', '@loginForm', '@userData'
- Use aliases to avoid repeating complex selectors
- Prefer aliases over manual JS variables for DOM elements
- Use cy.wrap() when you need:
  - to assert plain values
  - to continue chaining in Cypress style

## Key takeaway

- `.as()` -> name something
- `cy.get('@alias')` -> retrieve it
- `cy.wrap(value)` -> pull normal values into Cypress chains
