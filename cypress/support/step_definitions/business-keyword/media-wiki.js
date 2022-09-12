Given('I send GET request to {string} generates a token', (param) => {
  cy.getLoginToken(param);
});

Given(
  'the user login as a test user with username {string} and password {string}',
  (username, password) => {
    cy.loginRequest(username, password);
    cy.getCsrfToken();
  }
);

Given('the user edits a wiki page {string}', (edit) => {
  cy.editRequest(edit);
});
