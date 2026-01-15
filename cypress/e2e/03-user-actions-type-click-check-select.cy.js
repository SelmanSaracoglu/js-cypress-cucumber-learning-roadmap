// 03 - User Actions (type, click, check, uncheck, select) (Practice)
// Target site: https://demowebshop.tricentis.com/
// TODO-only tasks. Do NOT include solutions.
// Save as: cypress/e2e/03-user-actions.cy.js

describe("DemoWebShop - User Actions", () => {
  // Exercise 1: type() into search field + assert value
  // TODO:
  // 1) Visit "/"
  // 2) Type "computer" into input[name="q"]
  // 3) Assert input value is "computer"
  it("type() into search field + assert value", () => {
    cy.visit("/");
    cy.get("#small-searchterms").type("computer").should('have.value', 'computer');
    cy.log("value is: computer")
  });

  // Exercise 2: click() Search + assert URL includes /search
  // TODO:
  // 1) Visit "/"
  // 2) Type "computer" into input[name="q"]
  // 3) Click search button: input[value="Search"]
  // 4) Assert URL includes "/search"
  it("click() Search + assert URL includes /search", () => {
    cy.visit("/");
    cy.get("#small-searchterms")
    .type("computer")
    .should("have.value", "computer");

    cy.get('input[value="Search"]').click();

    cy.url().should('include', '/search')
    cy.log("URL includes: /search"); // - URL includes: /search
  });
 
  

  // Exercise 3: click() navigation link using contains()
  // TODO:
  // 1) Visit "/"
  // 2) Click "Log in" using cy.contains()
  // 3) Assert URL includes "/login"
  it("click() navigation link using contains()", () => {
    cy.visit("/");
    cy.contains('a', 'Log in').click();

    cy.url().should('include', '/login')
    cy.log("URL includes: /login"); // - URL includes: /login
    cy.url().then((url) => console.log('URL is:', url));
  });
 

  // Exercise 4: type() into login fields (clear + type) + assert values
  // TODO:
  // 1) Visit "/login"
  // 2) Type an email into #Email (use clear().type(...))
  // 3) Type a password into #Password (use clear().type(...))
  // 4) Assert #Email has the email value
  // 5) Assert #Password has the password value
  it("type() into login fields (clear + type) + assert values", () => {
    cy.visit("/login");

    cy.get("#Email")
    .clear()
    .type("email@email.com")
    .should("have.value", "email@email.com");

    cy.log("Email input has your email");

    cy.get("#Password")
    .clear()
    .type("Test1234!")
    .should("have.value", "Test1234!");

    cy.log("Password input has your password");
  });


  // Exercise 5: click() Log in button (do NOT assert success yet)
  // TODO:
  // 1) On "/login", click the "Log in" button
  //    Hint: input[value="Log in"] OR cy.get('input.button-1.login-button').click()
  // 2) Assert the button click navigates or shows validation (depends on entered creds)
  //    Pick ONE stable check:
  //    - URL includes "/login" (if invalid)
  //    - OR error message exists (if invalid)
  it("click() Log in button (do NOT assert success yet)", () => {
    cy.visit("/login");

    cy.get('input[value="Log in"]').click();

    cy.url().should("include", "/login");

    cy.log("URL includes: /login");

    cy.get(".validation-summary-errors")
    .should("exist")
    .and("be.visible");

    cy.log("Error message exists");

  });


  // Exercise 6: check() checkbox (Register page - Newsletter)
  // NOTE: DemoWebShop register page includes checkbox "Newsletter" in many installs.
  // If it exists, use it. If not, skip this exercise in code by targeting existing checkbox only.
  // TODO:
  // 1) Visit "/register"
  // 2) Locate checkbox input[type="checkbox"] (scope if needed)
  // 3) check() it
  // 4) Assert it is checked
  // Expected output:
  // - checkbox is checked

  // Exercise 7: uncheck() checkbox + assert unchecked (harder)
  // TODO:
  // 1) On the same page, uncheck() the checkbox
  // 2) Assert it is not checked
  // Expected output:
  // - checkbox is not checked

  // Exercise 8: select() dropdown (Date of birth on Register page)
  // NOTE: DemoWebShop register page typically has DOB dropdowns:
  // DateOfBirthDay, DateOfBirthMonth, DateOfBirthYear
  // TODO:
  // 1) Visit "/register"
  // 2) Select a day from select#DateOfBirthDay (e.g., "10")
  // 3) Select a month from select#DateOfBirthMonth (e.g., "May")
  // 4) Select a year from select#DateOfBirthYear (e.g., "1995")
  // 5) Assert each select has the expected value
  // Expected output:
  // - day/month/year dropdowns show selected values

  // Mini QA scenario: Register form interactions (no real submit)
  // TODO:
  // 1) Visit "/register"
  // 2) Choose Gender (radio) if present (e.g., input#gender-male or #gender-female)
  // 3) Type First name, Last name, Email
  // 4) Type Password + Confirm Password
  // 5) Assert that each input has the value you typed
  // Expected output:
  // - All fields contain the typed values (validated by should('have.value', ...))
});
