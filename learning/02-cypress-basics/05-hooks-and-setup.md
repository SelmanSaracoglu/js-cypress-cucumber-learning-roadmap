
## Hooks and Test Setup (before, beforeEach, afterEach, after)

## Goal --> Avoid repeating the same setup code in every test.
Use Cypress hooks to:
- prepare test state
- navigate to pages
- clean up when needed

## What are hooks? --> Hooks are special functions that run:
- once before all tests
- before each test
- after each test
- once after all tests

They live inside a `describe` block.

### Types:
- `before()`       -> runs once before ALL tests in the block
- `beforeEach()`   -> runs BEFORE EACH `it()` in the block
- `afterEach()`    -> runs AFTER EACH `it()` in the block
- `after()`        -> runs once after ALL tests in the block

## Why use hooks?
Without hooks:
- each test repeats:
  - `cy.visit(...)`
  - click same menu links
  - common assertions

This creates:
- duplicated code
- harder maintenance
- higher chance of mistakes

With `beforeEach()`:
- you write setup ONCE
- all tests start from same state
- tests become shorter and cleaner

## Example: without hooks

it('Test 1', () => {
  cy.visit('https://example.cypress.io');
  cy.get('.home-list').contains('a', 'Assertions').click();
  // assertions...
});

it('Test 2', () => {
  cy.visit('https://example.cypress.io');
  cy.get('.home-list').contains('a', 'Assertions').click();
  // other assertions...
});

The navigation is duplicated.

## Example: with beforeEach

describe('Assertions page tests', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io');
    cy.get('.home-list').contains('a', 'Assertions').click();
    cy.url().should('include', '/commands/assertions');
  });

  it('checks the title', () => {
    cy.get('h1').should('have.text', 'Assertions');
  });

  it('checks a list element', () => {
    cy.get('.assertions-ul').should('be.visible');
  });

});

Now:
- beforeEach runs before EVERY `it`
- each test starts on the Assertions page
- tests do not repeat navigation

## When to use which hook?

- `before()`:
  - use for "one-time" setup in the suite
  - example: seeding database via API

- `beforeEach()`:
  - most common in UI tests
  - open page, login, reset app state

- `afterEach()`:
  - cleaning state if needed
  - example: log out, clear local storage

- `after()`:
  - final clean up
  - usually not needed for simple Cypress UI tests

## Cypress-specific note

- Hooks are per spec file
- `beforeEach` does NOT share state between different spec files
- Each test should be independent:
  - one test fail should not break the next

## Best practices

- Put navigation and common setup in `beforeEach`
- Keep `it()` focused on actual assertions
- Do NOT put heavy logic inside tests if it can be shared
- Avoid sharing state between tests through variables unless really needed

## Key takeaway

Hooks help you:
- remove duplication
- keep tests readable
- start every test from known state

Most useful in daily Cypress work:
- `beforeEach`

