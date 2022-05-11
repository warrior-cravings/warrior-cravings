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
    await testController
      .click('#editvendor-name')
      .pressKey('ctrl+a delete')
      .typeText('#editvendor-name', name);
    await testController
      .click('#editvendor-location')
      .pressKey('ctrl+a delete')
      .typeText('#editvendor-location', location);
    await testController
      .click('#editvendor-image')
      .pressKey('ctrl+a delete')
      .typeText('#editvendor-image', image);
    await testController
      .click('#editvendor-description')
      .pressKey('ctrl+a delete')
      .typeText('#editvendor-description', description);
    await testController.click('#editvendor-submit');
  }
}

export const editVendorPage = new EditVendorPage();
