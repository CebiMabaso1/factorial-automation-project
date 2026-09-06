// @ts-check
import { test, expect } from '@playwright/test';

// Step 1: go to the app
test.beforeEach(async ({ page }) => {
  await page.goto('https://qa.interviews.bitcube-hub.tech/');
})


// ----------------------------------------------------------------------------
//  Category 1 -- Positive numbers (functional/positive scenarios -- expected PASS)
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
test.describe('Category 1 - Positive numbers (functional/positive scenarios)', () => {
test('TC-001 factorial of 0 returns 1', async ({ page }) => {
  // Step 2: type 0 into the input box
  await page.fill('#number', '0');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  // Step 4: check the result shows 1
  await expect(page.locator('#resultDiv')).toContainText('1');
});

test('TC-002 factorial of 1 returns 1', async ({ page }) => {
  // Step 2: type 1 into the input box
  await page.fill('#number', '1');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  // Step 4: check the result shows 1
  await expect(page.locator('#resultDiv')).toContainText('1');
});

test('TC-003 factorial of 5 returns 120', async ({ page }) => {
  // Step 2: type 5 into the input box
  await page.fill('#number', '5');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  // Step 4: check the result shows 120
  await expect(page.locator('#resultDiv')).toContainText('120');
});

test('TC-004 factorial of 10 returns 3628800', async ({ page }) => {
  // Step 2: type 10 into the input box
  await page.fill('#number', '10');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  // Step 4: check the result shows 3628800
  await expect(page.locator('#resultDiv')).toContainText('3628800');
});

test('TC-005 factorial of 15 returns 1307674368000', async ({ page }) => {
  // Step 2: type 15 into the input box
  await page.fill('#number', '15');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  // Step 4: check the result shows 1307674368000
  await expect(page.locator('#resultDiv')).toContainText('1307674368000');
});

test('TC-006 Verify Factorial Calculation for Input with Leading Zeros ', async ({ page }) => {
  // Step 2: type 007 into the input box
  await page.fill('#number', '007');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  // Step 4: check the result shows 5040
  await expect(page.locator('#resultDiv')).toContainText('5040');
});
});

// ----------------------------------------------------------------------------
//  Category 2 -- Negative numbers (negative scenario -- expected error)
// ----------------------------------------------------------------------------

test.describe('Category 2 - Negative numbers (negetive scenarios)', () => {

test('TC-007 Negative number input should be handled properly', async ({ page }) => {
  const errors = [];
  
  page.on('pageerror', err => errors.push(err.message));

  await page.fill('#number', '-1');
  await page.click('#getFactorial');

    // check for error message
  await expect(page.locator('#resultDiv')).toContainText(/\S+/);
    // check that there are no errors
  expect(errors).toHaveLength(0);
});


test('TC-008 Negative input should not display stale results from a previous calculation', async ({ page }) => {

  // Step 1: Perform a valid factorial calculation
  await page.fill('#number', '15');
  await page.click('#getFactorial');

  // Verify the correct factorial result is displayed
  await expect(page.locator('#resultDiv'))
    .toContainText('1307674368000');

  // Step 2: Enter an invalid negative number
  await page.fill('#number', '-10');
  await page.click('#getFactorial');

  // Step 3: Verify that the previous valid result is not retained
  // The application should either clear the result or display a validation message
  await expect(page.locator('#resultDiv'))
    .not.toContainText('1307674368000');
});
	
});

// ----------------------------------------------------------------------------
//  Category 3 -- Invalid input (strings, characters, symbols, empty)
// ----------------------------------------------------------------------------

test.describe('Category 3 - Invalid input', () => {

  test('TC-009 alphabetic input shows validation message', async ({ page }) => {
    // Step 2: type abc into the input box
    await page.fill('#number', 'abc');

    // Step 3: click the Calculate button
    await page.click('#getFactorial');

    // Step 4: check the result shows the validation message
    await expect(page.locator('#resultDiv')).toContainText('Please enter an integer');
  });



test('TC-010 Special characters input shows validation message', async ({ page }) => {
  // Step 2: type abc into the input box
  await page.fill('#number', '#@&');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  

 // Step 4: check the result shows error message below
  await expect(page.locator('#resultDiv')).toContainText('Please enter an integer');
});


test('TC-011 Empty input input shows validation message', async ({ page }) => {
  // Step 2: Leave the input box field blank
  await page.fill('#number', '');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  

 // Step 4: check the result shows error message below
  await expect(page.locator('#resultDiv')).toContainText('Please enter an integer');
});


test('TC-012 white space input shows validation message', async ({ page }) => {
  // Step 2: Enter spaces
  await page.fill('#number', '   ');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  

 // Step 4: check the result shows error message below
  await expect(page.locator('#resultDiv')).toContainText('Please enter an integer');
});



test('TC-013 Decimal numbers input shows validation message', async ({ page }) => {
  // Step 2: Enter 3.5 in the input box
  await page.fill('#number', '3.5');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
 
 // Step 4: check the result shows error message below
  await expect(page.locator('#resultDiv')).toContainText('Please enter an integer');
});


test('TC-014 Alphanumeric mix input shows validation message', async ({ page }) => {
  // Step 2: Enter spaces
  await page.fill('#number', '5a');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
 
 // Step 4: check the result shows error message below
  await expect(page.locator('#resultDiv')).toContainText('Please enter an integer');
});


test('TC-015 Verify Validation Message Clears When Input Changes from alphabet to interger ', async ({ page }) => {
  
  
  
  // Step 2: type 5a into the input box
  await page.fill('#number', '5a');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  // Step 4: check the result shows error message below
  await expect(page.locator('#resultDiv')).toContainText('Please enter an integer');
  
    
  //#Calculate Positive scenario again
    // Step 2: type 6 into the input box
  await page.fill('#number', '6');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  // Step 4: check the result shows 720
  await expect(page.locator('#resultDiv')).toContainText('720');
  
});

});


// ----------------------------------------------------------------------------
//  Category 4 -- High Numbers (Edge Case — overflow / data limit)
// ----------------------------------------------------------------------------


test.describe('Category 4 - High Numbers', () => {
	
test('TC-016 Verify Factorial Calculation for Upper Boundary Value (170)', async ({ page }) => {
  // Step 2: type 170 into the input box
  await page.fill('#number', '170');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  // Step 4: check the Valid large finite number returned
  await expect(page.locator('#resultDiv')).toContainText('7.257415615307994e+306');
});

test('TC-017 Verify Factorial Calculation for Overflow Boundary Value (171)', async ({ page }) => {
  // Step 2: type 171 into the input box
  await page.fill('#number', '171');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  // Step 4: check the result show infinity
  await expect(page.locator('#resultDiv')).toContainText('Infinity');
});

test('TC-018 	Verify Application Behavior for Large Input Value (1000)', async ({ page }) => {
 // Step 2: type 1000 into the input box
  await page.fill('#number', '10000');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
// Step 4: check the result show infinity
  await expect(page.locator('#resultDiv')).toContainText('Infinity');
});

});


// ----------------------------------------------------------------------------
//Category 5 – Extremely Long / Large Inputs (Edge Case — performance / silent failure)
// ----------------------------------------------------------------------------


test.describe('Category 5 - Extremely Long  Numbers', () => {
test('TC-019 	Verify Application Behavior for Extremely Large Input Value (1000000)))', async ({ page }) => {
  
  
  // Step 2: type 1000000 into the input box
  await page.fill('#number', '1000000');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
 // Step 4: check the is error message response and no error
 await expect(page.locator('#resultDiv')).toContainText(/\S+/);
  expect(errors).toHaveLength(0);
});


test('TC-020 Verify Application Behavior for Extremely Large Input Value (1000000000000000000000000000000000000000000000000000000007))', async ({ page }) => {
  
  // Step 2: type 1000000000000000000000000000000000000000000000000000000007 into the input box
  await page.fill('#number', '1000000000000000000000000000000000000000000000000000000007');
  // Step 3: click the Calculate button
  await page.click('#getFactorial');
  // Step 4: check the result show infinity
  // Step 4: check the is error message response and no error
 await expect(page.locator('#resultDiv')).toContainText(/\S+/);

  expect(errors).toHaveLength(0);
});

});