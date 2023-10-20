class HomePage {
  ClickCategoryItemButton() {
    cy.wait(5000);
    cy.get('img[alt="Education"]').click();
  }
  SelectCategoryItem_GI(){
    cy.wait(3000);
    cy.get('.vc-button--outline--primary').first().click();

  }

  OpenFiltersCollection(){
    cy.wait(1500);
    cy.xpath('//*[@id="app"]/div/div[4]/div/div/div/div/div/div[3]/button').click();
  }
  SelectCheckBoxPocketNurse(){
    cy.wait(1500);
    cy.xpath('/html/body/div[4]/div[2]/div[1]/div[2]/div/div/label[4]').click();
  }

  AcceptReference(){
    cy.wait(2500);
    cy.xpath('/html/body/div[4]/div[3]/div/button[2]').click();
  }

  SelectCategoryItemPN(){
    cy.wait(1500);
    cy.get('.vc-button.vc-button--size--sm.vc-button--outline--primary').first().click();
  }

  OpenCart(){
    cy.wait(1500);
    cy.xpath('//*[@id="app"]/div/div[1]/div[1]/div[2]/a[2]/span').click();
  }

}

export default HomePage;
