Cypress.Commands.add('editWikiPage', (page) => {
  // Get all festivals

  cy.request({
    method: 'POST',
    url: '?action=query&format=json&meta=tokens&type=login',
  }).then((response) => {
    expect(response.status).to.eq(200);
    console.log(response.body.query.tokens.logintoken);
    cy.request({
      method: 'POST',
      url: `?action=login&lgname=KaluzaTest@kaluza&lgpassword=i88rgfoi5qnf409jqkg1ngtell3roc46&lgtoken=${response.body.query.tokens.logintoken}&format=json`,
    }).then((response) => {
      console.log(response);
    });
  });
});
