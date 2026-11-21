// Page Object: SauceDemo products (inventory) page

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.items = page.locator('.inventory_item');
    this.itemNames = page.locator('.inventory_item_name');
    this.itemPrices = page.locator('.inventory_item_price');
    this.sortDropdown = page.locator('.product_sort_container');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  // slug example: 'sauce-labs-backpack'
  async addToCart(slug) {
    await this.page.locator(`[data-test="add-to-cart-${slug}"]`).click();
  }

  async removeFromCart(slug) {
    await this.page.locator(`[data-test="remove-${slug}"]`).click();
  }

  // value: 'az' | 'za' | 'lohi' | 'hilo'
  async sortBy(value) {
    await this.sortDropdown.selectOption(value);
  }

  async getPrices() {
    const texts = await this.itemPrices.allTextContents();
    return texts.map((t) => parseFloat(t.replace('$', '')));
  }

  async getNames() {
    return this.itemNames.allTextContents();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}

module.exports = { InventoryPage };
