
// 13 - Custom Commands and Reuse (Practice)
// Target site: https://demowebshop.tricentis.com/
// TODO-only tasks. Do NOT include solutions.
//
// You will edit TWO places:
// 1) cypress/support/commands.js  (add commands)
// 2) This spec file              (use commands)
//
// Save as: cypress/e2e/13-custom-commands-and-reuse.cy.js

describe("DemoWebShop - Custom Commands", () => {
  // Exercise 0: Create commands (in commands.js)
  // TODO (in cypress/support/commands.js):
  // 1) Add command: openHome()
  //    - cy.visit("/")
  // 2) Add command: goToLogin()
  //    - cy.visit("/")
  //    - click "Log in"
  //    - assert URL includes "/login"
  // 3) Add command: search(term)
  //    - visit "/"
  //    - type term into input[name="q"]
  //    - click Search button
  //    - assert URL includes "/search"
  // Expected output:
  // - Commands exist and are callable: cy.openHome(), cy.goToLogin(), cy.search("computer")

  // Exercise 1: Use cy.openHome() and assert page signature
  // TODO:
  // 1) Call cy.openHome()
  // 2) Assert "Demo Web Shop" is visible
  // Expected output:
  // - Demo Web Shop visible

  // Exercise 2: Use cy.goToLogin() and assert login page content
  // TODO:
  // 1) Call cy.goToLogin()
  // 2) Assert "Returning Customer" is visible
  // Expected output:
  // - Returning Customer visible

  // Exercise 3: Use cy.search(term) with one term
  // TODO:
  // 1) Call cy.search("computer")
  // 2) Assert ".product-item" length is at least 1
  // Expected output:
  // - product-item length >= 1

  // Exercise 4: Use cy.search(term) with a different term (harder)
  // TODO:
  // 1) Call cy.search("laptop")
  // 2) Assert URL includes "/search"
  // 3) Assert page contains the word "Search" somewhere (choose stable check)
  // Expected output:
  // - URL includes /search
  // - page contains "Search"

  // Exercise 5: Add a login(email, password) command (optional if you have creds)
  // TODO (in cypress/support/commands.js):
  // 1) Add command: login(email, password)
  //    - visit "/login"
  //    - type email into #Email
  //    - type password into #Password
  //    - click Log in button
  //    - keep assertions minimal (URL change or logout link existence)
  // Expected output:
  // - cy.login(email, password) works (if you have valid credentials)

  // Mini QA scenario: Reuse commands in a short, readable test
  // TODO:
  // 1) Use cy.openHome()
  // 2) Use cy.search("computer")
  // 3) Click the first product item (choose a stable selector)
  // 4) Assert product detail page title exists (e.g., ".product-name" visible)
  // Expected output:
  // - Search runs
  // - Product page opened
  // - Product title visible
});
