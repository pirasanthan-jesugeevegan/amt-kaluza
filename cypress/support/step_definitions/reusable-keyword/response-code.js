Given('I get response code {string}', (code) => {
  cy.readFile('cypress/fixtures/data.json').then((response) => {
    assert.equal(response.status, code);
  });
});
