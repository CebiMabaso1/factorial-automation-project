# The greatest factorial calculator
This project contains automated test scripts for the Factorial Calculator application:

Application URL:
 https://qa.interviews.bitcube-hub.tech/

The automation suite is built using Playwright and covers:

Functional testing
API validation
Form validation
UI styling verification
Network request and response validation

## Structure
factorial-automation-project/
│
├── tests/
│   ├── api-validation.spec.js
│   ├── factorial.spec.js
│   ├── form-factorial-twelve.spec.js
│   └── form-validation-styling.spec.js
│
├── playwright.config.js
├── package.json
└── README.md

## Technology Stack
Playwright
JavaScript
Node.js
Chromium / Firefox / WebKit

## MCP Prerequisites

Before running the tests, ensure the following are installed:
Node.js (v18 or later)
npm

## Execute a Specific Test File

Use the following commands to execute a specific test file.

**Note:** Run one test suite at a time during functional testing to avoid unnecessary resource consumption and potential performance issues.

### Functional Tests

```bash
npx playwright test tests/factorial.spec.js --ui
npx playwright test  tests/api-validation.spec.js  --ui
npx playwright test  tests/form-factorial-twelve.spec.js  --ui
npx playwright test  tests/form-validation-styling.spec.js  --ui
