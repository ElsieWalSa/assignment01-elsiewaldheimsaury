import { expect, type Locator, type Page } from '@playwright/test';
import { config } from 'dotenv';
config();



export class LoginPage {
  //Attributes
  readonly page: Page;
  readonly usernameTextfield: Locator; 
  readonly passwordTextfield: Locator;
  readonly loginButton: Locator;

  //Const
  constructor(page: Page) {
    this.page = page;
    this.usernameTextfield = page.locator('input[type="text"]');
    this.passwordTextfield = page.locator('input[type="password"]');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  // Methods / functions
  // async goto() {
  //   await this.page.goto(`${process.env.BASE_URL}`);


    async goto() { 
      console.log('Test is starting2');
      console.log('Base URL:', process.env.BASE_URL);
      console.log('Base url2:','${process.env.BASE_URL}' )
      

      await this.page.goto(`${process.env.BASE_URL}`);
      
    }
  
  async performLogin(username: string, password: string): Promise<void> {
    console.log('Perform login');
    console.log('username', username);
    await this.usernameTextfield.fill(username);
    await this.passwordTextfield.fill(password);
    await this.loginButton.click();

  }



  // async performLogin(username: string, p0: { process: NodeJS.Process; "": any; }, password: string, p1: { process: NodeJS.Process; "": any; }) {
  //   //fill out the form - 2 textfields and click the submit button
  //   await this.usernameTextfield.fill(username);
  //   await this.passwordTextfield.fill(password);
  //   await this.loginButton.click();
  // }
}