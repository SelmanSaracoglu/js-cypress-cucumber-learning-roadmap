
# Step 14 - Cypress Introduction

## What is Cypress?
Cypress is a modern JavaScript-based test automation tool used for:
- UI testing
- API testing
- End-to-end workflows
- Continuous testing in CI/CD pipelines

It runs inside the browser and gives clear feedback with automatic waiting.

## Why Cypress?
Cypress makes UI automation easier because:
- No explicit wait needed
- Automatically retries commands
- Has built-in assertions
- Live browser preview
- Detailed logs and debugging tools

Unlike Selenium:
- Cypress runs inside the browser, not outside
- Same programming language: JavaScript
- No async/await needed for most operations

## Cypress Installation Steps

1. Initialize Node project
npm init -y

2. Install Cypress locally
npm install cypress --save-dev

3. Open Cypress Test Runner
npx cypress open


*** Cypress creates default folders: ***

cypress/
e2e/
fixtures/
support/
cypress.config.js


*** First Test Concepts ***

## 1. describe() --> Groups a group of related test cases.
## 2. it() --> Defines a single test scenario.
## 3. cy.visit() --> Opens a URL in the browser.
## 4. cy.contains() --> Finds an element using visible text.
## 5. should() --> Performs an assertion (validation).


*** Automatic Waiting ***
You do not need:
- sleep()
- waits
- async/await
- then.catch

Cypress waits by default until:
- Element is visible
- Page loads
- Assertions pass or fail

*** When the test fails ***
Cypress:
- Takes automatic screenshots
- Shows the exact failing step
- Stops the test
- Marks it red in the runner

No try/catch required.
