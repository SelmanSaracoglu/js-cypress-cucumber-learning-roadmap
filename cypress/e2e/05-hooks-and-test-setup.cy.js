
// 05 - Hooks and Test Setup (Practice)
// Target site: https://demowebshop.tricentis.com/
// TODO-only tasks. Do NOT include solutions.
// Save as: cypress/e2e/05-hooks-and-test-setup.cy.js

describe("DemoWebShop - Hooks and Test Setup", () => {
  // Exercise 1: Use beforeEach() to avoid repeating cy.visit()
  // TODO:
  // 1) Add beforeEach() that visits "/"
  // 2) Write a test "home page shows header links"
  // 3) Assert "Register" exists
  // 4) Assert "Log in" exists
  // Expected output:
  // - Register exists
  // - Log in exists

  // Exercise 2: Use beforeEach() for navigation to /login
  // TODO:
  // 1) Create a new describe block: "Login page suite"
  // 2) Inside it, add beforeEach():
  //    - visit "/"
  //    - click "Log in"
  //    - assert URL includes "/login"
  // 3) Add two it() tests:
  //    - "shows Returning Customer section" (assert visible)
  //    - "shows New Customer section" (assert visible)
  // Expected output:
  // - Returning Customer visible
  // - New Customer visible

  // Exercise 3: afterEach() cleanup pattern (basic)
  // NOTE: We'll simulate cleanup by always returning to home.
  // TODO:
  // 1) In the "Login page suite" describe block, add afterEach():
  //    - visit "/"
  // 2) In each test, add a simple assertion so you can see it ran.
  // Expected output:
  // - Each test passes
  // - After each test, Cypress navigates back to "/"

  // Exercise 4: before() for one-time setup (concept practice)
  // TODO:
  // 1) Add before() in a new describe block: "One-time setup suite"
  // 2) In before(), log a message with cy.log():
  //    "One-time setup executed"
  // 3) Add two tests that each do a simple assertion (e.g., home title visible)
  // Expected output:
  // - "One-time setup executed" appears once for that suite

  // Mini QA scenario: Consistent starting state for search tests
  // TODO:
  // 1) Create describe: "Search suite"
  // 2) Add beforeEach(): visit "/"
  // 3) Add three tests:
  //    - search "computer" and assert URL includes "/search"
  //    - search "phone" and assert URL includes "/search"
  //    - search "camera" and assert URL includes "/search"
  // 4) Important: each test must be independent (no shared variables for state)
  // Expected output:
  // - All 3 tests pass independently
});
