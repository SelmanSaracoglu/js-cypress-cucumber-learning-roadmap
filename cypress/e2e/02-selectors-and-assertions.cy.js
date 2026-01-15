// 02 - Selectors and Assertions (Practice)
// Target site: https://demowebshop.tricentis.com/
// TODO-only tasks. Do NOT include solutions.
// Save as: cypress/e2e/02-selectors-and-assertions.cy.js

describe("DemoWebShop - Selectors and Assertions", () => {
  // Exercise 1: Find the search input using cy.get() and assert visible
  // TODO:
  // 1) Visit "/"
  // 2) Get the search input: input[name="q"]
  // 3) Assert it is visible

  it("search box is visible on home page", () => {
    cy.visit('/');
    cy.get('#small-searchterms').should('be.visible');
  });
  

  // Exercise 2: Type into input and assert its value
  // TODO:
  // 1) Visit "/"
  // 2) Type "laptop" into input[name="q"]
  // 3) Assert input has value "laptop"
  // Expected output:
  // - value is: laptop
  it("search navigates to results page", () => {
    cy.visit('/');
    
    cy.get('#small-searchterms')
      .type("laptop")
      .should('have.value', 'laptop');

    cy.get('#small-searchterms').invoke('val').then((val) => {
      cy.log(`value is: ${val}`);
    });
  });

  // Exercise 3: Navigate to login using cy.contains()
  // TODO:
  // 1) Visit "/"
  // 2) Click "Log in" using cy.contains()
  // 3) Assert URL includes "/login"
  // Expected output:
  // - URL includes: /login
  it("Navigate to login using cy.contains", () => {
    cy.visit('/');
    cy.contains("Log in").click();
    cy.url().should('include', '/login');
    
    cy.log('URL includes: /login');
  });

  // Exercise 4: Scope selection using get() + contains()
  // TODO:
  // 1) Visit "/"
  // 2) Click "Register" but scoped inside header (avoid wrong match)
  //    Hint: cy.get(".header").contains("Register").click()
  // 3) Assert URL includes "/register"
  it("Scope selection using get() + contains()", () => {
    cy.visit('/');
    cy.get(".header").contains("Register").click();
    cy.url().should('include', '/register');
    
    cy.log('URL includes: /register');
  });

  // Exercise 5: Assert "Register" button exists and is visible
  // TODO:
  // 1) Visit "/register"
  // 2) Get the Register button: input[value="Register"]
  // 3) Assert it exists
  // 4) Assert it is visible
  it("Assert Register button exists and is visible", () => {
    cy.visit('/register');

    cy.get('#register-button')
      .should('exist')
      .and('be.visible');

    cy.log("Register button exists");
    cy.log("Register button is visible");
  });
  
  // Exercise 6: Assert page sections by text (exist/visible)
  // TODO:
  // 1) Visit "/login"
  // 2) Assert "Returning Customer" is visible
  // 3) Assert "New Customer" is visible
  it("Assert page sections by text (exist/visible)", () => {
    cy.visit("/login");

    cy.contains("Returning Customer").should('be.visible');
    cy.log("Returning Customer");

    cy.contains("New Customer").should('be.visible');
    cy.log("New Customer");
  });

  // Exercise 7: Attribute selector for navigation link (harder)
  // TODO:
  // 1) Visit "/"
  // 2) Get Shopping cart link by href: a[href="/cart"]
  // 3) Assert it exists

  it("Attribute selector for navigation link", () => {
    cy.visit("/");

    cy.get('a[href="/cart"]')
      .should('exist')
      .and('be.visible');
      
    cy.log("Shopping cart link exists");
  });
  

  // Mini QA scenario: Search results validation
  // TODO:
  // 1) Visit "/"
  // 2) Type "computer" into input[name="q"]
  // 3) Click search button: input[value="Search"]
  // 4) Assert URL includes "/search"
  // 5) Assert results container exists (try one): ".product-grid" or ".search-results"
  // 6) Assert at least one product item exists: ".product-item"
  // Expected output:
  // - URL includes /search
  // - Results container exists
  // - At least one product item exists
});
