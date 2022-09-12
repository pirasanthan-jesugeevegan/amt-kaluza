let fromLatLag;
let toLatLag;

Given('A destination from {string} to {string}', (from, to) => {
  // Using the Post code and converting it to Longitude and Latitude
  cy.getLocation(from).then((response) => (fromLatLag = response));
  cy.getLocation(to).then((response) => (toLatLag = response));
});

Given('I send GET request to {string}', (url) => {
  // Forming a params string using the above response
  let params = `start=${fromLatLag}&end=${toLatLag}`;
  cy.getDirection(url, params);
});
