import { Selector } from 'testcafe';

class VendorHomePage {
  constructor() {
    this.pageId = '#vendorhome';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const vendorHomePage = new VendorHomePage();
