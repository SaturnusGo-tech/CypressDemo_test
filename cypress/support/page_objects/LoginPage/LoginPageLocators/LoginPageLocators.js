// LoginPage Locators
// This object contains locators for elements on the Login Page.
export const LoginPageLocators = {
  // Input field for email during login
  EMAIL_INPUT: 'input[placeholder="Enter your email address"]',
  
  // Input field for password during login
  PASSWORD_INPUT: 'input[placeholder="Enter your password"]',
  
  // Button to submit the login form
  // Note: Using relative XPath for better resilience against UI changes
  LOGIN_BUTTON: '//span[text()="Log in"]/ancestor::button',
  
  // Locator for an error message during login failure
  // Note: Using relative XPath for better resilience against UI changes
  ERROR_MESSAGE: '//div[contains(@class, "error-class") and text()="Invalid login credentials"]'
};
