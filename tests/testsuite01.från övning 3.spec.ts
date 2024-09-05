import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { DashboardPage } from './dashboard-page';
import { LoginPage } from './login-page';

// Testcase 01, show browser
test('has title', async ({ page }) => {
    await page.goto('http://localhost:3000');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Testers Hotel/);

// Testcase 02, login customer by pressing on the button
  await page.locator('input[type="text"]').fill('tester01');
  await page.locator('input[type="password"]').fill('GteteqbQQgSr88SwNExUQv2ydb7xuf8c');
  await page.getByRole('button', { name: 'Login' }).click();
  
   //assertion
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();

// Testcase 03, login customer by pressing enter
  // await page.locator('input[type="text"]').fill('tester01');
  // await page.locator('input[type="password"]').fill('GteteqbQQgSr88SwNExUQv2ydb7xuf8c');
  // await page.keyboard.press('Enter');

  //assertion
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();

  // Testcase 04, Go to rooms

  await page.locator('#app > div > div > div:nth-child(1) > a').click();

  // Testcae 05, Create room
  await page.getByRole('link', { name: 'Create Room' }).click();
  await expect(page.getByText('New Room')).toBeVisible();

  // await page.waitForSelector('#category');

  await expect(page.locator('label').filter({ hasText: /^Category$/})).toBeVisible();
  // await page.locator('option:has-text("Twin")').click();
  
  // const selectedOption = 
  // await page.locator('select[data-v-af6b34c6]:not([multiple])').selectOption('twin');
  // expect(selectedOption).toBe('Double');


  await page.getByRole('combobox').selectOption('Single');
  await page.locator('div').filter({ hasText: /^Number$/ }).getByRole('spinbutton').fill('1307');
        await page.locator('div').filter({ hasText: /^Floor$/ }).getByRole('spinbutton').fill('13');
  
        // .selectOption('twin');

  // await page.locator('label').filter({ hasText: /^Category$/}).
      // getByRole('select').selectOption('twin');
  
  // .press();
  
  // .selectOption('twin');

  // await page.locator('#app > div > div[1] > div[1] > label').filter({ hasText: /^Category$/ }).selectOption('twin');

  // await page.getByLabel('Category').selectOption('twin');


  // await page.locator('#app > div > div > div');

  //*[@id="app"]/div/div[1]/div[1]/label
  
  // .selectOption('twin');

  // await page.locator('div').filter({ hasText: /^Category$/}).selectOption('twin');

  // await page.getByLabel('Category').selectOption('twin');

  // await page.getByLabel('Choose a color').selectOption('blue');



  });