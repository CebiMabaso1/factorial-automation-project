// @ts-check
import { test, expect } from '@playwright/test';

// Step 1: go to the app
test.beforeEach(async ({ page }) => {
  await page.goto('https://qa.interviews.bitcube-hub.tech/');
})


test('TC-022 factorial of 12 returns 479001600', async ({ page }) => {
  // Step 2: type 12 into the input box
  await page.fill('#number', '12');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  // Step 4: check the result shows 479001600
  await expect(page.locator('#resultDiv')).toContainText('479001600');
});
