import { Page, Locator } from "@playwright/test";
import { generateClientData } from "../testdata";
// export class CountBillPage {
//     readonly page: Page;
//     readonly billItems: Locator;
  
//     constructor(page: Page) {
//       this.page = page;
//       this.billItems = page.locator('[class="card bill"]');


//     }
//     async countBill(): Promise<number> {
//         return await this.billItems.count();
//     //   const items = this.page.locator('[class="card bill"]');
//     //   const count = await items.count(); 
//       console.log("Found bills:", this.billItems.count);  
//     }

//     getItemCount(): Promise<number> {
//         return this.countBill(); 
//     }
//     async verifyBillsAfterCreation(initialCount: number,isBillClicked: boolean): Promise<void> {
//         const itemCountAfter = await this.countBill();
//         console.log("Items after", itemCountAfter);

//         // Control that bills is added with 1
//         expect(itemCountAfter).toEqual(initialCount + 1);

//         // Control last ID for the Bill
//       const idDiv = await this.billItems.nth(itemCountAfter - 1).getByRole('heading').textContent();
//         console.log('ID', idDiv);
//         expect(idDiv).toContain(String(itemCountAfter));
//         expect(idDiv).toContain('ID: ' + String(itemCountAfter));

//         // Control to see if Bill is payed
//     const paidDiv = await this.billItems.nth(itemCountAfter - 1).locator('[class="paid"]');
//     if (isBillClicked) 
//         {
//             await expect(paidDiv).toContain('Yes');
//         } else {
//             await expect(paidDiv).toContain('No');
//         }

export class CountBillPage {
    readonly page: Page;
    readonly billItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.billItems = page.locator('[class="card bill"]'); // Lokator för fakturor
    }

    // Metod för att räkna fakturor
    async countBill(): Promise<number> {
        return await this.billItems.count();
    }

    // Verifiera fakturor efter skapandet
    async verifyBillsAfterCreation(initialCount: number, isBillClicked: boolean): Promise<void> {
        const itemCountAfter = await this.countBill();
        console.log("Items after", itemCountAfter);

        expect(itemCountAfter).toEqual(initialCount + 1);

        const idDiv = await this.billItems.nth(itemCountAfter - 1).getByRole('heading').textContent();
        console.log('ID', idDiv);
        expect(idDiv).toContain(String(itemCountAfter));
        expect(idDiv).toContain('ID: ' + String(itemCountAfter));

        const paidDiv = await this.billItems.nth(itemCountAfter - 1).locator('[class="paid"]');
        if (isBillClicked) {
            await expect(paidDiv).toContain('Yes');
        } else {
            await expect(paidDiv).toContain('No');
        }
    
    }


}





