const { defineConfig } = require('cypress');
const fs = require('fs-extra');
const cucumber = require('cypress-cucumber-preprocessor').default;
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  env: {
    API_KEY: process.env.API_KEY,
  },
  e2e: {
    baseUrl: 'https://api.external.citymapper.com',
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
      on('after:run', (results) => {
        if (results) {
          fs.mkdirSync('cypress/.run', { recursive: true });
          fs.writeFile('cypress/.run/results.json', JSON.stringify(results));
        }
      });
    },
  },
});
