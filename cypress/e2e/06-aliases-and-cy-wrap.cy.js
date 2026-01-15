// 06 - Aliases and cy.wrap (Practice)
// Target site: https://demowebshop.tricentis.com/
// TODO-only tasks. Do NOT include solutions.
// Save as: cypress/e2e/06-aliases-and-cy-wrap.cy.js

describe("DemoWebShop - Aliases and cy.wrap", () => {
  // Exercise 1: Alias a DOM element and reuse it
  // TODO:
  // 1) Visit "/login"
  // 2) Alias the email input (#Email) as "emailInput"
  // 3) Use cy.get("@emailInput") to type "alias@test.com"
  // 4) Assert it has value "alias@test.com"
  // Expected output:
  // - #Email value is alias@test.com

  // Exercise 2: Alias multiple elements (email + password)
  // TODO:
  // 1) Visit "/login"
  // 2) Alias #Email as "email"
  // 3) Alias #Password as "password"
  // 4) Type values into both using their aliases
  // 5) Assert both have the values you typed
  // Expected output:
  // - email input has typed value
  // - password input has typed value

  // Exercise 3: Avoid JS variables (demonstration in TODO form)
  // TODO:
  // 1) DO NOT store a DOM element in a let variable.
  // 2) Instead, alias the element and reuse it.
  // Expected output:
  // - Test passes without using JS variables for DOM elements

  // Exercise 4: cy.wrap() with a plain object
  // TODO:
  // 1) Create const user = { name: "John", role: "tester" }
  // 2) Wrap it with cy.wrap(user)
  // 3) Assert it has property "name" with value "John"
  // Expected output:
  // - assertion passes (name is John)

  // Exercise 5: cy.wrap() with a value from the page (length)
  // TODO:
  // 1) Visit "/"
  // 2) Get all product items on home page (hint: ".product-item") and alias as "items"
  // 3) Get "@items", read its length, then wrap the length and assert:
  //    - length is greater than 0
  // Expected output:
  // - product item count > 0

  // Exercise 6: Alias reuse with multiple assertions (harder)
  // TODO:
  // 1) Visit "/"
  // 2) Alias the search input (input[name="q"]) as "searchBox"
  // 3) Type "computer" using the alias
  // 4) Assert it has value "computer"
  // 5) Clear it using the alias, then type "laptop"
  // 6) Assert it has value "laptop"
  // Expected output:
  // - searchBox value changes correctly

  // Mini QA scenario: Save derived data and assert with cy.wrap
  // TODO:
  // 1) Visit "/"
  // 2) Capture the text of the "Shopping cart" link (hint: a[href="/cart"])
  // 3) In a then(), extract a number from that text (cart quantity)
  //    Example text format can look like: "Shopping cart (0)"
  // 4) Wrap the extracted number and assert it equals 0
  // Expected output:
  // - extracted cart count equals 0
});
