
# Step 24 - Install and Configure Cucumber for Cypress

## Goal
Prepare Cypress to run .feature files using:
- Gherkin syntax (Given / When / Then)
- @badeball/cypress-cucumber-preprocessor

This step covers:
- dependencies
- basic config
- folder structure

## 1. Install required packages --> Run these commands in the project root (where package.json lives):

npm install @badeball/cypress-cucumber-preprocessor 
            @bahmutov/cypress-esbuild-preprocessor 
            esbuild --save-dev 

These packages provide:
- Cucumber preprocessor integration
- esbuild based bundling for Cypress

## 2. Feature and step folders --> Recommended structure:

cypress/
  e2e/
    features/
      example/
        login.feature        // will be created later
    step-definitions/
      example/
        login.steps.js       // will be created later

For now, we only prepare the folders:
- `cypress/e2e/features/`
- `cypress/e2e/step-definitions/`

## 3. Update cypress.config.js --> Open `cypress.config.js` and update it.
Example minimal config for Cucumber integration (Cypress 10+):

const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Cucumber preprocessor
      await addCucumberPreprocessorPlugin(on, config);

      // Bundler with esbuild + cucumber plugin
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },

    specPattern: [
      'cypress/e2e/**/*.cy.js',
      'cypress/e2e/**/*.feature',
    ],
  },
});

Key points:
- `specPattern` includes both:
  - `.cy.js`
  - `.feature`
- `setupNodeEvents` integrates cucumber preprocessor and bundler

## 4. Configure cucumber preprocessor options file

Create file: `cypress-cucumber-preprocessor.config.js` in project root.
Content:

module.exports = {
  stepDefinitions: [
    'cypress/e2e/step-definitions/**/*.js',
  ],
  // optional: you can later add tags, messages, etc.
};

This tells the preprocessor: where to find step definition files.

## 5. Simple sanity check 
After installation and config: - run Cypress normally:
    - npx cypress open

You should still see your existing `.cy.js` tests and can run them.
Feature files will be added in the next step.

## 6. Summary of this step
You have:
- installed cucumber preprocessor + bundler
- updated cypress.config.js
- prepared folders for features and steps
- created cucumber preprocessor config


