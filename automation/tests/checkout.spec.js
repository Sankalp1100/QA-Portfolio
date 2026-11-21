// Checkout tests for SauceDemo (end-to-end order flow)
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('Checkout', () => {
  let checkout;

  test.beforeEach(async ({ page }) => {
    await new LoginPage(page).loginAsStandardUser();
    const inventory = new InventoryPage(page);
    await inventory.addToCart('sauce-labs-backpack');
    await inventory.openCart();
    checkout = new CheckoutPage(page);
    await checkout.startCheckout();
  });

  test('TC_CHK_01: user can place an order end to end', async ({ page }) => {
    await checkout.fillInformation('Sankalp', 'QA', '201301');
    await expect(page).toHaveURL(/checkout-step-two/);
    await checkout.finish();
    await expect(checkout.completeHeader).toHaveText('Thank you for your order!');
  });

  test('TC_CHK_02: order total = item total + tax', async () => {
    await checkout.fillInformation('Sankalp', 'QA', '201301');
    const money = async (loc) => parseFloat((await loc.textContent()).split('$')[1]);
    const subtotal = await money(checkout.subtotal);
    const tax = await money(checkout.tax);
    const total = await money(checkout.total);
    expect(subtotal).toBe(29.99);
    expect(total).toBeCloseTo(subtotal + tax, 2);
  });

  test('TC_CHK_03: first name is required', async () => {
    await checkout.fillInformation('', 'QA', '201301');
    await expect(checkout.error).toContainText('First Name is required');
  });

  test('TC_CHK_04: last name is required', async () => {
    await checkout.fillInformation('Sankalp', '', '201301');
    await expect(checkout.error).toContainText('Last Name is required');
  });

  test('TC_CHK_05: postal code is required', async () => {
    await checkout.fillInformation('Sankalp', 'QA', '');
    await expect(checkout.error).toContainText('Postal Code is required');
  });

  test('TC_CHK_06: cancel goes back to the cart', async ({ page }) => {
    await checkout.cancelButton.click();
    await expect(page).toHaveURL(/cart\.html/);
  });
});
