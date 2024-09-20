import { Page, Locator } from "@playwright/test";

export class RoomPage {
    readonly page: Page;
    readonly createRoomButton: Locator;
    readonly roomForm: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.createRoomButton = page.getByRole("link", { name: "Create Room" });
      this.roomForm = page.locator("form");
    }
  
    async createRoom(roomData: any) {
    // Click on create room -button
      await this.page.getByRole("link", { name: "Create Room" }).click();
      await this.page.waitForSelector("text=New Room");

        // Choose roomdata
        await this.page.getByRole("combobox").selectOption(roomData.roomcategory);
        await this.page.locator("div").filter({ hasText: /^Number$/ }).getByRole("spinbutton").fill(String(roomData.roomnumber));
        await this.page.locator("div").filter({ hasText: /^Floor$/ }).getByRole("spinbutton").fill(String(roomData.floornumber));

        if (roomData.roomavailable) {
            await this.page.locator(".checkbox").click();
          }
      
          await this.page.locator("div").filter({ hasText: /^Price$/ }).getByRole("spinbutton").fill(String(roomData.roomprice));
          await this.page.getByRole("listbox").selectOption(roomData.roomfeatures);
          
          // Click on svae for saving the room
          await this.page.getByText("Save").click();
        }
      }
    

    //   await this.roomForm.getByRole("combobox").selectOption(roomData.roomcategory);
    //   await this.roomForm.locator("div", { hasText: "Number" }).getByRole("spinbutton").fill(String(roomData.roomnumber));
    //   await this.roomForm.locator("div", { hasText: "Floor" }).getByRole("spinbutton").fill(String(roomData.floornumber));
    //   await this.roomForm.locator("div", { hasText: "Price" }).getByRole("spinbutton").fill(String(roomData.roomprice));
    //   if (roomData.roomavailable) {
    //     await this.roomForm.locator(".checkbox").click();
    //   }
    //   await this.roomForm.getByText("Save").click();
//     }
//   }