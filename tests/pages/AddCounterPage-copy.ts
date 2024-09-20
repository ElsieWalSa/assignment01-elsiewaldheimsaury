import { Page } from "@playwright/test";
import { generateClientData } from "../testdata";

export class CounterPage {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
    async countClient() {
        const clientData = generateClientData();
        console.log(clientData);
        
        // Click on create client -button
        //   await this.page.getByRole("link", { name: "Create Client" }).click();
          
        //   count clients - se över 
        const items = this.page.locator('[class="card client"]');
        const itemCountafter = await items.count();
        expect(itemCountafter).toEqual(itemCount + 1);
        console.log("Items", itemCount);
    


    }  
}