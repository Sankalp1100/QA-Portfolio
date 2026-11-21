// Login and logout tests for SauceDemo
const { test, expect } = require('@playwright/test');
const { LoginPage, USERS, PASSWORD } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe('Login', () => {
  let login;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.goto();
  });

  test('TC_LOGIN_01: valid user can log in', async ({ page }) => {
    await login.login(USERS.standard, PASSWORD);
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(new InventoryPage(page).title).toHaveText('Products');
  });

  test('TC_LOGIN_02: locked out user sees an error', async () => {
    await login.login(USERS.lockedOut, PASSWORD);
    await expect(login.error).toContainText('Sorry, this user has been locked out.');
  });

  test('TC_LOGIN_03: wrong password shows an error', async () => {
    await login.login(USERS.standard, 'wrong_password');
    await expect(login.error).toContainText('Username and password do not match');
  });

  test('TC_LOGIN_04: empty username is not allowed', async () => {
    await login.login('', PASSWORD);
    await expect(login.error).toContainText('Username is required');
  });

  test('TC_LOGIN_05: empty password is not allowed', async () => {
    await login.login(USERS.standard, '');
    await expect(login.error).toContainText('Password is required');
  });

  test('TC_LOGIN_06: user can log out', async ({ page }) => {
    await login.login(USERS.standard, PASSWORD);
    await new InventoryPage(page).logout();
    await expect(login.loginButton).toBeVisible();
  });

  test('TC_LOGIN_07: products page is blocked without login', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(login.error).toContainText('when you are logged in');
  });
});
