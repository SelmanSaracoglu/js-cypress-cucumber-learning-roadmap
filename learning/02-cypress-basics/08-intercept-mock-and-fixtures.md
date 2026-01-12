
# Step 21 - Mock responses using cy.intercept() and fixtures

## Goal
Learn how to:
- stub backend responses
- return fake data
- simulate success & error states
- use fixture files as test data

## Spy vs Stub (recap)

### Spy (Step 20)
Listen only:
    cy.intercept('GET', '/users').as('getUsers')

Backend sends real data.

### Stub (Step 21)
Override response:
    cy.intercept('GET', '/users', {users:[...]})

No backend call at all.

Stubbed tests are:
- faster
- stable
- offline-friendly
- predictable

## Basic stub
Return custom response:
    cy.intercept('GET', '**/comments/*', {
        statusCode: 200,
        body: { name: 'Mocked name from Cypress' }
    })

Benefits:
- UI still behaves normally
- response is controlled
- test is deterministic

## Mocking POST/PUT
Send fake server reply:
    cy.intercept('POST', '**/comments', {
        statusCode: 201,
        body: { id: 999, text: 'Created by mock' }
    })

Simulate errors:
    cy.intercept('POST', '**/comments', {
        statusCode: 500,
        body: { error: 'Server failed' }
    })

## Fixtures --> Fixtures store JSON in:
cypress/fixtures/example.json

Use in intercept:
    cy.fixture('myData.json').then((data) => {
        cy.intercept('GET', '/users', data);
    });

Fixture benefits:
- reusable data
- readable files
- editable without touching test code

## Pattern: intercept + click + assert
1. stub request  
2. trigger UI action  
3. wait or assert visually

## Key takeaways
- `intercept(...)` without function → spy backend
- `intercept(..., { body })` → stub backend
- fixtures keep mock data clean
- mocking enables:
  - edge case testing
  - offline testing
  - negative testing


