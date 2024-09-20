import { Page, Locator, expect } from "@playwright/test";

export class BillPage {
  readonly page: Page;
  readonly createBillButton: Locator;
  readonly billForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createBillButton = page.getByRole("link", { name: "New Bill" });
    this.billForm = page.locator("form");
  }

  async createBill(BillData: { billvalue: number; billclick: boolean }) {
    // Click on "Create Bill" button
    await this.createBillButton.click();
    
    // Wait until the form is visible
    await this.page.waitForSelector("text=New Bill");

    // Fill in the bill value
    await expect(this.page.getByText("Value")).toBeVisible();
    await this.page.getByRole("spinbutton").fill(String(BillData.billvalue));

    // Check the checkbox if required
    if (BillData.billclick) {
      await this.page.locator(".checkbox").click();
    }

    // Save the bill
    await expect(this.page.getByText("Save")).toBeVisible();
    await this.page.getByText('Save').click();

    // Ensure the "Bills" heading is visible after saving
    await expect(this.page.getByRole("heading", { name: "Bills" })).toBeVisible();
  }
}
