import { Selector } from 'testcafe';

class EditProfilePage {
  constructor() {
    this.pageId = '#editvendor';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async editProfile(testController, firstName, lastName, address, image, owner, description) {
    await testController
      .click('#editprofile-firstName')
      .pressKey('ctrl+a delete')
      .typeText('#editprofile-firstName', firstName);
    await testController
      .click('#editprofile-lastName')
      .pressKey('ctrl+a delete')
      .typeText('#editprofile-lastName', lastName);
    await testController
      .click('#editprofile-address')
      .pressKey('ctrl+a delete')
      .typeText('#editprofile-address', address);
    await testController
      .click('#editprofile-image')
      .pressKey('ctrl+a delete')
      .typeText('#editprofile-image', image);
    await testController
      .click('#editprofile-owner')
      .pressKey('ctrl+a delete')
      .typeText('#editprofile-owner', owner);
    await testController
      .click('#editprofile-description')
      .pressKey('ctrl+a delete')
      .typeText('#editprofile-description', description);
    await testController.click('#editprofile-submit');
  }
}

export const editProfilePage = new EditProfilePage();
