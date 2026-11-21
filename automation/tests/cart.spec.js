// Products, sorting and cart tests for SauceDemo
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('Products and cart', () => {
  let inventory;

  test.beforeEach(async ({ page }) => {
    await new LoginPage(page).loginAsStandardUser();
    inventory = new InventoryPage(page);
  });

  test('TC_PROD_01: products page shows 6 products', async () => {
    await expect(inventory.items).toHaveCount(6);
  });

  test('TC_PROD_02: sort by price low to high', async () => {
    await inventory.sortBy('lohi');
    const prices = await inventory.getPrices();
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });

  test('TC_PROD_03: sort by price high to low', async () => {
    await inventory.sortBy('hilo');
    const prices = await inventory.getPrices();
    expect(prices).toEqual([...prices].sort((a, b) => b - a));
  });

  test('TC_PROD_04: sort by name Z to A', async () => {
    await inventory.sortBy('za');
    const names = await inventory.getNames();
    expect(names).toEqual([...names].sort().reverse());
  });

  test('TC_CART_01: adding an item updates the cart badge', async () => {
    await inventory.addToCart('sauce-labs-backpack');
    await expect(inventory.cartBadge).toHaveText('1');
  });

  test('TC_CART_02: adding two items shows 2 in the badge', async () => {
    await inventory.addToCart('sauce-labs-backpack');
    await inventory.addToCart('sauce-labs-bike-light');
    await expect(inventory.cartBadge).toHaveText('2');
  });

  test('TC_CART_03: removing the item clears the badge', async () => {
    await inventory.addToCart('sauce-labs-backpack');
    await inventory.removeFromCart('sauce-labs-backpack');
    await expect(inventory.cartBadge).toHaveCount(0);
  });

  test('TC_CART_04: cart lists the added items', async ({ page }) => {
    await inventory.addToCart('sauce-labs-backpack');
    await inventory.addToCart('sauce-labs-bike-light');
    await inventory.openCart();
    const cart = new CheckoutPage(page);
    await expect(cart.cartItemNames).toHaveText(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
  });

  test('TC_CART_05: cart is kept after a page reload', async ({ page }) => {
    await inventory.addToCart('sauce-labs-backpack');
    await page.reload();
    await expect(inventory.cartBadge).toHaveText('1');
  });
});
