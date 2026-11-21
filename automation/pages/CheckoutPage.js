// Page Object: cart page + the 3 checkout steps

class CheckoutPage {
  constructor(page) {
    this.page = page;
    // Cart
    this.cartItems = page.locator('.cart_item');
    this.cartItemNames = page.locator('.cart_item .inventory_item_name');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    // Step 1: your information
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
    this.error = page.locator('[data-test="error"]');
    // Step 2: overview
    this.subtotal = page.locator('.summary_subtotal_label');
    this.tax = page.locator('.summary_tax_label');
    this.total = page.locator('.summary_total_label');
    this.finishButton = page.locator('[data-test="finish"]');
    // Step 3: complete
    this.completeHeader = page.locator('.complete-header');
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

  async fillInformation(first, last, postal) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(postal);
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }
}

module.exports = { CheckoutPage };
