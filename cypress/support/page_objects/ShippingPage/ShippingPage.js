import { ShippingPageLocators } from './SippingLocators/ShippingLocators';

class ShippingPage {

    OpenShippingAddresses() {
        cy.wait(10000);
        cy.xpath(ShippingPageLocators.openShippingAddresses)
          .should('be.visible')
          .click()
          .then(($el) => {
              console.log(`Clicked on OpenShippingAddresses with XPath: ${ShippingPageLocators.openShippingAddresses}`);
              console.log(`Element state: ${$el}`);
          });
    }

    SelectShippingAddress() {
        cy.wait(1500);
        cy.xpath(ShippingPageLocators.selectShippingAddress)
          .should('be.visible')
          .click()
          .then(($el) => {
              console.log(`Clicked on SelectShippingAddress with XPath: ${ShippingPageLocators.selectShippingAddress}`);
              console.log(`Element state: ${$el}`);
          });
    }

    AcceptShippingAddress() {
        cy.xpath(ShippingPageLocators.acceptShippingAddress)
          .should('be.visible')
          .click()
          .then(($el) => {
              console.log(`Clicked on AcceptShippingAddress with XPath: ${ShippingPageLocators.acceptShippingAddress}`);
              console.log(`Element state: ${$el}`);
          });
        cy.wait(7000);
    }

    OpenDeliverAddress() {
        cy.wait(3000);
        cy.xpath(ShippingPageLocators.openDeliverAddress)
          .should('be.visible')
          .click()
          .then(($el) => {
              console.log(`Clicked on OpenDeliverAddress with XPath: ${ShippingPageLocators.openDeliverAddress}`);
              console.log(`Element state: ${$el}`);
          });
    }

    SelectDeliveryMethod() {
        cy.wait(3000);
        cy.xpath(ShippingPageLocators.selectDeliveryMethod)
          .should('be.visible')
          .click()
          .then(($el) => {
              console.log(`Clicked on SelectDeliveryMethod with XPath: ${ShippingPageLocators.selectDeliveryMethod}`);
              console.log(`Element state: ${$el}`);
          });
    }

    OpenAddressList() {
        cy.wait(3000);
        cy.xpath(ShippingPageLocators.openAddressList)
          .should('not.have.css', 'pointer-events', 'none')
          .click({ force: true })
          .then(($el) => {
              console.log(`Clicked on OpenAddressList with XPath: ${ShippingPageLocators.openAddressList}`);
              console.log(`Element state: ${$el}`);
          });
    }

    SelectEqualTypeOfShippingAddress() {
        cy.xpath(ShippingPageLocators.selectEqualTypeOfShippingAddress)
          .should('be.visible')
          .click()
          .then(($el) => {
              console.log(`Clicked on SelectEqualTypeOfShippingAddress with XPath: ${ShippingPageLocators.selectEqualTypeOfShippingAddress}`);
              console.log(`Element state: ${$el}`);
          });
    }

    AcceptShippingPreference() {
        cy.xpath(ShippingPageLocators.acceptShippingPreference)
          .should('be.visible')
          .click()
          .then(($el) => {
              console.log(`Clicked on AcceptShippingPreference with XPath: ${ShippingPageLocators.acceptShippingPreference}`);
              console.log(`Element state: ${$el}`);
          });
        cy.wait(3500);
    }

    OpenDeliveryMethod() {
        cy.xpath(ShippingPageLocators.openDeliveryMethod)
          .first()
          .should('be.visible')
          .click()
          .then(($el) => {
              console.log(`Clicked on OpenDeliveryMethod with XPath: ${ShippingPageLocators.openDeliveryMethod}`);
              console.log(`Element state: ${$el}`);
          });
    }

    SelectDeliveryOption() {
        cy.xpath(ShippingPageLocators.selectDeliveryOption)
          .should('be.visible')
          .click()
          .then(($el) => {
              console.log(`Clicked on SelectDeliveryOption with XPath: ${ShippingPageLocators.selectDeliveryOption}`);
              console.log(`Element state: ${$el}`);
          });
        cy.wait(4000);
    }

    GoNextToBillingPage() {
        cy.xpath(ShippingPageLocators.goNextToBillingPage)
          .should('be.visible')
          .click()
          .then(($el) => {
              console.log(`Clicked on GoNextToBillingPage with XPath: ${ShippingPageLocators.goNextToBillingPage}`);
              console.log(`Element state: ${$el}`);
          });
    }
}

export default ShippingPage;
