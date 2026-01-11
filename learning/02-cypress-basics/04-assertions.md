
# Step 17 - Assertions Deep Dive

## What are assertions?
Assertions verify that the application is behaving as expected.
They turn actions into validation.
Without assertions, tests always pass even with bugs.

## Why assertions matter
- Validate UI correctness
- Catch regressions
- Avoid false positives
- Make tests meaningful

## Main assertion syntax
### should()
cy.get('.alert').should('be.visible')

### and()
cy.get('.btn')
  .should('be.visible')
  .and('have.class', 'btn-primary')

## Assertion Categories

### 1. Visibility & Existence
be.visible  
exist  
not.exist  
be.hidden  

Examples:
cy.get('.alert').should('be.visible')
cy.get('#spinner').should('not.exist')


### 2. Text Assertions
contain      // partial text
have.text    // exact text
have.value   // input value

Examples:
cy.get('h1').should('have.text', 'Assertions')
cy.get('.info').should('contain', 'warning')
cy.get('#email').should('have.value', 'test@example.com')

### 3. Class & Attribute
have.class  
have.attr

Examples:
cy.get('.btn').should('have.class', 'btn-success')
cy.get('a').should('have.attr', 'href', '/home')

### 4. State Assertions
be.checked / not.be.checked  
be.enabled / be.disabled  
be.empty

Examples:
cy.get('#remember').should('be.checked')
cy.get('#submit').should('be.enabled')
cy.get('textarea').should('be.empty')


## Positive vs Negative Assertions

Positive:
cy.get('.success').should('be.visible')

Negative:
cy.get('.error').should('not.exist')

Negative validations confirm:
- loading removed
- modals closed
- errors fixed

## Chaining best practice
cy.get('.btn')
  .should('be.visible')
  .and('have.class', 'btn-primary')
  .and('not.be.disabled')


## Key Takeaways
- Always assert state
- contain ≠ have.text
- exist ≠ be.visible
- negative assertions are strong
