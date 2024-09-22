import { DashboardPage } from "./pages/dashboard-page";
import { LoginPage } from "./pages/login-page";
import { config } from "dotenv";
import { faker } from "@faker-js/faker";
import { generateUserData, generateRoomData, generateBillData, generateReservationData, generateDates} from './testdata'; 
import { CountBillPage } from "./pages/CountBillPage";
import { Page, expect, test } from "@playwright/test";
import { BillPage } from "./pages/BillPage";
import { ReservationPage } from "./pages/ReservationPage";
import { generateClientData } from "./testdata";
import { CounterPage } from "./pages/CounterPage";
import { ClientPage } from "./pages/ClientPage";
import { RoomPage } from "./pages/RoomPage";
import { CountReservationPage } from "./pages/CountReservationPage";
import { VerifyReservationPage } from "./pages/VerifyReservationPage";


test.describe("Test suite main", () => {
    test.beforeEach(async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.performLogin(
        `${process.env.TEST_USERNAME}`,
        `${process.env.TEST_PASSWORD}`,
      );
  });
test("Test case 01, log in and out", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`,`${process.env.TEST_PASSWORD}`);
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
  await dashboardPage.performLogout();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  });

test("Test case 02, create room", async ({ page }) => {
  const roomPage = new RoomPage(page); 
  const roomData = generateRoomData();

  await expect(page.getByRole("heading", { name: "Tester Hotel Overview" })).toBeVisible();
  await page.locator("#app > div > div > div:nth-child(1) > a").click();

  await roomPage.createRoom(roomData);
}); 

  test("Test case 03, Verify that the create room is correct", async ({ page }) => {
    const roomPage = new RoomPage(page); 
    const roomData = generateRoomData();

    await expect(page.getByRole("heading", { name: "Tester Hotel Overview" })).toBeVisible();
    await page.locator("#app > div > div > div:nth-child(1) > a").click();
    await roomPage.createRoom(roomData);

  // Verify that the data is correct
  const items = page.locator('[class="card room"]');
  const itemCount = await items.count();

  await expect(itemCount).toBeGreaterThan(0);
  const lastRoom = items.nth(itemCount - 1);
  await expect(lastRoom).toContainText(`Floor ${roomData.floornumber}`);
  console.log(`Floor ${roomData.floornumber}`);
  await expect(lastRoom).toContainText(`Room ${roomData.roomnumber}`);
  console.log(`Room ${roomData.roomnumber}`)
});

test("Test case 04, count clients", async ({ page }) => {
  const clientPage = new ClientPage(page);
  const clientData = generateClientData();
  const counterPage = new CounterPage(page);

  await expect(
    page.getByRole("heading", { name: "Tester Hotel Overview" }),
  ).toBeVisible();

  // click on clients view
  await page.locator("#app > div > div > div:nth-child(2) > a").click();

  await counterPage.countClients();
  
});

test("Test case 05, create clients and count", async ({ page }) => {
  const clientPage = new ClientPage(page);
  const counterPage = new CounterPage(page);

  await expect(page.getByRole("heading", { name: "Tester Hotel Overview" })).toBeVisible();
  await page.locator("#app > div > div > div:nth-child(2) > a").click();

  // count clients before
  const firstValueofClients = await counterPage.countClients();

  await clientPage.createClient();

  await expect(page.getByRole("heading", { name: "Clients" })).toBeVisible();

  // Count client after addinge one
  const lastValueofClients = await counterPage.countClients()

  await expect(lastValueofClients-firstValueofClients).toBe(1);
  console.log(lastValueofClients-firstValueofClients);
});

    
  test("Test case 06, create bill", async ({ page }) => {
    const billPage = new BillPage(page);
    const BillData = generateBillData();
    
    await expect(page.getByRole("heading", { name: "Tester Hotel Overview" }),).toBeVisible();

    // click on bills view
    await page.locator("#app > div > div > div:nth-child(3) > a").click();
    await billPage.createBill(BillData);

    // Count number of bills
    const items = page.locator('[class="card bill"]');
    const itemCount = await items.count();
    console.log("Items before", itemCount);
  });

  test("Test case 07, create and verify billdata", async ({ page }) => {
    const billPage = new BillPage(page);
    const BillData = generateBillData();
    const countBillPage = new CountBillPage(page); 

    await expect(page.getByRole("heading", { name: "Tester Hotel Overview" }),).toBeVisible();

    // click on bills view
    await page.locator("#app > div > div > div:nth-child(3) > a").click();
    await billPage.createBill(BillData);
    
    // Count bill before
    const initialCount = await countBillPage.countBill();
    
    await billPage.createBill(BillData); 

    // Control if bill is payed 
    const isBillClicked = true; 
 
  });

  test("Test case 08, count a reservation", async ({ page }) => {
    const clientData = generateClientData();
    const countReservationPage = new CountReservationPage(page);

    await expect(
      page.getByRole("heading", { name: "Tester Hotel Overview" }),
    ).toBeVisible();
  
    // click on clients view
    await page.locator("#app > div > div > div:nth-child(4) > a").click();
    
    // Count clients
    await countReservationPage.countReservation();
  });
 
  test("Test case 09, create a reservation", async ({ page }) => {
    const reservationPage = new ReservationPage(page);
    const ReservationData = generateReservationData();
    
    await expect(page.getByRole("heading", { name: "Tester Hotel Overview" }),).toBeVisible();

    // click on reservation view
    await page.locator("#app > div > div > div:nth-child(4) > a").click();
    await reservationPage.createReservation(ReservationData);
  });

  // Do a reservation and check if the information is correct
test("Test case 10, verify reservation", async ({page}) => {
  const reservationdata = generateReservationData();
    console.log("starts here", reservationdata.reservationStart);
    console.log("ends here", reservationdata.reservationEnd);
  
    const retries = test.info().retry;
    console.log(`This is retry number: ${retries}`);
  
    const verifyreservationPage = new VerifyReservationPage(page);

    await expect(
      page.getByRole("heading", { name: "Tester Hotel Overview" })
  ).toBeVisible();

  await verifyreservationPage.navigateToReservations();

  const itemCount = await verifyreservationPage.countReservations();
  console.log("Items", itemCount);
  

});

// Teardown 
test.afterEach('Teardown', async ({page}) => {
  await page.waitForTimeout(3000); 
  if (page) {  
    console.log('Teardown after tests');
    await page.close(); 
  } else {
    console.log('No page to close');
      }
    });
  });


