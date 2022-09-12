Cypress.Commands.add('getDirection', (url, params) => {
  // Get Direction
  console.log(Cypress.env('API_KEY'));
  cy.request({
    method: 'GET',
    url: `${url}?${params}`,
    headers: {
      'Citymapper-Partner-Key': Cypress.env('API_KEY'),
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add('getLocation', (postcode) => {
  // Get Longitude and Latitude for a location
  cy.request({
    method: 'GET',
    url: `https://api.postcodes.io/postcodes/${postcode}`,
  }).then((response) => {
    expect(response.status).to.eq(200);
    const latLng = `${response.body.result.latitude},${response.body.result.longitude}`;
    return latLng;
  });
});
