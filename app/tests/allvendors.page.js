import { Selector } from 'testcafe';

class AllVendorsPage {
  constructor() {
    this.pageId = '#allVendors';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoAddVendorPage(testController) {
    await testController.click('#addVendorButton');
  }
}

export const allVendorsPage = new AllVendorsPage();
