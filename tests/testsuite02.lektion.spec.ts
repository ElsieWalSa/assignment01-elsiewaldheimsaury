//testsuite01.ts
import { test, expect } from '@playwright/test';
import { DashboardPage } from './dashboard-page';
import { LoginPage } from './login-page';
import { config } from 'dotenv';
config();

console.log('Hello World')
console.log('Test is starting1');

const url = process.env.BASE_URL;
console.log('Base URL:', url);
console.log('User:',process.env.TEST_USERNAME);
console.log('pw:', process.env.TEST_PASSWORD);


test.describe('Test suite 01', () => {
  test('Test case 01', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    console.log(process.env.BASE_URL,process.env.TEST_USERNAME, process.env.TEST_PASSWORD);

    await loginPage.goto();

    console.log(process.env.TEST_USERNAME, process.env.TEST_PASSWORD);


    await loginPage.performLogin(`${process.env.TEST_USERNAME}`,`${process.env.TEST_PASSWORD}`);
    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
    await dashboardPage.performLogout();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible(); 
    await page.waitForTimeout(5000);
  });
});