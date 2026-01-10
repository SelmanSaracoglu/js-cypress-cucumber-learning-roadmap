
## Why selectors matter
In UI automation, selecting the correct element is the most important skill.
If you cannot locate the element, you cannot:
- click it
- type into it
- assert that it is visible
- validate application behavior

Cypress provides multiple ways to locate elements.

## Main Selector Methods

### 1. cy.get(selector) --> Uses **CSS selectors** (preferred way).
Example selectors:
- Tag: `cy.get('h1')`
- Class: `cy.get('.button-primary')`
- ID: `cy.get('#login')`
- Attribute: `cy.get('[data-test="submit-btn"]')`
- Nested: `cy.get('.menu li a')`

### 2. cy.contains(text) --> Finds element by visible text.
Good for:
- Buttons
- Menu items
- Labels

Example: cy.contains('Login').click()


### 3. Combine get() + contains() --> Useful when multiple elements have similar text.
cy.get('.nav-menu').contains('Products').click()


---

## Best selector rules (Golden Rules)
1. Prefer **data-test** or **data-cy** attributes  
   Example: `[data-cy="login-btn"]`

2. Avoid fragile selectors like:
   - nth-child
   - dynamic classes
   - text that may change

3. Prefer stable identifiers:
   - id
   - class (if stable)
   - data-* attributes
   - ARIA roles

## Assertions to confirm element state
Common patterns:
cy.get('#btn').should('be.visible')
cy.get('.alert').should('contain', 'Success')
cy.contains('Submit').should('exist')
cy.get('input').should('have.value', 'admin')

## Why Cypress solves selector problems better
- Cypress automatically retries `cy.get()` until the element appears
- You do NOT need sleep() or waits
- In Selenium you must manage timeouts manually

## Summary
- cy.get() = most powerful selector method
- cy.contains() = easiest for visible text
- Good selectors make tests clean and stable
- Bad selectors cause flakiness (random failures)


