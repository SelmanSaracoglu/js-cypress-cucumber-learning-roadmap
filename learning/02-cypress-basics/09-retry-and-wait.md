# Step 22 - Retry Logic & Wait Strategies

## Goal
Understand:
- how Cypress auto-retry works
- when to wait and when NOT to wait
- avoiding flaky tests

## Cypress Superpower: Auto Retry
Cypress automatically retries:
- `cy.get()`
- `cy.contains()`
- `.should()`
until:
- condition matches, or
- timeout expires

Example:
    cy.get('.alert')       // retries until element exists
        .should('be.visible')  // retries until visible

⛔ No need for:
- sleeps
- waits without purpose

**Good vs Bad Waiting**

## ❌ BAD (fixed sleeps)
cy.wait(2000)

- test slows down
- fails if network is slower
- flaky

## ✔ GOOD (event-based waiting)
cy.intercept('GET', '/items').as('items')
cy.wait('@items') // reliable

## ✔ GOOD (auto retry on DOM)
cy.get('.success-message').should('exist')

**Common Retry Patterns**

### 1. Element appears later
cy.contains('Submit').click();
cy.get('.success').should('be.visible');

### 2. Value changes over time
cy.get('#status').should('contain', 'Done');

### 3. Button becomes enabled
cy.get('button.save')
  .should('not.be.disabled')
  .click();

**should() → retries automatically**
cy.get('h1').should('have.text', 'Dashboard')

Cypress:
- keeps checking text
- waits until it matches
- fails only after timeout

**then() → NO RETRY**
cy.get('.count').then(($el) => {
  expect($el.text()).to.eq('5');  // no retry
});

So if the value changes later → ❌ fail.

Fix by:
    cy.get('.count').should('have.text', '5')

**Rule of Thumb**

### When to use should():
- when condition might change
- when waiting for UI updates, animation, async events

### When to use then():
- when you already KNOW the UI is ready
- when extracting values
- when wrapping plain JS data

**Combining retry + intercept**

Best pattern:
cy.intercept('GET', '/items').as('items');
cy.get('.reload').click();
cy.wait('@items');
cy.get('.item-row').should('have.length.at.least', 1);

**Key takeaway**
- Cypress retries should() until passing → embrace it
- Prefer event-driven waits (`cy.wait(@alias)`)
- Avoid fixed sleeps (`cy.wait(3000)`)
- Use should() for dynamic UI
- then() is single-shot, no retry

