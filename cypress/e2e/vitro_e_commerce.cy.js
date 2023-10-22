// Импорт Page Objects
import LoginPage from '../support/page_objects/LoginPage/LoginPage';
import HomePage from '../support/page_objects/HomePage/HomePage';
import CartPage from '../support/page_objects/CartPage/CartPage';
import ShippingPage from '../support/page_objects/ShippingPage/ShippingPage';
import BillingPage from '../support/page_objects/BillingPage/BillingPage';
import GetBalancePopUp from '../support/page_objects/BillingPage/GetBalancePopUp/GetBalance';
import TestData from './Secret_variables/Test_data';

describe('Login and Post-Login Tests', function() {
  // Инициализация Page Objects
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const shippingPage = new ShippingPage();
  const billingPage = new BillingPage();
  const getBalancePopUp = new GetBalancePopUp();

  // Запускается перед каждым тестом
  beforeEach(() => {
    cy.clearCookies();  // Очистка всех cookies
    cy.clearLocalStorage();  // Очистка локального хранилища
  });

  // Основной тестовый сценарий
  it('Should login and then perform actions', function() {
    // Этап логина
    loginPage.visit();
    loginPage.fillEmail(TestData.email);
    loginPage.fillPassword(TestData.password);
    loginPage.clickLoginButton();

    // Проверка успешного входа
    cy.wait(6000);
    cy.url().should('include', '/home');

    // Действия на главной странице
    homePage.ClickCategoryItemButton();
    homePage.SelectCategoryItem_GI();
    homePage.OpenFiltersCollection();
    homePage.SelectCheckBoxPocketNurse();
    homePage.AcceptReference();
    homePage.SelectCategoryItemPN();
    homePage.OpenCart();

    // Проверка, что корзина не пуста
    //cartPage.getAndStoreCartValue();
    //expect(cartPage.cartValue).to.be.greaterThan(0);

    cartPage.OpenProceedCheckoutPage();

    // Действия на странице доставки
    shippingPage.OpenShippingAddresses();
    shippingPage.SelectShippingAddress();
    shippingPage.AcceptShippingAddress();
    shippingPage.OpenDeliverAddress();
    shippingPage.SelectDeliveryMethod();
    shippingPage.OpenAddressList();
    shippingPage.SelectEqualTypeOfShippingAddress();
    shippingPage.AcceptShippingPreference();
    shippingPage.OpenDeliveryMethod();
    shippingPage.SelectDeliveryOption();
    shippingPage.GoNextToBillingPage();

    // Действия на странице оплаты
    billingPage.OpenPaymentMethod();
    billingPage.SelectPaymentMethodCreditCard();
    billingPage.OpenBillingAddressList();
    billingPage.SelectPaymentAddress();
    billingPage.AcceptPaymentPreference();
    billingPage.OpemSupplierPocketNurseMethod();
    billingPage.SelectPocketNursePaymentMethod();
    billingPage.ReviewOrderButton();
    billingPage.PlaceOrderButton();
    billingPage.GoBackToCart();
    billingPage.PullBackPaymentButton();
    billingPage.PullBackPaymentMethodConfirm();

    // Выбор доступной карты в модальном окне
    getBalancePopUp.SelectAvailableCard();
    // Остальные методы вызову после фикса с iframe
  });
});
