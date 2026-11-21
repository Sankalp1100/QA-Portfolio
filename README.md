# QA Portfolio – Sankalp

[![QA Tests](https://github.com/Sankalp1100/QA-Portfolio/actions/workflows/qa-tests.yml/badge.svg)](https://github.com/Sankalp1100/QA-Portfolio/actions/workflows/qa-tests.yml)
![Playwright](https://img.shields.io/badge/Playwright-JavaScript-2EAD33?logo=playwright&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-Newman-FF6C37?logo=postman&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)

I'm a **Quality Analyst with 3+ years** of manual, API and mobile testing. My client work is confidential, so this repo shows **how I test** using public demo apps:
- **SauceDemo** (https://www.saucedemo.com) – a demo web shop
- **JSONPlaceholder** (https://jsonplaceholder.typicode.com) – a demo REST API

🌐 Portfolio: **https://sankalp-qa-portfolio.vercel.app** · 💼 [LinkedIn](https://www.linkedin.com/in/sankalp-02915b200)

## What's inside

| Folder | What it shows | Numbers |
|---|---|---|
| [test-plans](test-plans/SauceDemo_Test_Plan.md) | Scope, approach, entry/exit criteria, severity guide, risks | 1 plan |
| [test-cases](test-cases/SauceDemo_Test_Cases.md) | Positive, negative, edge, security and UI cases | 31 cases |
| [bug-reports](bug-reports/SauceDemo_Bug_Reports.md) | Jira-style bugs with steps, expected vs actual, severity, impact | 4 bugs |
| [automation](automation) | Playwright + JavaScript, Page Object Model, desktop + mobile | 26 tests × 2 devices |
| [api-testing](api-testing/JSONPlaceholder.postman_collection.json) | Postman collection: GET, POST, PUT, PATCH, DELETE, schema + negative checks | 10 requests |
| [checklists](checklists) | [Mobile app checklist](checklists/Mobile_App_Test_Checklist.md) and [AI chatbot / RAG testing](checklists/AI_Chatbot_and_RAG_Testing.md) | 2 guides |

## Highlights
- ✅ **Automation runs by itself** in GitHub Actions on every push and every Monday (UI tests + API tests). The green badge above is the live result.
- 🐞 **Bugs are proven, not just written**: every bug in the bug reports has an automated reproduction check in [known-bugs.spec.js](automation/tests/known-bugs.spec.js).
- 📱 **Same tests on desktop and mobile** (Chrome + Pixel 7 screen).
- 🧱 **Page Object Model** keeps locators in one place, so tests stay short and easy to maintain.

## Project structure
```
QA-Portfolio/
├── test-plans/        Test plan
├── test-cases/        Manual test cases
├── bug-reports/       Jira-style bug reports
├── automation/        Playwright project
│   ├── pages/         Page objects (Login, Inventory, Checkout)
│   └── tests/         login, cart, checkout, known-bugs
├── api-testing/       Postman collection
├── checklists/        Mobile + AI chatbot testing guides
└── .github/workflows/ CI pipeline
```

## Run it yourself

**UI automation** (needs Node.js 18+)
```bash
cd automation
npm install
npx playwright install chromium
npx playwright test            # run all tests
npx playwright test --headed   # watch the browser
npx playwright show-report     # open the HTML report
```

**API tests**
- Postman: *Import* → choose `api-testing/JSONPlaceholder.postman_collection.json` → *Run collection*
- Command line: `npx newman run api-testing/JSONPlaceholder.postman_collection.json`

## Tools
Playwright · JavaScript · Postman · Newman · GitHub Actions · Jira-style reporting · Git
