const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'memowo-fe-bmeed5dkbpcre6e6.canadacentral-01.azurewebsites.net',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
