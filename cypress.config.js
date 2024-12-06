const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x8eim8',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },
});
