import { Page } from "@playwright/test";
import { generateClientData } from "../testdata";

export class CounterPage {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
    async createClient(clientData: any): Promise<void> {
      console.log(clientData);

      // Click on create client -button
      await this.page.getByRole("link", { name: "Create Client" }).click();

      
      await this.page.fill('input[name="clientName"]', clientData.name);
      await this.page.fill('input[name="clientEmail"]', clientData.email);
      await this.page.click('button[type="submit"]');
  }
}
    
