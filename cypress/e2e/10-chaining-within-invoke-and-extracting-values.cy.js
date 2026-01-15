
// 10 - Chaining + within() + invoke() + extracting values (Practice)
// Target site: https://demowebshop.tricentis.com/
// TODO-only tasks. Do NOT include solutions.
// Save as: cypress/e2e/10-chaining-within-invoke-and-extracting-values.cy.js

describe("DemoWebShop - Chaining and extracting values", () => {
  // Exercise 1: Clean chaining (type + assertion)
  // TODO:
  // 1) Visit "/"
  // 2) Get input[name="q"], type "computer"
  // 3) Chain should("have.value", "computer")
  // Expected output:
  // - Search input value: computer

  // Exercise 2: within() for safe navigation clicks
  // TODO:
  // 1) Visit "/"
  // 2) Use cy.get(".header").within(() => { ... })
  // 3) Inside within, click "Log in"
  // 4) Assert URL includes "/login"
  // Expected output:
  // - URL includes: /login

  // Exercise 3: invoke('attr', 'href') to extract attribute
  // TODO:
  // 1) Visit "/"
  // 2) Get the cart link: a[href="/cart"]
  // 3) invoke("attr", "href") and assert it equals "/cart"
  // Expected output:
  // - href equals: /cart

  // Exercise 4: invoke('text') + trim
  // TODO:
  // 1) Visit "/login"
  // 2) Get the page title container (hint: ".page-title")
  // 3) invoke("text"), trim it, and assert it includes "Login"
  // Expected output:
  // - Title includes: Login

  // Exercise 5: Extract input value using invoke('val')
  // TODO:
  // 1) Visit "/login"
  // 2) Type an email into #Email
  // 3) invoke("val") and assert it equals the email you typed
  // Expected output:
  // - Extracted email equals typed email

  // Exercise 6: Extract + parse cart count from "Shopping cart (X)" (harder)
  // TODO:
  // 1) Visit "/"
  // 2) Get the cart link text: a[href="/cart"] -> invoke("text")
  // 3) Parse the number inside parentheses into a Number
  //    Hint: use regex like /\((\d+)\)/ or string split
  // 4) Assert the parsed number is greaterThanOrEqual 0
  // Expected output:
  // - Parsed cart count is a number >= 0
  // Example format:
  // console.log("Cart count:", cartCount); // Cart count: 0

  // Exercise 7: Search -> results -> assert at least 1 product item
  // TODO:
  // 1) Visit "/"
  // 2) Type "computer" and click Search
  // 3) Assert URL includes "/search"
  // 4) Use should() (retry) to assert ".product-item" length is at least 1
  // Expected output:
  // - URL includes /search
  // - product-item length >= 1

  // Mini QA scenario: Add to cart -> extract notification text and validate content
  // TODO:
  // 1) Visit "/"
  // 2) Click an "Add to cart" button from the home page (Featured products)
  // 3) Get the notification bar (hint: ".bar-notification")
  // 4) Assert it is visible
  // 5) invoke("text") on notification, trim it
  // 6) Assert it includes "The product has been added"
  // Expected output:
  // - Notification visible
  // - Notification text includes: The product has been added
});
