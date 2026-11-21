// Page Object: SauceDemo login page

// Public demo accounts shown on https://www.saucedemo.com
const USERS = {
  standard: 'standard_user',
  lockedOut: 'locked_out_user',
};
const PASSWORD = process.env.SAUCE_PASSWORD || 'secret_sauce';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.error = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async loginAsStandardUser() {
    await this.goto();
    await this.login(USERS.standard, PASSWORD);
  }
}

module.exports = { LoginPage, USERS, PASSWORD };
