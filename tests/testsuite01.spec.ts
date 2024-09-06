
import { test, expect } from '@playwright/test';
import { DashboardPage } from './dashboard-page';
import { LoginPage } from './login-page';
import { config } from 'dotenv';
config();

console.log('Test is starting1');

const url = process.env.BASE_URL;
console.log('Base URL:', url);
console.log('User:',process.env.TEST_USERNAME);
console.log('pw:', process.env.TEST_PASSWORD);


test.describe('Test suite 01', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.goto();
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`,`${process.env.TEST_PASSWORD}`);


  });

  test('Test case 01', async ({ page }) => {
    // const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    // To see that I can the right URL, username and password
    // console.log(process.env.BASE_URL,process.env.TEST_USERNAME, process.env.TEST_PASSWORD);
    // await loginPage.goto();
    // To see that I can the right URL, username and password
    // console.log(process.env.TEST_USERNAME, process.env.TEST_PASSWORD);
    // await loginPage.performLogin(`${process.env.TEST_USERNAME}`,`${process.env.TEST_PASSWORD}`);
    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
    await dashboardPage.performLogout();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible(); 
    await page.waitForTimeout(5000);
  });

  // To create a room
  test('Test case 02', async ({ page }) => {
    
    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
    // click on button room
    await page.locator('#app > div > div > div:nth-child(1) > a').click();

    // Count number of rooms
    const items = page.locator('[class="card room"]');
    const itemCount = await items.count();
    console.log('Items', itemCount);

    // Create Room
    await page.getByRole('link', { name: 'Create Room' }).click();
    await expect(page.getByText('New Room')).toBeVisible();

    await expect(page.locator('label').filter({ hasText: /^Category$/})).toBeVisible();

  await page.getByRole('combobox').selectOption('Single');
  await page.locator('div').filter({ hasText: /^Number$/ }).getByRole('spinbutton').fill('1307');
  await page.locator('div').filter({ hasText: /^Floor$/ }).getByRole('spinbutton').fill('13');
  await page.locator('.checkbox').click();
  await page.locator('div').filter({ hasText: /^Price$/ }).getByRole('spinbutton').fill('1000');
  await page.getByRole('listbox').selectOption(['Sea View', 'Balcony', 'Ensuite']);
  await page.getByText('Save').click();
  await expect(page.getByRole('heading', { name: 'Rooms' })).toBeVisible();

  // Count rooms after adding a room
  const itemCountafter = await items.count();
  expect(itemCountafter).toEqual(itemCount + 1);
  
  // Stäm av att informationen överensstämmer med det du skrivit in

  // Check that information is correct
  // await expect(items.nth(itemCountafter).locator('text="Floor 13, Room 1307"')).toBeVisible();
  // await expect(items.nth(itemCountafter).locator('h3:has-text("Floor 13, Room 1307")')).toBeVisible();
  
  // await expect(items.nth(itemCountafter).locator('[class="category"]').getByText("Single"));
//  const test = await (items.nth(itemCountafter).locator('[class="category"]').textContent);
//  console.log('test', test);

  
  });
});