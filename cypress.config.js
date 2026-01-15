const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demowebshop.tricentis.com",

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

    specPattern: ["cypress/e2e/**/*.cy.js", "cypress/e2e/**/*.feature"],

    // Optional but nice for stability
    retries: {
      runMode: 1,
      openMode: 0,
    },

    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
