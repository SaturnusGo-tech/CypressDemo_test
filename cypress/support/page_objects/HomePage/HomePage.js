import { HomePageLocators } from './HomePageLocators/HomePageLocators';

class HomePage {

  ClickCategoryItemButton() {
    cy.wait(5000);
    cy.get(HomePageLocators.categoryItemButton)
      .click()
      .then(($el) => {
          console.log(`Clicked on Category Item Button`);
          console.log(`Element state: ${$el}`);
      });
  }

  SelectCategoryItem_GI(){
    cy.wait(3000);
    cy.get(HomePageLocators.categoryItem_GI)
      .first()
      .click()
      .then(($el) => {
          console.log(`Selected Category Item GI`);
          console.log(`Element state: ${$el}`);
      });
  }

  OpenFiltersCollection(){
    cy.wait(1500);
    cy.xpath(HomePageLocators.openFiltersCollection)
      .click()
      .then(($el) => {
          console.log(`Opened Filters Collection`);
          console.log(`Element state: ${$el}`);
      });
  }

  SelectCheckBoxPocketNurse(){
    cy.wait(1500);
    cy.xpath(HomePageLocators.checkBoxPocketNurse)
      .click()
      .then(($el) => {
          console.log(`Selected CheckBox PocketNurse`);
          console.log(`Element state: ${$el}`);
      });
  }

  AcceptReference(){
    cy.wait(2500);
    cy.xpath(HomePageLocators.acceptReference)
      .click()
      .then(($el) => {
          console.log(`Accepted Reference`);
          console.log(`Element state: ${$el}`);
      });
  }

  SelectCategoryItemPN(){
    cy.wait(1500);
    cy.get(HomePageLocators.categoryItemPN)
      .first()
      .click()
      .then(($el) => {
          console.log(`Selected Category Item PN`);
          console.log(`Element state: ${$el}`);
      });
  }

  OpenCart(){
    cy.wait(1500);
    cy.xpath(HomePageLocators.openCart)
      .click()
      .then(($el) => {
          console.log(`Opened Cart`);
          console.log(`Element state: ${$el}`);
      });
  }
}

export default HomePage;
