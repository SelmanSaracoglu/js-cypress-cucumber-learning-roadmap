// 09 - Retry Logic & Wait Strategies (Practice)
// Target site: https://demowebshop.tricentis.com/
// TODO-only tasks. Do NOT include solutions.
// Save as: cypress/e2e/09-retry-logic-and-wait-strategies.cy.js

describe("DemoWebShop - Retry Logic & Wait Strategies", () => {
  // Exercise 1: Replace fixed wait with auto-retry assertion
  // TODO:
  // 1) Visit "/"
  // 2) DO NOT use cy.wait(2000)
  // 3) Assert the search input exists and is visible:
  //    input[name="q"]
  // Expected output:
  // - search input exists
  // - search input is visible

  // Exercise 2: Button enabled check before clicking (retry pattern)
  // TODO:
  // 1) Visit "/login"
  // 2) Get the "Log in" button (input[value="Log in"] or button selector you find)
  // 3) Assert it is not disabled, then click
  // 4) Assert you stay on /login (because creds are empty) OR error box exists
  // Expected output:
  // - click happens after not.be.disabled
  // - stable assertion passes (URL or error exists)

  // Exercise 3: should() retries vs then() single-shot (learning task)
  // TODO:
  // 1) Visit "/"
  // 2) Get the shopping cart link text (a[href="/cart"])
  // 3) Use then() to print it (cy.log) (no assertion yet)
  // 4) Then add a should("contain", "Shopping cart") assertion on the same element
  // Expected output:
  // - cy.log shows cart text format
  // - should contain passes

  // Exercise 4: Event-based waiting with intercept (no magic sleeps)
  // TODO:
  // 1) Visit "/"
  // 2) Set intercept GET "**/search*" as "search"
  // 3) Perform a search for "computer"
  // 4) Wait "@search"
  // 5) Assert response.statusCode = 200
  // Expected output:
  // - "@search" waited successfully
  // - statusCode is 200

  // Exercise 5: Combine intercept + UI retry assertion
  // TODO:
  // 1) Visit "/"
  // 2) Intercept GET "**/search*" as "search"
  // 3) Search for "computer"
  // 4) Wait "@search"
  // 5) Assert at least one product item exists on results page:
  //    cy.get(".product-item").should("have.length.at.least", 1)
  // Expected output:
  // - product-item length >= 1

  // Exercise 6: Avoid over-waiting (harder thinking task)
  // TODO:
  // 1) Visit "/"
  // 2) Perform a search without intercept
  // 3) Use ONLY DOM-based retry assertion to confirm results:
  //    - ".product-item" length at least 1
  // 4) Compare stability with Exercise 5 in your mind (no code)
  // Expected output:
  // - product-item length >= 1 (no intercept)

  // Mini QA scenario: Add to cart without fixed waits
  // TODO:
  // 1) Visit "/"
  // 2) Intercept POST "**/addproducttocart/**" as "addToCart"
  // 3) Click an "Add to cart" button on home page
  // 4) Wait "@addToCart"
  // 5) Assert a success notification exists (look for ".bar-notification")
  // 6) Assert notification contains "The product has been added"
  // Expected output:
  // - "@addToCart" captured
  // - bar notification exists
  // - notification contains "The product has been added"
});
