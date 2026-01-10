# Step 16 - User Actions (type, click, check, uncheck, select)

## Goal --> Interact with UI elements just like a real user:
- typing into fields
- clicking buttons/links
- selecting dropdowns
- checking/unchecking checkboxes and radios

## 1. cy.type() --> Types text inside an input field.
Examples:
cy.get('#username').type('admin')
cy.get('input[name="email"]').type('test@example.com')

Special keys:
{enter} {backspace} {selectall}

Example:
cy.get('#search').type('cypress{enter}')

---

## 2. cy.click() --> Clicks a button, link, or element.
Examples:
cy.get('.btn-primary').click()
cy.contains('Submit').click()

Works even if covered by animations (auto retry).

## 3. cy.check() / uncheck() --> Used only for:
- checkboxes
- radio buttons

Example:
cy.get('[type="checkbox"]').check()
cy.get('[value="option1"]').uncheck()

For radio:
cy.get('[value="male"]').check()

---

## 4. cy.select() --> Used for dropdown (<select> tags):
cy.get('select#country').select('Germany')

You can select by:
- visible text
- value
- index

Examples:
cy.get('select').select('US')
cy.get('select').select('1')  # index

## When commands fail
Cypress retries until:
- element becomes visible
- element becomes clickable
- assertion passes

No manual waits required.

## Key Takeaways
- cy.type() fills inputs
- cy.click() simulates user click
- cy.check()/uncheck() manages tickable options
- cy.select() interacts with dropdowns
- Cypress hides async complexity and timeouts
