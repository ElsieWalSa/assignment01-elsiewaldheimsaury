import { Page, Locator, expect } from "@playwright/test";

export class ReservationPage {
    readonly page: Page;
    readonly createReservationButton: Locator;
    readonly reservationForm: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createReservationButton = page.getByRole("link", { name: "New Bill" });
        this.reservationForm = page.locator("form");
}
async createReservation(reservationData: any) {
    // click on create room -button
    await this.page.getByRole("link", { name: "Create Reservation" }).click();
    await this.page.waitForSelector("text=New Reservation");

    // Reservationdata date
    await this.page.locator("div").filter({ hasText: /^Start \(Format YYYY-MM-DD\)$/ }).getByPlaceholder("YYYY-MM-DD").fill(String(reservationData.reservationStart));
    await this.page.locator("div").filter({ hasText: /^End \(Format YYYY-MM-DD\)$/ }).getByPlaceholder("YYYY-MM-DD").fill(String(reservationData.reservationEnd));

    //  Reservationdata client 
    await this.page.getByRole("combobox").first().waitFor({ state: 'attached' });
    await this.page.getByRole("combobox").first().selectOption(String(reservationData.reservationclient));
    // room
    await this.page.getByRole("combobox").nth(1).waitFor({ state: 'attached' });
    await this.page.getByRole("combobox").nth(1).selectOption(String(reservationData.reservationroom));
    //  Reservationdata client 
    await this.page.getByRole("combobox").nth(2).waitFor({ state: 'attached' });
    await this.page.getByRole("combobox").nth(2).selectOption(String(reservationData.reservationbill));

    // Save Button and show reservation
    await this.page.getByText("Save").waitFor({ state: 'visible' });
    await this.page.getByText("Save").click();
    await this.page.waitForSelector('text="Reservations"');
    await this.page.getByText("Reservations" );





    



}
}