import { test, expect } from "@playwright/test";

test.describe("My Test Suite", () => {
  // Körs innan alla tester i denna test suite
  test.beforeAll(async ({ browser }) => {
    console.log("Before all");
    // Ställ in globala inställningar här
  });

  // Körs innan varje test i denna test suite
  test.beforeEach(async ({ page }) => {
    console.log("before each");
    // Navigera till en specifik sida före varje test
  });

  test("Example test", async ({ page }) => {
    // Ditt test här
    console.log("Test 01");
  });

  test("Example test02", async ({ page }) => {
    // Ditt test här
    console.log("Test 02");
  });
});
