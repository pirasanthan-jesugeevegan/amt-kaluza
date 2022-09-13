let logintoken;
let csrf_token;

Cypress.Commands.add('getLoginToken', (query) => {
  // getLoginToken
  cy.request({
    method: 'GET',
    url: `https://en.wikipedia.org/w/api.php?${query}`,
    failOnStatusCode: false,
  }).then(
    (response) => (logintoken = response?.body?.query?.tokens?.logintoken)
  );
});

Cypress.Commands.add('loginRequest', (username, password) => {
  // loginRequest

  const params_1 = {
    action: 'login',
    lgname: Cypress.env('MEDIA_WIKI_USERNAME') || username,
    lgpassword: Cypress.env('MEDIA_WIKI_PASSWORD') || password,
    lgtoken: logintoken,
    format: 'json',
  };

  cy.request({
    method: 'POST',
    url: `https://en.wikipedia.org/w/api.php`,
    form: true,
    body: params_1,
    failOnStatusCode: false,
  }).then((response) => cy.writeFile('cypress/fixtures/data.json', response));
});

Cypress.Commands.add('getCsrfToken', () => {
  // getCsrfToken
  cy.request({
    method: 'GET',
    url: `https://en.wikipedia.org/w/api.php?action=query&meta=tokens&format=json`,
    failOnStatusCode: false,
  }).then((response) => (csrf_token = response.body.query.tokens.csrftoken));
});

Cypress.Commands.add('editRequest', () => {
  // editRequest
  var params_3 = {
    action: 'edit',
    title: 'Project:Sandbox',
    appendtext: 'test edit',
    token: csrf_token,
    format: 'json',
  };

  cy.request({
    method: 'POST',
    url: `https://en.wikipedia.org/w/api.php`,
    form: true,
    body: params_3,
    failOnStatusCode: false,
  }).then((response) => console.log(response));
});
