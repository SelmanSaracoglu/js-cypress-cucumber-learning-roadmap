
## Cypress + Cucumber Setup (Dependencies, Config, Folder Structure)

This step prepares your Cypress project to run `.feature` files with:
- Gherkin syntax (Given / When / Then)
- `@badeball/cypress-cucumber-preprocessor`
- `esbuild` bundling via `@bahmutov/cypress-esbuild-preprocessor`

The goal is setup only (no real feature tests yet).

---

## 1) Install required packages

Run in the project root (where `package.json` is):

~~~bash
npm install --save-dev \
  @badeball/cypress-cucumber-preprocessor \
  @bahmutov/cypress-esbuild-preprocessor \
  esbuild
~~~

What each package does:
- `@badeball/cypress-cucumber-preprocessor`: enables `.feature` files + step definitions
- `@bahmutov/cypress-esbuild-preprocessor` + `esbuild`: fast bundling + preprocessing support

---

## 2) Create a clean BDD folder structure

Recommended structure (keep it simple and consistent):

~~~text
cypress/
  e2e/
    features/
      example/
        login.feature
    step-definitions/
      example/
        login.steps.js
~~~

For this step, create only these folders:
- `cypress/e2e/features/`
- `cypress/e2e/step-definitions/`

Later you can organize by domain:
- `features/auth/`, `features/cart/`
- `step-definitions/auth/`, `step-definitions/cart/`

---

## 3) Update cypress.config.js for Cucumber integration

This is the minimal Cypress 10+ setup that wires:
- cucumber preprocessor plugin
- esbuild bundler
- specPattern to include `.feature`

~~~js
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },

    specPattern: [
      "cypress/e2e/**/*.cy.js",
      "cypress/e2e/**/*.feature",
    ],
  },
});
~~~

Key points:
- `setupNodeEvents()` registers the plugin and bundler
- `specPattern` must include `.feature` or Cypress won’t list your feature files

---

## 4) Configure step definitions location

Create: `cypress-cucumber-preprocessor.config.js` in the project root.

~~~js
module.exports = {
  stepDefinitions: ["cypress/e2e/step-definitions/**/*.js"],
};
~~~

This tells the preprocessor where to find step definitions.

---

## 5) Sanity check (after setup)

Run Cypress:

~~~bash
npx cypress open
~~~

Expected:
- your existing `.cy.js` tests still show up and run normally
- `.feature` tests will appear only after you add actual feature files

---

## Traceability (MDR)

At setup stage, traceability is about enforcing a future standard.

Standard we will use going forward:
- Scenario naming: `AUT-### | <intent>`
- Tags include a requirement reference:
  - `@US-XXX-001` or `@AC-XXX-001`
- Pack tags:
  - `@smoke @regression @ui @api @negative`

Example (later, in a feature file):

~~~gherkin
@US-LOGIN-001 @smoke @ui
Scenario: AUT-001 | Open login page
  Given I am on the home page
  When I navigate to the login page
  Then I should see the login page
~~~

Traceability table template (to be used once scenarios exist):

| Req/US/AC ID | Feature | Scenario | Automation ID | Tags | Evidence |
|---|---|---|---|---|---|
| US-LOGIN-001 | Login | Open login page | AUT-001 | @smoke @ui | Cypress run output |

---

## Why this matters for testers

- Enables BDD collaboration: business-readable scenarios + executable automation.
- Makes it easier to keep test intent readable while code stays maintainable.
- Allows tagging for smoke/regression and requirement traceability.
- Creates a clean repo structure that scales.

---

## Common mistakes / gotchas

- Installing packages but forgetting to wire `setupNodeEvents()` in `cypress.config.js`.
- Missing `.feature` in `specPattern` (feature files won’t be discovered).
- Putting step definitions in random folders without configuring `stepDefinitions`.
- Mixing too many patterns early (keep structure simple first).
- Not standardizing tags/IDs early → traceability becomes chaos later.

---

## Missing but important

### baseUrl (recommended)
If you add in `cypress.config.js`:
~~~js
baseUrl: "https://demowebshop.tricentis.com"
~~~
Then your steps can use:
~~~js
cy.visit("/login");
~~~
instead of full URLs.
This keeps tests cleaner and easier to move between environments.
