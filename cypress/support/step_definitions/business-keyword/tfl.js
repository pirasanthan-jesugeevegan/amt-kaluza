Given('A journey from {string} to {string} via {string}', (from, to, mode) => {
  cy.getJourneyResults(from, to, mode);
});
