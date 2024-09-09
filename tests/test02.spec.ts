import { test, expect } from "@playwright/test";

test.describe("My Test Suite", () => {
  test.beforeAll(async () => {
    console.log("beforeAll: Körs en gång före alla tester i denna suite");
  });

  test.beforeEach(async ({ page }) => {
    console.log("beforeEach: Körs före varje test");
    // await page.goto('https://example.com');
  });

  test("Test 1", async ({ page }) => {
    console.log("Test 1: Körs nu");
    // await expect(page).toHaveURL('https://example.com');
  });

  test("Test 2", async ({ page }) => {
    console.log("Test 2: Körs nu");
    // await expect(page).toHaveURL('https://example.com');
  });
});
