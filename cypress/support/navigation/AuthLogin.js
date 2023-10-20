class AuthLogin {
  visitHomePage() {
    cy.visit('https://qa-opus.omniapartners.com/', {failOnStatusCode: false, timeout: 10000});
  }
}

export default new AuthLogin();
