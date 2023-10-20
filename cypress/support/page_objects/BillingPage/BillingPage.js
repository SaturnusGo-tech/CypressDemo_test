class BillingPage{
    OpenPaymentMethod(){
        cy.wait(1000);
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div[2]/button').click();

    }

    SelectPaymentMethodCreditCard(){
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div[2]/div/ul/li[1]/span').click();
        cy.wait(3000);
    }

    OpenBillingAddressList(){
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div/div[1]/div[1]/div[2]/div/p/button').click();
    }

    SelectPaymentAddress(){
        cy.xpath('/html/body/div[3]/div/div/div/div[2]/div/div/div[1]/table/tbody/tr[1]/td[3]/button').click();
        cy.wait(2500);
    }
    AcceptPaymentPreference(){
        cy.xpath('//*[@id="headlessui-dialog-14"]/div[2]/div/div/div[2]/button[3]').click();
        cy.wait(2000);
    }

    OpemSupplierPocketNurseMethod(){
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/button').click();
        cy.wait(1500);
    }
    SelectPocketNursePaymentMethod(){
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/div/ul/li/span').click();
        cy.wait(1500);
    }
    ReviewOrderButton(){
        cy.xpath('//*[@id="order-summary"]/div[2]/a').click();
        cy.wait(3500);
    }
    PlaceOrderButton(){
        cy.xpath('//*[@id="order-summary"]/div[2]/button').click();
        cy.wait(5500);
    }

    GoBackToCart(){
        cy.wait(4500)
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div[1]/ul/li').click();
        cy.wait(2500)
    }

    PullBackPaymentButton(){
        cy.xpath('//*[@id="app"]/div/div[4]/div/div/div/div/div[1]/div/button[1]').click();
        cy.wait(7500);
    }

    PullBackPaymentMethodConfirm(){
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div/div/div[2]/div[1]/div/div[2]/div[2]/div/div[2]/button').click();
        cy.wait(18000);
    }

}

export default BillingPage