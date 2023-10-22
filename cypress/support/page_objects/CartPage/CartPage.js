import { CartPageLocators } from './CartPageLocators/CartPageLocators';

class CartPage {
  getAndStoreCartValue() {
    cy.wait(2000);
    cy.xpath(CartPageLocators.cartValue)
      .invoke('text')
      .then((text) => {
        cy.wrap(text).as('cartValue');
      });
  }

  OpenProceedCheckoutPage(){
    cy.wait(1800);
    cy.xpath(CartPageLocators.proceedCheckoutButton).click();
  }
}

export default CartPage;
