// 07 - Network Requests with cy.intercept() (Practice)
// Target site: https://demowebshop.tricentis.com/
// TODO-only tasks. Do NOT include solutions.
// Save as: cypress/e2e/07-network-requests-cy-intercept.cy.js

describe("DemoWebShop - cy.intercept (spy)", () => {
  // Exercise 1: Intercept the search request and wait reliably
  // TODO:
  // 1) Visit "/"
  // 2) Add an intercept for GET search requests:
  //    method: "GET"
  //    url pattern: "**/search*"
  //    alias: "search"
  // 3) Type "computer" into input[name="q"] and click Search
  // 4) Wait for "@search"
  // 5) Assert response statusCode equals 200
  // Expected output:
  // - "@search" is captured
  // - statusCode = 200

  // Exercise 2: Assert request URL contains the query (q=computer)
  // TODO:
  // 1) Repeat search intercept setup
  // 2) After cy.wait("@search"), assert:
  //    interception.request.url includes "q=computer"
  // Expected output:
  // - request.url includes: q=computer

  // Exercise 3: Intercept Add-to-Cart request (network proof)
  // NOTE: DemoWebShop triggers add-to-cart network calls like:
  // POST **/addproducttocart/**
  // TODO:
  // 1) Visit "/"
  // 2) Add intercept: method "POST", url pattern "**/addproducttocart/**", alias "addToCart"
  // 3) Click an "Add to cart" button on the home page (Featured products)
  // 4) Wait for "@addToCart"
  // 5) Assert response statusCode is 200 (or 302 depending on behavior)
  // Expected output:
  // - "@addToCart" captured
  // - statusCode is 200 (or 302)

  // Exercise 4: Use cy.wait().its(...) shortcut (clean assertion)
  // TODO:
  // 1) Repeat Exercise 1
  // 2) Instead of then(...), use:
  //    cy.wait("@search").its("response.statusCode").should("eq", 200)
  // Expected output:
  // - statusCode asserted via its(...) chain

  // Exercise 5: Multiple requests - wait twice (harder)
  // TODO:
  // 1) Visit "/"
  // 2) Intercept GET "**/search*" as "search"
  // 3) Perform two searches in the same test (e.g., "computer" then "laptop")
  //    (Tip: go back home between searches or visit "/" again)
  // 4) Use cy.wait("@search") twice (two separate waits)
  // Expected output:
  // - Two search requests are captured (two waits succeed)

  // Mini QA scenario: Stabilize UI assertion with intercept
  // TODO:
  // 1) Visit "/"
  // 2) Intercept GET "**/search*" as "search"
  // 3) Search for "computer"
  // 4) Wait "@search" and assert statusCode = 200
  // 5) After the wait, assert at least one ".product-item" exists on results page
  // Expected output:
  // - Network wait passes
  // - product-item exists
});
