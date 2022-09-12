Cypress.Commands.add('getDirection', (url, params) => {
  // Get Direction
  console.log(Cypress.env('API_KEY'));
  cy.request({
    method: 'GET',
    url: `https://api.external.citymapper.com/${url}?${params}`,
    headers: {
      'Citymapper-Partner-Key': Cypress.env('API_KEY'),
    },
    failOnStatusCode: false,
  }).then((response) => cy.writeFile('cypress/fixtures/data.json', response));
});

Cypress.Commands.add('getLocation', (postcode) => {
  // Get Longitude and Latitude for a location
  cy.request({
    method: 'GET',
    url: `https://api.postcodes.io/postcodes/${postcode}`,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
    if (response.status === 200) {
      const latLng = `${response.body.result.latitude},${response.body.result.longitude}`;
      return latLng;
    } else {
      return response;
    }
  });
});
