let directionRes;
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
  cy.getDirection(url, params).then((response) => {
    directionRes = response;
  });
});

Given('I get response code {string}', (code) => {
  assert.equal(directionRes.status, code);
});

Given('I get response message {string}', (message) => {
  console.log(directionRes);
  assert.equal(directionRes.body.message, message);
});
