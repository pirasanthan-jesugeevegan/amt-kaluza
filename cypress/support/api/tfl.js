Cypress.Commands.add('getJourneyResults', (from, to, mode) => {
  // Get journey results
  cy.request({
    method: 'GET',
    url: `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}?mode=${mode}`,
    failOnStatusCode: false,
  }).then((response) => cy.writeFile('cypress/fixtures/data.json', response));
});
