// @ts-check
import { test, expect } from '@playwright/test';

// Step 1: go to the app
test.beforeEach(async ({ page }) => {
  await page.goto('https://qa.interviews.bitcube-hub.tech/');
})


test('TC-021 Negative number input should be Validated and handled properly', async ({ page }) => {
  const errors = [];
  
  page.on('pageerror', err => errors.push(err.message));

  await page.fill('#number', '-8');
  await page.click('#getFactorial');

    // check for error message
  await expect(page.locator('#resultDiv')).toContainText(/\S+/);
    // check that there are no errors
  expect(errors).toHaveLength(0);
});
