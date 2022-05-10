import { Selector } from 'testcafe';

class AddVendorPage {
  constructor() {
    this.pageId = '#addvendor';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async addVendor(testController, name, email, location, image, description) {
    await this.isDisplayed(testController);
    await testController.typeText('#addvendor-name', name);
    await testController.typeText('#addvendor-email', email);
    await testController.typeText('#addvendor-location', location);
    await testController.typeText('#addvendor-image', image);
    await testController.typeText('#addvendor-description', description);
    await testController.click('#addvendor-submit');
  }
}

export const addVendorPage = new AddVendorPage();
