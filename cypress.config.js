
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