// 11 - Test Data: fixtures + Cypress.env() (Practice)
// Target site: https://demowebshop.tricentis.com/
// TODO-only tasks. Do NOT include solutions.
// Save as: cypress/e2e/11-test-data-fixtures-and-env.cy.js

describe("DemoWebShop - Test Data (fixtures + env)", () => {
  // Exercise 0: Create fixture files (do this in your repo)
  // TODO:
  // 1) Create: cypress/fixtures/users.json
  //    Example structure (you choose values):
  //    {
  //      "validUser": { "email": "YOUR_EMAIL", "password": "YOUR_PASSWORD" },
  //      "invalidUser": { "email": "wrong@wrong.com", "password": "wrongpass" }
  //    }
  // 2) Create: cypress/fixtures/searchTerms.json
  //    Example:
  //    { "terms": ["computer", "laptop", "camera"] }
  // Expected output:
  // - Both fixture files exist

  // Exercise 1: Load fixture and type into login form
  // TODO:
  // 1) Visit "/login"
  // 2) Load "users.json"
  // 3) Type validUser.email into #Email
  // 4) Type validUser.password into #Password
  // 5) Assert both inputs have the typed values
  // Expected output:
  // - Email input has validUser.email
  // - Password input has validUser.password

  // Exercise 2: Use Cypress.env() for password (avoid hardcoding)
  // TODO:
  // 1) Set an env value (choose one method):
  //    A) CLI: npx cypress open --env PASSWORD=123456
  //    B) cypress.config.js: e2e: { env: { PASSWORD: "123456" } }
  // 2) Visit "/login"
  // 3) Load users.json and type validUser.email
  // 4) Type Cypress.env("PASSWORD") into #Password
  // 5) Assert #Password has the env value
  // Expected output:
  // - Password input equals Cypress.env("PASSWORD")

  // Exercise 3: Use fixture-driven search terms (data-driven basics)
  // TODO:
  // 1) Visit "/"
  // 2) Load "searchTerms.json"
  // 3) Pick the first term (terms[0])
  // 4) Type it into input[name="q"] and click Search
  // 5) Assert URL includes "/search"
  // Expected output:
  // - URL includes /search

  // Exercise 4: Loop through terms (harder, still beginner-friendly)
  // TODO:
  // 1) Load "searchTerms.json"
  // 2) For each term in terms:
  //    - visit "/"
  //    - type term
  //    - click Search
  //    - assert URL includes "/search"
  // NOTE: Keep it simple: use a normal for loop inside the fixture .then()
  // Expected output:
  // - Each term triggers a search and passes URL assertion

  // Exercise 5: Create unique email using timestamp (register data pattern)
  // TODO:
  // 1) Visit "/register"
  // 2) Create const uniqueEmail = `user_${Date.now()}@test.com`
  // 3) Type uniqueEmail into Email field (find correct selector)
  // 4) Assert the email input has the same value
  // Expected output:
  // - Email input has value like: user_1700000000000@test.com

  // Mini QA scenario: Negative login using fixture user
  // TODO:
  // 1) Visit "/login"
  // 2) Load users.json and type invalidUser credentials
  // 3) Click "Log in"
  // 4) Assert error box is visible (hint: ".validation-summary-errors")
  // 5) Assert it contains "Login was unsuccessful" (contain)
  // Expected output:
  // - Error box visible
  // - Contains: Login was unsuccessful
});
