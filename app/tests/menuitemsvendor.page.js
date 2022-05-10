import { Selector } from 'testcafe';

class MenuItemsVendorPage {
  constructor() {
    this.pageId = '#menuItemsVendor';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const menuItemsVendorPage = new MenuItemsVendorPage();
