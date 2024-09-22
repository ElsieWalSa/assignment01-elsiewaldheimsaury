import { Page, Locator } from "@playwright/test";
import { generateClientData } from "../testdata";

export class CountBillPage {
    readonly page: Page;
    readonly billItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.billItems = page.locator('[class="card bill"]'); // Lokator för fakturor
    }

    // Count Bills
    async countBill(): Promise<number> {
        return await this.billItems.count();
    }

    // Verify bills after creation
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





