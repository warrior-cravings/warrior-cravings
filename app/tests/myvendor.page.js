import { Selector } from 'testcafe';

class MyVendorPage {
  constructor() {
    this.pageId = '#myVendor';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoEditVendorPage(testController) {
    await testController.click('#editVendorButton');
  }
}

export const myVendorPage = new MyVendorPage();
