import { test, expect, Page } from "@playwright/test";
import { DashboardPage } from "./dashboard-page";
import { LoginPage } from "./login-page";
import { config } from "dotenv";
import { faker } from "@faker-js/faker";
import { generateUserData, generateRoomData, generateClientData, generateBillData, generateReservationData, generateDates} from './testdata';

test.describe("Test suite main", () => {
  let page: Page | undefined; // Declares the page and set it to unddefined
    test.beforeEach(async ({ page }) => {
      const loginPage = new LoginPage(page);
      const dashboardPage = new DashboardPage(page);
      await loginPage.goto();
      await loginPage.performLogin(
        `${process.env.TEST_USERNAME}`,
        `${process.env.TEST_PASSWORD}`,
      );
    });

test("Test case 01", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await expect(
        page.getByRole("heading", { name: "Tester Hotel Overview" }),
    ).toBeVisible();
    await dashboardPage.performLogout();
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
    await page.waitForTimeout(5000);
      });

// Testcase med fakerjs room
test("Test case 02, create room", async ({ page }) => {
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

  // Create Room
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

  // Count rooms after adding a room
  const itemCountafter = await items.count();
  expect(itemCountafter).toEqual(itemCount + 1);

  // Check that information is correct
  const textinformation = "Floor "+ String(roomData.floornumber)+", Room "+String(roomData.roomnumber);

  await expect(
    items.nth(itemCountafter - 1).locator(`text=${textinformation}`)).toBeVisible();
  await expect(
    items
      .nth(itemCountafter - 1)
    .locator(`h3:has-text("${textinformation}")`),
  ).toBeVisible();
  });

  // Create client with faker js
test("Test case 03, create client", async ({ page }) => {
  const clientdata = generateClientData();

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
  await page.waitForTimeout(3000); 
  await expect(page.getByText("Clients")).toBeVisible();
  await page.getByRole("link", { name: "Create Client " }).click();
  await expect(page.getByText("New Client")).toBeVisible();
  await expect(
    page.locator("label").filter({ hasText: /^Name$/ }),
  ).toBeVisible();
  await page.locator("div").filter({ hasText: /^Name$/ }).getByRole("textbox").fill(clientdata.clientname);
  await page.locator('input[type="email"]').fill(clientdata.clientemail);
  await page.locator("div").filter({ hasText: /^Telephone$/ }).getByRole("textbox").fill(clientdata.clientphonenumber);
  await page.getByText("Save").click();
  await expect(page.getByRole("heading", { name: "Clients" })).toBeVisible();

  // Count client after adding a client
  const itemCountafter = await items.count();
  expect(itemCountafter).toEqual(itemCount + 1);

  // list always start a 0
  const telephoneDiv = await items
    .nth(itemCountafter - 1)
    .locator("div.telephone");
  // get phonetext from div-element
  const textContent = await telephoneDiv.textContent();
  // Log text to consol compare phonenumbers to eachother
  console.log(`Text i div-elementet telefon: ${textContent}`);
  console.log(`xx:${clientdata.clientphonenumber}`);
  const telephonenumbertobe = "Telephone: "+ clientdata.clientphonenumber;
  expect(textContent).toBe(`${telephonenumbertobe}`);
  
  // get emailtext from div-element
  const emailDiv = await items
    .nth(itemCountafter - 1)
    .locator("div.email");
  const emailContent = await emailDiv.textContent();

  // Log emailtext to consol
  console.log(`Text i div-elementet email: ${emailContent}`);
  console.log(`xx:${clientdata.clientemail}`);
  const emailtobe = "Email: "+ clientdata.clientemail;
  expect(emailContent).toBe(`${emailtobe}`);

  // get text from div-element name
  const nameDiv = await items.nth(itemCountafter - 1).locator("h3");
  const nameContent = await nameDiv.textContent();

  // // Log nametext to consol
  console.log(`Text i div-elementet name: ${nameContent}`);
  console.log(`name:${clientdata.clientname}`);
  expect(nameContent).toContain(`${clientdata.clientname}`);

  const namewithnumber = clientdata.clientname + " (#" + String(itemCountafter)+")";
  expect(nameContent).toBe(namewithnumber);
  }); 
  // Create bill with fakerjs
  test("Test case 04, create bill", async ({ page }) => {
    const clientbill = generateBillData();

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
  await page.getByRole("spinbutton").fill(String(clientbill.billvalue));
  if (clientbill.billclick) {
    await page.locator(".checkbox").click();
  }
  await page.getByText('Save').click();
  await expect(page.getByRole("heading", { name: "Bills" })).toBeVisible();

  // Check if the information is correct, count all the bills after adding a bill 
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
  if (clientbill.billclick) 
    expect(paidDiv).toContainText('Yes');
  else
  expect(paidDiv).toContainText('No');
  
  });
  // Do a reservation and check if the information is correct
test("Test case 05, create a reservation", async ({ page }) => {
  const reservationdata = generateReservationData ();
  console.log("startar här",reservationdata.reservationStart);

  console.log("slutar här",reservationdata.reservationEnd);
  const retries = test.info().retry;
  console.log(`This is retry number: ${retries}`);
 
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
  await page.waitForTimeout(3000); 
  await expect(page.getByText("Reservations")).toBeVisible();
  await page.getByRole("link", { name: "Create Reservation" }).click();
  await expect(page.getByText("New Reservation")).toBeVisible();
  await expect(page.getByText("Start")).toBeVisible();
  await page.locator("div").filter({ hasText: /^Start \(Format YYYY-MM-DD\)$/ }).getByPlaceholder("YYYY-MM-DD").fill(String(reservationdata.reservationStart));
  await page.locator("div").filter({ hasText: /^End \(Format YYYY-MM-DD\)$/ }).getByPlaceholder("YYYY-MM-DD").fill(String(reservationdata.reservationEnd));
  
// slumpa inom det som finns i listorna - är ett tal som finns i listan
  await page.waitForTimeout(3000); 
	await page.getByRole("combobox").first().waitFor({ state: 'attached' });
  await page.getByRole("combobox").first().selectOption(String(reservationdata.reservationclient));
  await page.waitForTimeout(3000); 
  await page.getByRole("combobox").nth(1).waitFor({ state: 'attached' });
  await page.getByRole("combobox").nth(1).selectOption(String(reservationdata.reservationroom));
  await page.waitForTimeout(3000); 
	await page.getByRole("combobox").nth(2).waitFor({ state: 'attached' });
  await page.getByRole("combobox").nth(2).selectOption(String(reservationdata.reservationbill));
  await page.waitForTimeout(3000); 
  await page.getByText("Save").waitFor({ state: 'visible' });
  await page.getByText("Save").click();
	await page.waitForSelector('text="Reservations"');
	await expect(page.getByText("Reservations" )).toBeVisible();

  // Count reservations after adding a new reservation, to see that they match
  const itemsafter = page.locator('[class="card reservation card"]');
  const itemCountafter = await itemsafter.count();
  expect(itemCountafter).toEqual(itemCount + 1);
  console.log("itemsafter",itemCountafter);
});

// Göra en teardown i min data och logga ut och se att all data försvunnit
// afterall - 
test.afterAll(async () => {
  if (page) {  // control `page` 
    console.log('Teardown after all tests');
    await page.close(); // close the side if it is open
  } else {
    console.log('No page to close');
  }
});
});