import { expect, type Locator, type Page } from '@playwright/test';
import { config } from 'dotenv';
config();

export class DashboardPage {
  //Attributes
  readonly page: Page;
  readonly logoutButton: Locator; 

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

   async performLogout() {
    await this.logoutButton.click();
  }
}