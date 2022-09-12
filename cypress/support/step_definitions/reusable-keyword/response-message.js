Given('I get response message {string}', (message) => {
  cy.readFile('cypress/fixtures/data.json').then((response) => {
    assert.equal(response.body.message, message);
  });
});
