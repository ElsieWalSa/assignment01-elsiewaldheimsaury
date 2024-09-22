import { Page, Locator } from "@playwright/test";

export class VerifyReservationPage {
    readonly page: Page;
    readonly verifyreservationLink: Locator;
    readonly verifyreservationItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.verifyreservationLink = page.locator("#app > div > div > div:nth-child(4) > a");
        this.verifyreservationItems = page.locator('[class="card reservation card"]');
    }

    async navigateToReservations() {
        await this.verifyreservationLink.click();
    }

    async countReservations(): Promise<number> {
        return await this.verifyreservationItems.count();
    }
}