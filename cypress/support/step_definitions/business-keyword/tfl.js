Given('A journey from {string} to {string} via {string}', (from, to, mode) => {
  // Using the Post code and converting it to Longitude and Latitude
  cy.getJourneyResults(from, to, mode);
});
