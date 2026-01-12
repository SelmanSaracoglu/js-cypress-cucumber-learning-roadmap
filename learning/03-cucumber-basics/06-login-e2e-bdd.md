
# Step 28 - BDD Login E2E Scenario (Valid + Invalid)

## Goal
Create a realistic login scenario using:
- Feature file with Scenario Outline
- Valid and invalid credentials
- Step definitions calling Cypress commands

Target app:
- URL: https://the-internet.herokuapp.com/login
- Valid username: tomsmith
- Valid password: SuperSecretPassword!

Success:
- URL contains `/secure`
- Flash message contains `You logged into a secure area!`

Failure:
- URL still `/login`
- Flash message contains `Your username is invalid!` or `Your password is invalid!`

## Test design --> We will model:
1) Valid login
2) Invalid username
3) Invalid password

Using Scenario Outline + Examples.

## Mapping Gherkin to Cypress --> Examples of step mapping:

- `Given I am on the login page`  
  -> `cy.visit('https://the-internet.herokuapp.com/login')`

- `When I login with username "<username>" and password "<password>"`  
  -> fill form + click Login

- `Then the login should be successful`  
  -> assert URL + success message

- `Then the login should fail`  
  -> assert URL still /login + error message visible

## Why this is important for the job
- Shows that you:
  - can design basic auth test cases
  - can express them in BDD style
  - can automate them in Cypress
- Very common interview use case:
  - "How would you test a login form?"
  - "Show me BDD + Cypress on a simple flow."

## Key takeaway
This step gives you:
- a concrete BDD login example
- ready-made material to show in interviews
- a pattern to apply to other forms (search, registration, etc.)
