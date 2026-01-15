// Target site: https://demowebshop.tricentis.com/

// Exercise 1: Create your first suite + test
// TODO: Create a describe() block named: "DemoWebShop - Cypress Basics"
// TODO: Inside it, create an it() named: "opens the home page"
// TODO: Use cy.visit() to open the site home page.
// TODO: Assert the page contains "Demo Web Shop" and it is visible.
// Expected output:
// - Test Runner shows: "DemoWebShop - Cypress Basics" > "opens the home page" (green)
// - Assertion passes: "Demo Web Shop" is visible

// describe groups tests
describe('DemoWebShop - Cypress Basics', () => {

  // it defines a single test scenario
  it('opens the home page', () => {
    // 1) open the webpage
    cy.visit('/');
    // 2) assert that page loaded by checking text
    cy.contains('Demo Web Shop').should('be.visible');
    // 3) extra assertion: URL includes "tricentis"
    cy.url().should('include', 'tricentis' );
  });

// Exercise 2: Navigate using contains()
// TODO: In a new it() test: "navigates to login page"
// TODO: Visit home page.
// TODO: Click the "Log in" link using cy.contains().
// TODO: Assert URL includes "/login".
// Expected output:
// - URL includes: /login

  it("navigates to login page", () => {
    cy.visit('/');
    cy.contains('Log in').click();
    cy.url().should('include', '/login');
  });


// Exercise 3: Validate a label on the login page
// TODO: In a new it() test: "login page shows returning customer section"
// TODO: Go to /login.
// TODO: Assert the text "Returning Customer" is visible.
// Expected output:
// Returning Customer (visible)

  it("login page shows returning customer section", () => {
    cy.visit('/');
    cy.contains('Log in').click();
    cy.contains("Returning Customer").should('be.visible');
  });

// Exercise 4: Use should() with visibility on an element
// TODO: In a new it() test: "search box is visible on home page"
// TODO: Visit home page.
// TODO: Find the search input (hint: input[name="q"]) and assert it is visible.
// Expected output:
// - Search input is visible

  it("search box is visible on home page", () => {
    cy.visit('/');
    cy.get('#small-searchterms').should('be.visible');
  });

// Exercise 5: Click search button and validate results page
// TODO: In a new it() test: "search navigates to results page"
// TODO: Visit home page.
// TODO: Type "laptop" into the search input.
// TODO: Click the search button (hint: input[value="Search"]).
// TODO: Assert URL includes "/search".
// Expected output:
// - URL includes: /search
  it("search navigates to results page", () => {
    cy.visit('/');
    cy.get('#small-searchterms').type('laptop');
     cy.get('input[value="Search"]').click();
     cy.url().should('include', '/search');
  });

// Mini QA scenario: Basic smoke flow (no login)
// TODO: Create an it() test: "smoke: search and open a product details page"
// TODO steps:
// 1) Visit home page
// 2) Search for "computer"
// 3) On results page, click a product link (use cy.contains with a product name from results)
// 4) Assert product details page shows "Add to cart" button visible
// Expected output:
// - Add to cart button is visible on a product details page

it("smoke: search and open a product details page", () => {
    cy.visit('/');
    cy.get('#small-searchterms').type('computer');
     cy.contains('Build your own cheap computer').click();
     cy.get('input[id="add-to-cart-button-72"]').should('be.visible');
  });

});