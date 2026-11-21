# Test Plan – SauceDemo Web Shop

| | |
|---|---|
| **Application** | SauceDemo – https://www.saucedemo.com (public demo e-commerce site) |
| **Prepared by** | Sankalp, Quality Analyst |
| **Version** | 1.0 |
| **Test types** | Functional, UI, negative, regression, cross-device (desktop + mobile), automation |

## 1. Objective
Check that a shopper can log in, browse and sort products, manage the cart and place an order, and that wrong input is handled with clear error messages.

## 2. Scope

**In scope**
- Login and logout (valid, invalid, locked and empty credentials)
- Products page: product list, sorting, product details
- Cart: add, remove, badge count, cart page, cart kept after reload
- Checkout: customer information, form validation, order overview (item total, tax, total), order complete, cancel
- Access control: pages that need a login
- Desktop Chrome and a mobile screen (Pixel 7)

**Out of scope**
- Real payments (the site has no payment gateway)
- Performance/load and security penetration testing
- Backend/database checks (no access)

## 3. Test approach
| Level | How |
|---|---|
| Manual testing | Test cases in [test-cases](../test-cases/SauceDemo_Test_Cases.md): positive, negative and edge cases |
| Exploratory testing | Time-boxed sessions with each demo account (standard_user, problem_user, locked_out_user) |
| Automation | Playwright (JavaScript, Page Object Model) – [automation](../automation) |
| Regression | Automated suite runs on every push and every Monday in GitHub Actions |
| Defect tracking | Jira-style reports in [bug-reports](../bug-reports/SauceDemo_Bug_Reports.md) |

## 4. Test environment
- Browsers: Chrome (desktop), Chrome on Pixel 7 screen size
- Test accounts: `standard_user`, `locked_out_user`, `problem_user` (public demo accounts)
- Tools: Playwright, GitHub Actions, Postman/Newman (API part), Jira-style templates

## 5. Entry criteria
- Build is deployed and reachable
- Test accounts work
- Test cases are reviewed

## 6. Exit criteria
- 100% of planned test cases executed
- No open Critical or High bugs in the main purchase flow (standard_user)
- All automated regression tests pass
- Known bugs are reported with steps, severity and evidence

## 7. Severity guide
| Severity | Meaning | Example |
|---|---|---|
| Critical | Blocks the main flow, no workaround | User cannot place an order |
| High | Main feature broken, workaround is hard | Add to cart does not work for some products |
| Medium | Feature works wrongly but flow continues | Sorting does nothing |
| Low | Cosmetic / UI issue | Wrong product image |

## 8. Risks and mitigation
| Risk | Mitigation |
|---|---|
| Demo site changes its UI or text | Stable `data-test` locators, tests run weekly to catch changes early |
| Slow network makes tests flaky | Playwright auto-waits, 1 retry on CI |
| Only one browser engine covered | Desktop + mobile viewports now; Firefox/WebKit can be added in config |

## 9. Deliverables
- Test plan (this document)
- Test cases
- Bug reports
- Automation suite + HTML report (GitHub Actions artifact)
- API test collection
