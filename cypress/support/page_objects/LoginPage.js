import AuthLogin from '../../support/navigation/AuthLogin';

// Define selectors as constants
const SELECTORS = {
  EMAIL_INPUT: 'input[placeholder="Enter your email address"]',
  PASSWORD_INPUT: 'input[placeholder="Enter your password"]',
  LOGIN_BUTTON: '//*[@id="app"]/div/div[4]/div/div[1]/div/div/div[1]/form/div[4]/button',
};

class LoginPage {
  visit() {
    AuthLogin.visitHomePage();
  }

  // Fill in the email field
  fillEmail(email) {
    cy.get(SELECTORS.EMAIL_INPUT).should('be.visible').type(email);
  }

  // Fill in the password field
  fillPassword(password) {
    cy.get(SELECTORS.PASSWORD_INPUT).should('be.visible').type(password);
  }

  // Click the login button
  clickLoginButton() {
    cy.xpath(SELECTORS.LOGIN_BUTTON).should('be.visible').click();
  }
}

export default LoginPage;
