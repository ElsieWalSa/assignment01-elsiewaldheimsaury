import { test, expect } from "@playwright/test";
import { DashboardPage } from "./dashboard-page";
import { LoginPage } from "./login-page";
import { config } from "dotenv";
import { faker } from "@faker-js/faker";
import { generateUserData, generateRoomData} from './testdata';
config();

// console.log('Test is starting1');

const url = process.env.BASE_URL;
// console.log('Base URL:', url);
// console.log('User:',process.env.TEST_USERNAME);
// console.log('pw:', process.env.TEST_PASSWORD);

test.describe("Test suite 01", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.goto();
    await loginPage.performLogin(
      `${process.env.TEST_USERNAME}`,
      `${process.env.TEST_PASSWORD}`,
    );
  });

  // Log in and logout to testers hotel
  test("Test case 01", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await expect(
      page.getByRole("heading", { name: "Tester Hotel Overview" }),
    ).toBeVisible();
    await dashboardPage.performLogout();
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
    await page.waitForTimeout(5000);
  });

  // To create a room
  test("Test case 02", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Tester Hotel Overview" }),
    ).toBeVisible();

    // click on button room
    await page.locator("#app > div > div > div:nth-child(1) > a").click();

    // Count number of rooms
    const items = page.locator('[class="card room"]');
    const itemCount = await items.count();
    console.log("Items", itemCount);

    
     // Create Room
    await page.getByRole("link", { name: "Create Room" }).click();
    await expect(page.getByText("New Room")).toBeVisible();
    await expect(
      page.locator("label").filter({ hasText: /^Category$/ }),
    ).toBeVisible();
    await page.getByRole("combobox").selectOption("Single");
    await page
      .locator("div")
      .filter({ hasText: /^Number$/ })
      .getByRole("spinbutton")
      .fill("1307");
    await page
      .locator("div")
      .filter({ hasText: /^Floor$/ })
      .getByRole("spinbutton")
      .fill("13");
    await page.locator(".checkbox").click();
    await page
      .locator("div")
      .filter({ hasText: /^Price$/ })
      .getByRole("spinbutton")
      .fill("1000");
    await page
      .getByRole("listbox")
      .selectOption(["Sea View", "Balcony", "Ensuite"]);
    await page.getByText("Save").click();
    await expect(page.getByRole("heading", { name: "Rooms" })).toBeVisible();

    // Count rooms after adding a room
    const itemCountafter = await items.count();
    expect(itemCountafter).toEqual(itemCount + 1);

    // Check that information is correct
    await expect(
      items.nth(itemCountafter - 1).locator('text="Floor 13, Room 1307"'),
    ).toBeVisible();
    await expect(
      items
        .nth(itemCountafter - 1)
        .locator('h3:has-text("Floor 13, Room 1307")'),
    ).toBeVisible();
  });

  // Create client
  test("Test case 03", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Tester Hotel Overview" }),
    ).toBeVisible();

    // click on clients view
    await page.locator("#app > div > div > div:nth-child(2) > a").click();

    // Count number of clients
    const items = page.locator('[class="card client"]');
    const itemCount = await items.count();
    console.log("Items", itemCount);

    // create new client
    await expect(page.getByText("Clients")).toBeVisible();
    await page.getByRole("link", { name: "Create Client " }).click();
    await expect(page.getByText("New Client")).toBeVisible();
    await expect(
      page.locator("label").filter({ hasText: /^Name$/ }),
    ).toBeVisible();
    await page
      .locator("div")
      .filter({ hasText: /^Name$/ })
      .getByRole("textbox")
      .fill("Nils");
    await page.locator('input[type="email"]').fill("nisse@x.com");
    await page
      .locator("div")
      .filter({ hasText: /^Telephone$/ })
      .getByRole("textbox")
      .fill("070-1235689");
    await page.getByText("Save").click();
    await expect(page.getByRole("heading", { name: "Clients" })).toBeVisible();

    // Check if the information is correct
    // Count client after adding a client
    const itemCountafter = await items.count();
    expect(itemCountafter).toEqual(itemCount + 1);

    // list always start a 0
    const telephoneDiv = await items
      .nth(itemCountafter - 1)
      .locator("div.telephone");

    // get text from div-element
    const textContent = await telephoneDiv.textContent();

    // Log text to consol
    console.log(`Text i div-elementet: ${textContent}`);
    expect(textContent).toBe("Telephone: 070-1235689");
    const emailDiv = await items.nth(itemCountafter - 1).locator("div.email");

    // get text from div-element
    const emailContent = await emailDiv.textContent();

    // Log text to consol
    console.log(`Text i div-elementet: ${emailContent}`);
    expect(emailContent).toBe("Email: nisse@x.com");
    const nameDiv = await items.nth(itemCountafter - 1).locator("h3");

    // get text from div-element
    const nameContent = await nameDiv.textContent();

    // Log text to consol
    console.log(`Text i div-elementet: ${nameContent}`);
    expect(nameContent).toContain("Nils");
  });

  // Add a bill
  test("Test case 04", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Tester Hotel Overview" }),
    ).toBeVisible();

    // click on bills view
    await page.locator("#app > div > div > div:nth-child(3) > a").click();

    // Count number of bills
    const items = page.locator('[class="card bill"]');
    const itemCount = await items.count();
    console.log("Items before", itemCount);

    // create new bill
    await expect(page.getByText("Bills")).toBeVisible();
    await page.getByRole("link", { name: "Create Bill" }).click();
    await expect(page.getByText("New Bill")).toBeVisible();
    await expect(page.getByText("Value")).toBeVisible();
    await page.getByRole("spinbutton").fill("1");

    // half of the click is false
    const paidclick = faker.datatype.boolean(0.5) 
    console.log('fejk',paidclick);
    if (paidclick) {
      await page.locator(".checkbox").click();
  }
    // await page.locator(".checkbox").click();
    await page.getByText('Save').click();
    await expect(page.getByRole("heading", { name: "Bills" })).toBeVisible();

    // checkbox - ej klickat i

    // Check if the information is correct
    // Count all the bills after adding a bill 
    const itemCountafter = await items.count();
    expect(itemCountafter).toEqual(itemCount + 1);
    console.log("Items after", itemCountafter);

    // Count id, should be the same as the last element
    const idDiv = await items.nth(itemCountafter - 1).getByRole('heading').textContent();
    console.log('ID', idDiv)
    expect(idDiv).toContain(String(itemCountafter));
    expect(idDiv).toContain('ID: '+String(itemCountafter));

    // If bill paid or not
    const paidDiv = await items.nth(itemCountafter - 1).locator('[class="paid"]');
    if (paidclick) 
      expect(paidDiv).toContainText('Yes');
    else
    expect(paidDiv).toContainText('No');
// 1000000000 value max 
    
   

  });
  // Do a reservation and check if the information is correct
  test("Test case 05", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Tester Hotel Overview" }),
    ).toBeVisible();

    // click on reservations view
    await page.locator("#app > div > div > div:nth-child(4) > a").click();

    // Count number of reservations
    const items = page.locator('[class="card reservation card"]');
    const itemCount = await items.count();
    console.log("Items", itemCount);

    // Do a new reservation

    await expect(page.getByText("Reservations")).toBeVisible();
    await page.getByRole("link", { name: "Create Reservation" }).click();
    await expect(page.getByText("New Reservation")).toBeVisible();
    await expect(page.getByText("Start")).toBeVisible();
    await page
      .locator("div")
      .filter({ hasText: /^Start \(Format YYYY-MM-DD\)$/ })
      .getByPlaceholder("YYYY-MM-DD")
      .fill("2024-09-09");
    await page
      .locator("div")
      .filter({ hasText: /^End \(Format YYYY-MM-DD\)$/ })
      .getByPlaceholder("YYYY-MM-DD")
      .fill("2024-09-11");
    await page.getByRole("combobox").first().selectOption("3");
    await page.getByRole("combobox").nth(1).selectOption("3");
    await page.getByRole("combobox").nth(2).selectOption("3");

    // // Count reservations after adding a new reservation
    // const itemCountafter = await items.count();
    // expect(itemCountafter).toEqual(itemCount + 1);
  });
  // Log out and se if the added information is gone, check Room, clients, bills and reservation
  test("Test case 06", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Tester Hotel Overview" }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Logout" }).click();
    await expect(page.getByText("Login")).toBeVisible();

  });
    // Jag vill logga ut och sedan logga in och se att informationen jag lagt in i ovanstående test ligger kvar
    // -borde kunna läsa in informationen i ovanstående test 
    // Vill lägga in randomiserande data med fakerjs -läsa på
    // Göra en setup och teardown - setup för att slippa upprepa min inloggningskod i varje test
    // Page objects model -läsa på 

    // Testcase med faker room
    test("Test case 07", async ({ page }) => {
      await expect(
        page.getByRole("heading", { name: "Tester Hotel Overview" }),
      ).toBeVisible();

      const roomData = generateRoomData();
      console.log('roomnumber', roomData.roomnumber);
      console.log('floornumber', roomData.floornumber);
      console.log('roomavailable', roomData.roomavailable);
      console.log('roomprice', roomData.roomprice);
      console.log('roomcategory', roomData.roomcategory);
      console.log('roomfeatures', roomData.roomfeatures);

      // click on button room
    await page.locator("#app > div > div > div:nth-child(1) > a").click();

    // Count number of rooms
    const items = page.locator('[class="card room"]');
    const itemCount = await items.count();
    console.log("Items", itemCount);

    await page.getByRole("link", { name: "Create Room" }).click();
    await expect(page.getByText("New Room")).toBeVisible();
    await expect(
      page.locator("label").filter({ hasText: /^Category$/ }),
    ).toBeVisible();
    await page.getByRole("combobox").selectOption(roomData.roomcategory);
    await page.locator("div").filter({ hasText: /^Number$/ }).getByRole("spinbutton").fill(String(roomData.roomnumber));
    await page.locator("div").filter({ hasText: /^Floor$/ }).getByRole("spinbutton").fill(String(roomData.floornumber));
    if (roomData.roomavailable) {
      await page.locator(".checkbox").click();
  }
    await page.locator("div").filter({ hasText: /^Price$/ }).getByRole("spinbutton").fill(String(roomData.roomprice));
    await page.getByRole("listbox").selectOption(roomData.roomfeatures);
    await page.getByText("Save").click();
    await expect(page.getByRole("heading", { name: "Rooms" })).toBeVisible();



    });



});
