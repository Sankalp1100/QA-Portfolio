# Bug Reports – SauceDemo

Jira-style defect reports from testing SauceDemo with the `problem_user` demo account.
Every bug below is **reproduced automatically** on each run by [known-bugs.spec.js](../automation/tests/known-bugs.spec.js) (desktop and mobile), so the evidence stays up to date.

| ID | Title | Severity | Priority |
|---|---|---|---|
| BUG-001 | All products show the same image | Low | Medium |
| BUG-002 | Sorting Z to A does not change the product order | Medium | Medium |
| BUG-003 | Add to cart does nothing for Sauce Labs Bolt T-Shirt | High | High |
| BUG-004 | Last Name field on checkout does not keep typed text | Critical | High |

---

## BUG-001: All products show the same image

| Field | Value |
|---|---|
| **Project** | SauceDemo |
| **Component** | Products page |
| **Severity** | Low |
| **Priority** | Medium |
| **Environment** | https://www.saucedemo.com · Chrome (desktop) and Pixel 7 screen |
| **Test account** | `problem_user` |
| **Status** | Open – reproduced by automation |
| **Automated check** | [known-bugs.spec.js](../automation/tests/known-bugs.spec.js) |

**Steps to reproduce**
1. Open https://www.saucedemo.com and log in as `problem_user` / `secret_sauce`
2. Look at the product images on the Products page

**Expected result**
Each of the 6 products shows its own picture (backpack, bike light, t-shirt, etc.).

**Actual result**
All 6 products show the same placeholder image, so images do not match the product names.

**Impact**
Users cannot see what they are buying. Looks broken and reduces trust, but the purchase can still continue.

---
## BUG-002: Sorting Z to A does not change the product order

| Field | Value |
|---|---|
| **Project** | SauceDemo |
| **Component** | Products page – sort dropdown |
| **Severity** | Medium |
| **Priority** | Medium |
| **Environment** | https://www.saucedemo.com · Chrome (desktop) and Pixel 7 screen |
| **Test account** | `problem_user` |
| **Status** | Open – reproduced by automation |
| **Automated check** | [known-bugs.spec.js](../automation/tests/known-bugs.spec.js) |

**Steps to reproduce**
1. Open https://www.saucedemo.com and log in as `problem_user` / `secret_sauce`
2. Open the sort dropdown (top right)
3. Select "Name (Z to A)"

**Expected result**
Products are shown in reverse alphabetical order, starting with "Test.allTheThings() T-Shirt (Red)".

**Actual result**
The product order stays the same (A to Z). The sort option has no effect.

**Impact**
Users cannot sort products as they choose. A feature is broken, but the flow continues.

---
## BUG-003: Add to cart does nothing for Sauce Labs Bolt T-Shirt

| Field | Value |
|---|---|
| **Project** | SauceDemo |
| **Component** | Products page – Add to cart |
| **Severity** | High |
| **Priority** | High |
| **Environment** | https://www.saucedemo.com · Chrome (desktop) and Pixel 7 screen |
| **Test account** | `problem_user` |
| **Status** | Open – reproduced by automation |
| **Automated check** | [known-bugs.spec.js](../automation/tests/known-bugs.spec.js) |

**Steps to reproduce**
1. Open https://www.saucedemo.com and log in as `problem_user` / `secret_sauce`
2. Click "Add to cart" on "Sauce Labs Bolt T-Shirt"
3. Check the cart icon in the top right

**Expected result**
The cart badge shows 1 and the button changes to "Remove".

**Actual result**
Nothing happens: no cart badge appears and the product is not added to the cart.

**Impact**
The user cannot buy this product at all. Direct loss of sales.

---
## BUG-004: Last Name field on checkout does not keep typed text

| Field | Value |
|---|---|
| **Project** | SauceDemo |
| **Component** | Checkout – Your Information |
| **Severity** | Critical |
| **Priority** | High |
| **Environment** | https://www.saucedemo.com · Chrome (desktop) and Pixel 7 screen |
| **Test account** | `problem_user` |
| **Status** | Open – reproduced by automation |
| **Automated check** | [known-bugs.spec.js](../automation/tests/known-bugs.spec.js) |

**Steps to reproduce**
1. Open https://www.saucedemo.com and log in as `problem_user` / `secret_sauce`
2. Add "Sauce Labs Backpack" to the cart
3. Open the cart and click "Checkout"
4. Click the "Last Name" field and type "QA"

**Expected result**
The Last Name field shows "QA".

**Actual result**
The Last Name field does not keep the typed text, so the required field cannot be filled correctly.

**Impact**
Blocks checkout: the user cannot complete the form, so no order can be placed. No workaround in the UI.

---
