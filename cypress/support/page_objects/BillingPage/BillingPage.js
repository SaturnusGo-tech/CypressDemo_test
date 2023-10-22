import { BillingPageLocators } from './BillingPageLocators/BillingPageLocators';

class BillingPage {

  OpenPaymentMethod() {
    cy.wait(1000);
    cy.xpath(BillingPageLocators.OpenPaymentMethod)
      .click()
      .then(($el) => {
          console.log(`Opened Payment Method`);
          console.log(`Element state: ${$el}`);
      });
  }

  SelectPaymentMethodCreditCard() {
    cy.xpath(BillingPageLocators.SelectPaymentMethodCreditCard)
      .click()
      .then(($el) => {
          console.log(`Selected Payment Method: Credit Card`);
          console.log(`Element state: ${$el}`);
      });
    cy.wait(3000);
  }

  OpenBillingAddressList() {
    cy.xpath(BillingPageLocators.OpenBillingAddressList)
      .click()
      .then(($el) => {
          console.log(`Opened Billing Address List`);
          console.log(`Element state: ${$el}`);
      });
  }

  SelectPaymentAddress() {
    cy.xpath(BillingPageLocators.SelectPaymentAddress)
      .click()
      .then(($el) => {
          console.log(`Selected Payment Address`);
          console.log(`Element state: ${$el}`);
      });
    cy.wait(2500);
  }

  AcceptPaymentPreference() {
    cy.xpath(BillingPageLocators.AcceptPaymentPreference)
      .click()
      .then(($el) => {
          console.log(`Accepted Payment Preference`);
          console.log(`Element state: ${$el}`);
      });
    cy.wait(2000);
  }

  OpemSupplierPocketNurseMethod() {
    cy.xpath(BillingPageLocators.OpemSupplierPocketNurseMethod)
      .click()
      .then(($el) => {
          console.log(`Opened Supplier Pocket Nurse Method`);
          console.log(`Element state: ${$el}`);
      });
    cy.wait(1500);
  }

  SelectPocketNursePaymentMethod() {
    cy.xpath(BillingPageLocators.SelectPocketNursePaymentMethod)
      .click()
      .then(($el) => {
          console.log(`Selected Pocket Nurse Payment Method`);
          console.log(`Element state: ${$el}`);
      });
    cy.wait(1500);
  }

  ReviewOrderButton() {
    cy.xpath(BillingPageLocators.ReviewOrderButton)
      .click()
      .then(($el) => {
          console.log(`Clicked Review Order Button`);
          console.log(`Element state: ${$el}`);
      });
    cy.wait(3500);
  }

  PlaceOrderButton() {
    cy.xpath(BillingPageLocators.PlaceOrderButton)
      .click()
      .then(($el) => {
          console.log(`Clicked Place Order Button`);
          console.log(`Element state: ${$el}`);
      });
    cy.wait(5500);
  }

  GoBackToCart() {
    cy.wait(4500);
    cy.xpath(BillingPageLocators.GoBackToCart)
      .click()
      .then(($el) => {
          console.log(`Went Back To Cart`);
          console.log(`Element state: ${$el}`);
      });
    cy.wait(2500);
  }

  PullBackPaymentButton() {
    cy.xpath(BillingPageLocators.PullBackPaymentButton)
      .click()
      .then(($el) => {
          console.log(`Pulled Back Payment`);
          console.log(`Element state: ${$el}`);
      });
    cy.wait(7500);
  }

  PullBackPaymentMethodConfirm() {
    cy.xpath(BillingPageLocators.PullBackPaymentMethodConfirm)
      .click()
      .then(($el) => {
          console.log(`Confirmed Pulling Back Payment Method`);
          console.log(`Element state: ${$el}`);
      });
    cy.wait(18000);
  }
}

export default BillingPage;
