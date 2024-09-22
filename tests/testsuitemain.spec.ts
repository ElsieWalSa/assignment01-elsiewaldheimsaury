// import { test, expect, Page } from "@playwright/test";
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


test.describe("Test suite main", () => {
    // let page: Page | undefined; // Declares the page and set it to unddefined
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


// Testcase med fakerjs room
test("Test case 02, create room", async ({ page }) => {
  const roomPage = new RoomPage(page); 
  const roomData = generateRoomData();

  await expect(page.getByRole("heading", { name: "Tester Hotel Overview" })).toBeVisible();
  await page.locator("#app > div > div > div:nth-child(1) > a").click();

  await roomPage.createRoom(roomData);
}); 

  test("Test case 03, Verify that the create data is correct", async ({ page }) => {
    const roomPage = new RoomPage(page); 
    const roomData = generateRoomData();

    await expect(page.getByRole("heading", { name: "Tester Hotel Overview" })).toBeVisible();
    await page.locator("#app > div > div > div:nth-child(1) > a").click();

  // Verify that the data is correct
  const items = page.locator('[class="card room"]');
  const itemCount = await items.count();

  await expect(itemCount).toBeGreaterThan(0);
  const lastRoom = items.nth(itemCount - 1);
  await expect(lastRoom).toContainText(`Floor ${roomData.floornumber}`);
  await expect(lastRoom).toContainText(`Room ${roomData.roomnumber}`);
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




  // await page.waitForTimeout(3000); 
  // await expect(page.getByText("Clients")).toBeVisible();
  // await page.getByRole("link", { name: "Create Client " }).click();
  // await expect(page.getByText("New Client")).toBeVisible();
  // await expect(
  //   page.locator("label").filter({ hasText: /^Name$/ }),
  // ).toBeVisible();
  // await page.locator("div").filter({ hasText: /^Name$/ }).getByRole("textbox").fill(clientdata.clientname);
  // await page.locator('input[type="email"]').fill(clientdata.clientemail);
  // await page.locator("div").filter({ hasText: /^Telephone$/ }).getByRole("textbox").fill(clientdata.clientphonenumber);
  // await page.getByText("Save").click();
  // await expect(page.getByRole("heading", { name: "Clients" })).toBeVisible();

// test("Test case 06, count client after adding a client", async ({ page }) => {
//     const clientPage = new ClientPage(page);
//     const clientData = generateClientData();
//     const counterPage = new CounterPage(page);
    

//     await expect(
//       page.getByRole("heading", { name: "Tester Hotel Overview" }),
//     ).toBeVisible();

//     // click on clients view
//     await page.locator("#app > div > div > div:nth-child(2) > a").click();
//     // await expect(page.getByText("Clients")).toBeVisible();

//     await counterPage.countClients();
//     const firstValueofClients = await counterPage.countClients();
//     const lastValueofClients = 



//     //  count clients after
//     const clientCountAfter = await clientPage.getClientCount();
//     console.log("clients after adding one:", clientCountAfter);

    // Kontrollera att klientantalet har ökat med 1
    // expect(clientCountAfter).toEqual(clientCountBefore + 1);



  
  //   // click on clients view
  //   await page.locator("#app > div > div > div:nth-child(2) > a").click();
  //   await expect(page.getByText("Clients")).toBeVisible();
  
  //   // Count client after adding a client
  // const items = page.locator('[class="card client"]');
  // const itemCountafter = await items.count();
  // expect(itemCountafter).toEqual(itemCount + 1);




// test("Test case 07, verify client data", async ({ page }) => {
//   let itemCountBefore;
//   const clientPage = new ClientPage(page);
//   const clientData = generateClientData();
  
//   // list always start a 0
//   const telephoneDiv = await items
//     .nth(itemCountafter - 1)
//     .locator("div.telephone");
//   // get phonetext from div-element
//   const textContent = await telephoneDiv.textContent();
//   // Log text to consol compare phonenumbers to eachother
//   // console.log(`Text i div-elementet telefon: ${textContent}`);
//   // console.log(`xx:${clientData.clientphonenumber}`);
//   // const telephonenumbertobe = "Telephone: "+ clientData.clientphonenumber;
//   // expect(textContent).toBe(`${telephonenumbertobe}`);

//   const telephoneDiv = await items.nth(itemCountAfter - 1).locator("div.telephone");
//     const textContent = await telephoneDiv.textContent();
//     const telephonenumbertobe = "Telephone: " + clientData.clientphonenumber;
//     expect(textContent).toBe(telephonenumbertobe);

//   // get emailtext from div-element
//   const emailDiv = await items
//     .nth(itemCountafter - 1)
//     .locator("div.email");
//   const emailContent = await emailDiv.textContent();

//   // Log emailtext to consol
//   console.log(`Text i div-elementet email: ${emailContent}`);
//   console.log(`xx:${clientData.clientemail}`);
//   const emailtobe = "Email: "+ clientData.clientemail;
//   expect(emailContent).toBe(`${emailtobe}`);

//   // get text from div-element name
//   const nameDiv = await items.nth(itemCountafter - 1).locator("h3");
//   const nameContent = await nameDiv.textContent();

//   // // Log nametext to consol
//   console.log(`Text i div-elementet name: ${nameContent}`);
//   console.log(`name:${clientData.clientname}`);
//   expect(nameContent).toContain(`${clientData.clientname}`);

//   const namewithnumber = clientData.clientname + " (#" + String(itemCountafter)+")";
//   expect(nameContent).toBe(namewithnumber);

//   });
  
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
    // await billPage.verifyBillsAfterCreation(initialCount, isBillClicked);
 
  });


  // test("Test case 04, create bill", async ({ page }) => {
  //   const clientbill = generateBillData();

  //   await expect(
  //     page.getByRole("heading", { name: "Tester Hotel Overview" }),
  //   ).toBeVisible();

  //   // click on bills view
  //   await page.locator("#app > div > div > div:nth-child(3) > a").click();

  //   // Count number of bills
  //   const items = page.locator('[class="card bill"]');
  //   const itemCount = await items.count();
  //   console.log("Items before", itemCount);

  

  // // Check if the information is correct, count all the bills after adding a bill 
  // const itemCountafter = await items.count();
  // expect(itemCountafter).toEqual(itemCount + 1);
  // console.log("Items after", itemCountafter);

  // // Count id, should be the same as the last element
  // const idDiv = await items.nth(itemCountafter - 1).getByRole('heading').textContent();
  // console.log('ID', idDiv)
  // expect(idDiv).toContain(String(itemCountafter));
  // expect(idDiv).toContain('ID: '+String(itemCountafter));

  // // If bill paid or not
  // const paidDiv = await items.nth(itemCountafter - 1).locator('[class="paid"]');
  // if (clientbill.billclick) 
  //   expect(paidDiv).toContainText('Yes');
  // else
  // expect(paidDiv).toContainText('No');
  
  // });
  test("Test case 08, count a reservation", async ({ page }) => {




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
test("Test case 10, check if reservation is correct", async ({page}) => {
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

});

  // Do a new reservation
  // await page.waitForTimeout(3000); 
  // await expect(page.getByText("Reservations")).toBeVisible();
  // await page.getByRole("link", { name: "Create Reservation" }).click();
  // await expect(page.getByText("New Reservation")).toBeVisible();
  // await expect(page.getByText("Start")).toBeVisible();
  // await page.locator("div").filter({ hasText: /^Start \(Format YYYY-MM-DD\)$/ }).getByPlaceholder("YYYY-MM-DD").fill(String(reservationdata.reservationStart));
  // await page.locator("div").filter({ hasText: /^End \(Format YYYY-MM-DD\)$/ }).getByPlaceholder("YYYY-MM-DD").fill(String(reservationdata.reservationEnd));
  
// slumpa inom det som finns i listorna - är ett tal som finns i listan
  // await page.waitForTimeout(3000); 
	// await page.getByRole("combobox").first().waitFor({ state: 'attached' });
  // await page.getByRole("combobox").first().selectOption(String(reservationdata.reservationclient));
  // await page.waitForTimeout(3000); 
  // await page.getByRole("combobox").nth(1).waitFor({ state: 'attached' });
  // await page.getByRole("combobox").nth(1).selectOption(String(reservationdata.reservationroom));
  // await page.waitForTimeout(3000); 
	// await page.getByRole("combobox").nth(2).waitFor({ state: 'attached' });
  // await page.getByRole("combobox").nth(2).selectOption(String(reservationdata.reservationbill));
  // await page.waitForTimeout(3000); 
  // await page.getByText("Save").waitFor({ state: 'visible' });
  // await page.getByText("Save").click();
	// await page.waitForSelector('text="Reservations"');
	// await expect(page.getByText("Reservations" )).toBeVisible();

  // // Count reservations after adding a new reservation, to see that they match
  // const itemsafter = page.locator('[class="card reservation card"]');
  // const itemCountafter = await itemsafter.count();
  // expect(itemCountafter).toEqual(itemCount + 1);
  // console.log("itemsafter",itemCountafter);
  

// Göra en teardown i min data och logga ut och se att all data försvunnit
// afterall - 
test.afterEach('Teardown', async ({page}) => {
  await page.waitForTimeout(3000); 
  if (page) {  // control `page` 
    console.log('Teardown after tests');
    await page.close(); // close the side if it is open
  } else {
    console.log('No page to close');
      }
    });
  });


