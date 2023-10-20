const radioBtnSelector = 'button.jss36.jss53[role="radio"][aria-checked="true"]';
const confirmButtonXPath = '/html/body/div[2]/div[3]/div/div/div/section/div[2]/button';

/**
 * Class representing the operations for getting balance pop-up.
 */
class GetBalancePopUp {

  /**
   * Select the first available card.
   */
SelectAvailableCard() {
    cy.get('div.MuiDialog-paper').within(() => {
      cy.contains('span', 'Credit Card').click();
    });
  }


  /**
   * Accept the card preference.
   */
  AcceptCardPreference() {
    cy.xpath(confirmButtonXPath).click();
    cy.wait(2000);  // Consider replacing with dynamic wait
  }

  /**
   * Confirm the preference.
   */
  ConfirmPreferenceButton() {
    cy.wait(2000);  // Consider replacing with dynamic wait
    cy.xpath(confirmButtonXPath).click();
  }
}

export default GetBalancePopUp;
