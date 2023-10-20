class CartPage {
     getAndStoreCartValue() {
  cy.wait(2000);
  cy.xpath('//*[@id="products"]/div[2]')
    .invoke('text')
    .then((text) => {
      cy.wrap(text).as('cartValue');
    });
     }
     OpenProceedCheckoutPage(){
         cy.wait(1800);
         cy.xpath('//*[@id="order-summary"]/div[2]/a').click();
     }
}

export default CartPage;