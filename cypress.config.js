const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  env: {
    API_KEY: process.env.API_KEY,
  },
  e2e: {
    // baseUrl: 'https://www.mediawiki.org/w/api.php',
    baseUrl: 'https://api.external.citymapper.com',
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
    },
  },
});
