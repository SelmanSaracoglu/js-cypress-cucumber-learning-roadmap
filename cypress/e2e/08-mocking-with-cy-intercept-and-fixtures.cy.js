// 08 - Mocking with cy.intercept() and fixtures (Practice)
// Target site: https://demowebshop.tricentis.com/
// TODO-only tasks. Do NOT include solutions.
//
// IMPORTANT NOTE:
// DemoWebShop is a server-rendered app and may not expose easy JSON endpoints for UI pages.
// For learning mocking patterns, we will practice by stubbing requests that Cypress can intercept,
// and focus on verifying interception + status + that the stubbed response was used.
//
// Save as: cypress/e2e/08-mocking-with-intercept-and-fixtures.cy.js

describe("DemoWebShop - Mocking with intercept + fixtures", () => {
  // Exercise 0 (Setup): Create a fixture file
  // TODO:
  // 1) Create file: cypress/fixtures/mock-users.json
  // 2) Put a JSON object inside like:
  //    { "users": [ { "id": 1, "name": "Mock User" } ] }
  // Expected output:
  // - fixture file exists in cypress/fixtures/

  // Exercise 1: Stub a GET request with a static body
  // TODO:
  // 1) Visit "/"
  // 2) Add intercept for GET "**/search*" with a stubbed response:
  //    - statusCode: 200
  //    - body: "MOCKED SEARCH RESPONSE"
  //    alias it as "searchStub"
  // 3) Trigger search by typing "computer" and clicking Search
  // 4) Wait for "@searchStub"
  // 5) Assert the interception response body equals "MOCKED SEARCH RESPONSE"
  // Expected output:
  // - "@searchStub" captured
  // - response.body equals: MOCKED SEARCH RESPONSE

  // Exercise 2: Stub a GET request using a fixture (body from file)
  // TODO:
  // 1) Load fixture "mock-users.json"
  // 2) Intercept GET "**/users*" (or any pattern you choose for learning) and respond with:
  //    - statusCode: 200
  //    - body: fixtureData
  //    alias "getUsersStub"
  // 3) Trigger any action (visit a page or click something) that would produce a matching request
  //    If no natural request exists on the site, use cy.request() to that URL to generate traffic:
  //    cy.request("/users") or cy.request("https://demowebshop.tricentis.com/users")
  // 4) Wait "@getUsersStub"
  // 5) Assert response.body has property "users"
  // Expected output:
  // - response.body.users exists

  // Exercise 3: Stub POST success (201) and assert statusCode
  // TODO:
  // 1) Intercept POST "**/comments" (learning endpoint) with:
  //    - statusCode: 201
  //    - body: { id: 999, text: "Created by mock" }
  //    alias "createComment"
  // 2) Trigger the request using cy.request():
  //    cy.request({ method: "POST", url: "/comments", body: { text: "x" }, failOnStatusCode: false })
  // 3) Wait "@createComment"
  // 4) Assert response.statusCode equals 201
  // Expected output:
  // - statusCode = 201

  // Exercise 4: Stub POST error (500) and validate error path
  // TODO:
  // 1) Intercept POST "**/comments" with:
  //    - statusCode: 500
  //    - body: { error: "Server failed" }
  //    alias "createCommentFail"
  // 2) Trigger the request using cy.request() with failOnStatusCode: false
  // 3) Wait "@createCommentFail"
  // 4) Assert response.statusCode equals 500
  // 5) Assert response.body has property "error" with value "Server failed"
  // Expected output:
  // - statusCode = 500
  // - error = Server failed

  // Mini QA scenario: Edge case testing via mock response
  // TODO:
  // 1) Create fixture: cypress/fixtures/mock-product.json with a product that has:
  //    - very long name
  //    - price: 0
  //    - inStock: false
  // 2) Stub GET "**/product/*" to return that fixture
  // 3) Trigger request via cy.request("/product/1") (or matching URL)
  // 4) Wait for alias and assert:
  //    - name length is greater than 20
  //    - price equals 0
  //    - inStock equals false
  // Expected output:
  // - name length > 20
  // - price = 0
  // - inStock = false
});
