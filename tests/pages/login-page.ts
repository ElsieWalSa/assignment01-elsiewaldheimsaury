import { expect, type Locator, type Page } from "@playwright/test";
import { config } from "dotenv";
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
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async goto() {
    // console.log("Test is starting2"); //To see that is working
    // console.log("Base URL:", process.env.BASE_URL);
    // console.log("Base url2:", "${process.env.BASE_URL}");

    await this.page.goto(`${process.env.BASE_URL}`);
  }

  async performLogin(username: string, password: string): Promise<void> {
    // fill out the form - 2 textfields and click the sumbit button
    // console.log("Perform login");
    // console.log("username", username); // To see that is working as it should
    await this.usernameTextfield.fill(username);
    await this.passwordTextfield.fill(password);
    await this.loginButton.click();
    
  }

  
}
