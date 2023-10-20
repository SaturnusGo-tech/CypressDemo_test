class ShippingPage{

    OpenShippingAddresses(){
        cy.wait(10000);
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div[1]/div[1]/div[2]/div/p/button').click();
    }

    SelectShippingAddress(){
        cy.wait(1500);
        cy.xpath('//*[@id="headlessui-dialog-2"]/div[2]/div/div/div[1]/table/tbody/tr[1]/td[3]/button').click();
    }
    AcceptShippingAddress(){
        cy.xpath('//*[@id="headlessui-dialog-2"]/div[2]/div/div/div[2]/button[3]').click();
        cy.wait(7000)
    }

    OpenDeliverAddress(){
        cy.wait(3000)
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div[1]/div[2]/div[2]/button/span/span').click();
    }

    SelectDeliveryMethod(){
        cy.wait(3000)
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div[1]/div[2]/div[2]/div/ul/li/span').click();
    }
     OpenAddressList(){
        cy.wait(3000)
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div[1]/div[1]/div[2]/div/p/button').click();
    }

    SelectEqualTypeOfShippingAddress(){
        cy.xpath('//*[@id="headlessui-dialog-8"]/div[2]/div/div/div[1]/table/tbody/tr[1]/td[3]/button').click();
    }

    AcceptShippingPreference(){
        cy.xpath('//*[@id="headlessui-dialog-8"]/div[2]/div/div/div[2]/button[3]').click();
        cy.wait(3500);

    }

    OpenDeliveryMethod(){
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[2]/button').first().click();
    }
    SelectDeliveryOption(){
        cy.xpath('//*[@id="app"]/div/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[2]/div/ul/li[1]/span').click();
        cy.wait(4000);
    }

    GoNextToBillingPage(){
        cy.xpath('//*[@id="order-summary"]/div[2]/a').click();
    }
}
export default ShippingPage