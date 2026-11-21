# Test Cases – SauceDemo

31 test cases for https://www.saucedemo.com covering login, products, cart, checkout and mobile.
Cases marked **Automated: Yes** run in the [Playwright suite](../automation) on every push (desktop + mobile).

**Summary:** 16 positive · 7 negative · 2 edge · 3 security · 3 UI — 24 automated

| Module | ID | Title | Precondition | Steps | Expected result | Type | Priority | Automated |
|---|---|---|---|---|---|---|---|---|
| Login | TC_LOGIN_01 | Valid login | On login page | Enter `standard_user` / `secret_sauce`, click Login | Products page opens, title "Products" | Positive | High | Yes |
| Login | TC_LOGIN_02 | Locked out user | On login page | Log in as `locked_out_user` | Error: "Sorry, this user has been locked out." | Negative | High | Yes |
| Login | TC_LOGIN_03 | Wrong password | On login page | Valid username + wrong password | Error: "Username and password do not match any user" | Negative | High | Yes |
| Login | TC_LOGIN_04 | Empty username | On login page | Leave username empty, enter password, click Login | Error: "Username is required" | Negative | Medium | Yes |
| Login | TC_LOGIN_05 | Empty password | On login page | Enter username, leave password empty | Error: "Password is required" | Negative | Medium | Yes |
| Login | TC_LOGIN_06 | Logout | Logged in | Menu → Logout | Login page is shown | Positive | High | Yes |
| Login | TC_LOGIN_07 | Page needs login | Logged out | Open /inventory.html directly | Redirect to login with "you can only access ... when you are logged in" | Security | High | Yes |
| Login | TC_LOGIN_08 | Error message can be closed | Login error is shown | Click the X on the error | Error disappears, red icons removed | UI | Low | No |
| Login | TC_LOGIN_09 | Password is masked | On login page | Type in the password field | Characters are hidden | Security | Medium | No |
| Products | TC_PROD_01 | Product list | Logged in | Open Products page | 6 products with name, description, price, image, Add to cart | Positive | High | Yes |
| Products | TC_PROD_02 | Sort price low to high | Logged in | Sort → Price (low to high) | Prices in ascending order | Positive | Medium | Yes |
| Products | TC_PROD_03 | Sort price high to low | Logged in | Sort → Price (high to low) | Prices in descending order | Positive | Medium | Yes |
| Products | TC_PROD_04 | Sort name Z to A | Logged in | Sort → Name (Z to A) | Names in reverse alphabetical order | Positive | Medium | Yes |
| Products | TC_PROD_05 | Product details | Logged in | Click a product name | Details page with same name, price and image; Back to products works | Positive | Medium | No |
| Products | TC_PROD_06 | Images match products | Logged in | Compare each image with its product name | Every product has its own correct image | UI | Low | Yes (BUG-001) |
| Cart | TC_CART_01 | Add one item | Logged in | Add to cart on Backpack | Badge shows 1, button changes to Remove | Positive | High | Yes |
| Cart | TC_CART_02 | Add two items | Logged in | Add Backpack and Bike Light | Badge shows 2 | Positive | High | Yes |
| Cart | TC_CART_03 | Remove item | 1 item in cart | Click Remove | Badge disappears | Positive | High | Yes |
| Cart | TC_CART_04 | Cart page lists items | 2 items added | Open cart | Both items listed with quantity 1 and price | Positive | High | Yes |
| Cart | TC_CART_05 | Cart kept after reload | 1 item in cart | Reload the page | Badge still shows 1 | Edge | Medium | Yes |
| Cart | TC_CART_06 | Continue shopping | On cart page | Click Continue Shopping | Products page opens, cart unchanged | Positive | Low | No |
| Cart | TC_CART_07 | Checkout with empty cart | Cart is empty | Open cart, click Checkout | Checkout should be blocked or show a message | Edge | Medium | No |
| Checkout | TC_CHK_01 | Place an order | 1 item in cart | Checkout → fill name and postal code → Continue → Finish | "Thank you for your order!" page, cart empty | Positive | Critical | Yes |
| Checkout | TC_CHK_02 | Totals are correct | On overview step | Check item total, tax, total | Item total $29.99 and Total = Item total + Tax | Positive | Critical | Yes |
| Checkout | TC_CHK_03 | First name required | On information step | Leave First Name empty, Continue | Error: "First Name is required" | Negative | High | Yes |
| Checkout | TC_CHK_04 | Last name required | On information step | Leave Last Name empty, Continue | Error: "Last Name is required" | Negative | High | Yes |
| Checkout | TC_CHK_05 | Postal code required | On information step | Leave Postal Code empty, Continue | Error: "Postal Code is required" | Negative | High | Yes |
| Checkout | TC_CHK_06 | Cancel checkout | On information step | Click Cancel | Back on cart page, items kept | Positive | Medium | Yes |
| Checkout | TC_CHK_07 | Special characters in name | On information step | Enter `<script>` and emoji in name fields | Text is accepted or rejected safely, no script runs | Security | Medium | No |
| General | TC_GEN_01 | Mobile layout | Phone screen (Pixel 7) | Run the main flow on a phone screen | All pages usable, no cut text or overlapping buttons | UI | Medium | Yes (mobile project) |
| General | TC_GEN_02 | Reset app state | Items in cart | Menu → Reset App State | Cart is emptied, buttons reset to Add to cart | Positive | Low | No |
