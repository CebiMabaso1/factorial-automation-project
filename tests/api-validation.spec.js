// @ts-check
import { test, expect } from '@playwright/test';

// Step 1: go to the app
test.beforeEach(async ({ page }) => {
  await page.goto('https://qa.interviews.bitcube-hub.tech/');
})


test('TC-023 Verify request headers when Calculate is clicked', async ({ page }) => {

  const requests = [];

  page.on('request', request => {
    requests.push({
      url: request.url(),
      headers: request.headers()
    });
  });

  // Clear requests from page load
  requests.length = 0;

  await page.fill('#number', '12');
  await page.click('#getFactorial');

  await expect(page.locator('#resultDiv'))
    .toContainText('479001600');

  // Verify at least one request was made
  expect(requests.length).toBeGreaterThan(0);

  // Example header validation
  //const req = requests[0];

   expect(req.headers).toHaveProperty('accept');
   expect(req.headers['accept']).toContain('application/json');
 
});