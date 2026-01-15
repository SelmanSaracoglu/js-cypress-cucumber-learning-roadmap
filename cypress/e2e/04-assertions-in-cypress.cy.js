// 04 - Assertions in Cypress (Practice)
// Target site: https://demowebshop.tricentis.com/
// TODO-only tasks. Do NOT include solutions.
// Save as: cypress/e2e/04-assertions-in-cypress.cy.js

describe("DemoWebShop - Assertions", () => {
  // Exercise 1: Visibility assertion on homepage title
  // TODO:
  // 1) Visit "/"
  // 2) Assert "Demo Web Shop" is visible using cy.contains()
  // Expected output:
  // - "Demo Web Shop" is visible

  // Exercise 2: URL + content assertion on Login page
  // TODO:
  // 1) Visit "/"
  // 2) Click "Log in"
  // 3) Assert URL includes "/login"
  // 4) Assert "Returning Customer" is visible
  // Expected output:
  // - URL includes /login
  // - Returning Customer visible

  // Exercise 3: contain vs have.text (text assertion practice)
  // TODO:
  // 1) Visit "/login"
  // 2) Select the page title element (hint: ".page-title")
  // 3) Assert it "contain"s the text "Login"
  // 4) (Harder) Assert it "have.text" exactly (you may need to trim/choose correct element)
  // Expected output:
  // - contain "Login" passes
  // - exact text assertion passes (after correct selector choice)

  // Exercise 4: Input value assertion (have.value)
  // TODO:
  // 1) Visit "/login"
  // 2) Type a test email into #Email
  // 3) Assert #Email has that value
  // Expected output:
  // - #Email has typed email

  // Exercise 5: Attribute assertion (have.attr)
  // TODO:
  // 1) Visit "/"
  // 2) Select the "Shopping cart" link using: a[href="/cart"]
  // 3) Assert it has attr "href" with value "/cart"
  // Expected output:
  // - href is /cart

  // Exercise 6: Negative assertion (not.exist) after navigation
  // TODO:
  // 1) Visit "/"
  // 2) Search for "computer"
  // 3) Assert URL includes "/search"
  // 4) Assert "Search" input still exists on results page (exist)
  // 5) (Harder) Assert a clearly unrelated text does NOT exist on the page using cy.contains(...).should('not.exist')
  // Expected output:
  // - Search input exists
  // - Unrelated text not exist

  // Exercise 7: State assertion (checkbox checked / not checked)
  // NOTE: This depends on checkbox presence in Register page.
  // TODO:
  // 1) Visit "/register"
  // 2) Find a checkbox input[type="checkbox"] (scope if needed)
  // 3) Check it and assert be.checked
  // 4) Uncheck it and assert not.be.checked
  // Expected output:
  // - checked then unchecked assertions pass

  // Mini QA scenario: Login negative validation (meaningful assertions)
  // TODO:
  // 1) Visit "/login"
  // 2) Type invalid email + invalid password
  // 3) Click "Log in"
  // 4) Assert an error message is visible (hint: ".validation-summary-errors")
  // 5) Assert it contains one of these (contain):
  //    - "Login was unsuccessful"
  // Expected output:
  // - Error box visible
  // - Error message contains "Login was unsuccessful"
});
