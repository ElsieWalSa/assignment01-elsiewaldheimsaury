import { Page } from "@playwright/test";
import { generateClientData } from "../testdata";
export class CountReservationPage {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
    async countReservation(): Promise<number> {
      const items = this.page.locator('[class="card reservation card"]');
      const count = await items.count(); 
      console.log("Found reservation:", count);  
      return count;
  }

}