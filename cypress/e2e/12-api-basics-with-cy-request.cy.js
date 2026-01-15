// 12 - API Basics with cy.request() (Practice)
// Target site: https://demowebshop.tricentis.com/
// TODO-only tasks. Do NOT include solutions.
// Save as: cypress/e2e/12-api-basics-with-cy-request.cy.js

describe("DemoWebShop - API basics with cy.request()", () => {
  // Exercise 1: Health check (GET /)
  // TODO:
  // 1) Send GET request to "/"
  // 2) Assert response.status equals 200
  // Expected output:
  // - status = 200

  // Exercise 2: GET /login returns 200
  // TODO:
  // 1) Send GET request to "/login"
  // 2) Assert status equals 200
  // Expected output:
  // - status = 200

  // Exercise 3: Assert response headers contain content-type
  // TODO:
  // 1) GET "/"
  // 2) Assert response.headers has property "content-type"
  // 3) Log the content-type using cy.log (format only, not final answer)
  // Expected output:
  // - content-type exists (example: text/html; charset=utf-8)

  // Exercise 4: Negative test with failOnStatusCode: false
  // TODO:
  // 1) Send GET request to a non-existing page, e.g. "/this-page-should-not-exist"
  // 2) Set failOnStatusCode: false
  // 3) Assert response.status equals 404
  // Expected output:
  // - status = 404

  // Exercise 5: Measure performance-ish signal (duration)
  // TODO:
  // 1) GET "/"
  // 2) Assert response.duration is less than 2000 (2 seconds)
  // NOTE: Pick a number that makes sense for your machine/CI later.
  // Expected output:
  // - duration < 2000

  // Exercise 6: Combine UI + API check (simple stability pattern)
  // TODO:
  // 1) First, cy.request("/login") and assert status 200
  // 2) Then, cy.visit("/login") and assert "Returning Customer" is visible
  // Expected output:
  // - request status = 200
  // - UI section visible

  // Mini QA scenario: Validate redirect or HTML content presence
  // TODO:
  // 1) GET "/"
  // 2) Assert response.body includes "Demo Web Shop" (string check)
  //    NOTE: response.body is likely HTML string.
  // 3) Log a short message showing you validated the page signature
  // Expected output:
  // - body includes "Demo Web Shop"
});
