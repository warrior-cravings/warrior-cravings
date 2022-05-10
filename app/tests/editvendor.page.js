import { Selector } from 'testcafe';

class EditVendorPage {
  constructor() {
    this.pageId = '#editvendor';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async editVendor(testController, name, location, image, description) {
    await testController.typeText('#editvendor-name', name);
    await testController.typeText('#editvendor-location', location);
    await testController.typeText('#editvendor-image', image);
    await testController.typeText('#editvendor-description', description);
    await testController.click('#editvendor-submit');
  }
}

export const editVendorPage = new EditVendorPage();
