
import { test, expect } from '@playwright/test';
import { DashboardPage } from './dashboard-page';
import { LoginPage } from './login-page';
import { config } from 'dotenv';
config();

// console.log('Test is starting1');

const url = process.env.BASE_URL;
// console.log('Base URL:', url);
// console.log('User:',process.env.TEST_USERNAME);
// console.log('pw:', process.env.TEST_PASSWORD);


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
  
  // Check that information is correct
  await expect(items.nth(itemCountafter-1).locator('text="Floor 13, Room 1307"')).toBeVisible();
  await expect(items.nth(itemCountafter-1).locator('h3:has-text("Floor 13, Room 1307")')).toBeVisible();

});

// Create client
test('Test case 03', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();

  // click on clients view
  await page.locator('#app > div > div > div:nth-child(2) > a').click();

  // Count number of clients
    const items = page.locator('[class="card client"]');
    const itemCount = await items.count();
    console.log('Items', itemCount);

  // create new client
  await expect(page.getByText('Clients')).toBeVisible();
  await page.getByRole('link', { name: 'Create Client ' }).click();
  await expect(page.getByText('New Client')).toBeVisible();
  await expect(page.locator('label').filter({ hasText: /^Name$/})).toBeVisible();
  await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('Nils');
  await page.locator('input[type="email"]').fill('nisse@x.com')
  await page.locator('div').filter({ hasText: /^Telephone$/ }).getByRole('textbox').fill('070-1235689')
  await page.getByText('Save').click();
  await expect(page.getByRole('heading', { name: 'Clients' })).toBeVisible();

  // Check if the information is correct 
// Count client after adding a client
const itemCountafter = await items.count();
expect(itemCountafter).toEqual(itemCount + 1);

// list always start a 0
const telephoneDiv = await items.nth(itemCountafter-1).locator('div.telephone');

  // get text from div-element
  const textContent = await telephoneDiv.textContent();

  // Log text to consol
  console.log(`Text i div-elementet: ${textContent}`);
  expect(textContent).toBe('Telephone: 070-1235689');
  const emailDiv = await items.nth(itemCountafter-1).locator('div.email');

  // get text from div-element
  const emailContent = await emailDiv.textContent();

  // Log text to consol
  console.log(`Text i div-elementet: ${emailContent}`);
  expect(emailContent).toBe('Email: nisse@x.com');
  const nameDiv = await items.nth(itemCountafter-1).locator('h3');

  // get text from div-element
  const nameContent = await nameDiv.textContent();

  // Log text to consol
  console.log(`Text i div-elementet: ${nameContent}`);
  expect(nameContent).toContain('Nils');
  });
  // Add a bill check if the information is correct
  test('Test case 04', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
  });
// Do a reservation and check if the information is correct
test('Test case 05', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();

});
// Log out and se if the added information is gone, check Room, clients, bills and reservation
test('Test case 06', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();

});

});