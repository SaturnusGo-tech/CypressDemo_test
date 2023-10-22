import AuthLogin from '../../../support/navigation/AuthLogin';
import { LoginPageLocators } from './LoginPageLocators/LoginPageLocators';

class LoginPage {

  visit() {
    AuthLogin.visitHomePage();
    console.log('Visited Home Page');
  }

 // Fill in the email field
fillEmail(email) {
  return cy.get(LoginPageLocators.EMAIL_INPUT)
    .should('be.visible')
    .type(email)
    .then(($el) => {
      console.log(`Filled email field with: ${email}`);
      console.log(`Element state: ${$el}`);
      return cy.wrap($el);
    });
}

// Fill in the password field
fillPassword(password) {
  return cy.get(LoginPageLocators.PASSWORD_INPUT)
    .should('be.visible')
    .type(password)
    .then(($el) => {
      console.log(`Filled password field with: ${password}`);
      console.log(`Element state: ${$el}`);
      return cy.wrap($el);
    });
}


  // Click the login button
  clickLoginButton() {
    cy.xpath(LoginPageLocators.LOGIN_BUTTON)
      .should('be.visible')
      .click()
      .then(($el) => {
          console.log(`Clicked on Login Button with XPath: ${LoginPageLocators.LOGIN_BUTTON}`);
          console.log(`Element state: ${$el}`);
      });
  }
}

export default LoginPage;
