Given('I get response body field of {string}', (field) => {
  cy.readFile('cypress/fixtures/data.json').then((response) => {
    assert.exists(response.body, field);
  });
});
