# Step 20 - Network Requests with cy.intercept()

## Goal
Understand how to:
- observe network calls
- wait for responses reliably
- assert on request/response data

This helps stabilize tests and validate backend calls.

## What is cy.intercept()?

`cy.intercept()` allows Cypress to:
- watch (spy) requests to an endpoint
- wait for them
- assert on them
- stub/mock responses (later steps)

Syntax: cy.intercept(method, url).as(aliasName)

Example: cy.intercept('GET', '/users').as('getUsers')

## Why intercept is needed?

Bad approach:
    cy.get('button').click()
    cy.wait(3000)   // flaky + slow

Correct approach:
    cy.intercept('GET', '/users').as('getUsers')
    cy.get('button').click()
    cy.wait('@getUsers')

Benefits:
- reliable
- faster tests
- no magic waits
- proves backend call triggered

## Inspecting response

cy.wait('@getUsers').then((interception) => {
  expect(interception.response.statusCode).to.equal(200)
})

Interception object contains:
- request URL
- method
- payload
- response body
- status

## Spy vs Stub (today = spy only)

Spy:
- listen only
- backend still returns real data

Stub:
- fake response
- Cypress returns our custom data
- (Covered in Step 21)

## Common usage patterns

### Spy request
    cy.intercept('GET', '/api/items').as('items')
    cy.wait('@items')

### Spy request + assert status
    cy.wait('@items').its('response.statusCode').should('eq', 200)

### Spy + assert body values
    cy.wait('@items').its('response.body')
        .should('have.property', 'count')

## Key takeaway
- Use intercept to wait for requests safely
- Never use arbitrary waits
- Network waits make UI tests reliable


