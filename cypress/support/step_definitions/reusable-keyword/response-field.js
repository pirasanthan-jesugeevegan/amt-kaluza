Given('I get response body field of {string}', (field) => {
  cy.readFile('cypress/fixtures/data.json').then((response) => {
    assert.exists(response.body, field);
  });
});

Given('I get failed login response {string}', (value) => {
  cy.readFile('cypress/fixtures/data.json').then((response) => {
    assert.equal(response.body.login.reason, value);
  });
});
