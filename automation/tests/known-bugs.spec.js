// Known bugs found with the 'problem_user' account.
// Each test REPRODUCES a bug: it passes while the bug is still there.
// If a test starts failing, the bug may be fixed -> retest and close the report.
// Bug details: bug-reports/SauceDemo_Bug_Reports.md
const { test, expect } = require('@playwright/test');
const { LoginPage, PASSWORD } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('Known bugs (problem_user) - reproduction checks', () => {
  let inventory;

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('problem_user', PASSWORD);
    inventory = new InventoryPage(page);
  });

  test('BUG-001 still present: all 6 products show the same image', async ({ page }) => {
    const sources = await page.locator('.inventory_item img').evaluateAll(
      (imgs) => imgs.map((img) => img.getAttribute('src'))
    );
    expect(sources).toHaveLength(6);
    expect(new Set(sources).size).toBe(1);
  });

  test('BUG-002 still present: sorting Z to A does not change the order', async () => {
    const before = await inventory.getNames();
    await inventory.sortBy('za');
    const after = await inventory.getNames();
    expect(after).toEqual(before);
    expect(after).not.toEqual([...after].sort().reverse());
  });

  test('BUG-003 still present: Add to cart does nothing for Sauce Labs Bolt T-Shirt', async () => {
    await inventory.addToCart('sauce-labs-bolt-t-shirt');
    await inventory.page.waitForTimeout(1000);
    await expect(inventory.cartBadge).toHaveCount(0);
  });

  test('BUG-004 still present: Last Name field does not keep typed text', async ({ page }) => {
    await inventory.addToCart('sauce-labs-backpack');
    await inventory.openCart();
    const checkout = new CheckoutPage(page);
    await checkout.startCheckout();
    await checkout.lastName.pressSequentially('QA');
    await expect(checkout.lastName).not.toHaveValue('QA');
  });
});
