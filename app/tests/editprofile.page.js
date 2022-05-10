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
    await testController.typeText('#editprofile-firstName', firstName);
    await testController.typeText('#editprofile-lastName', lastName);
    await testController.typeText('#editprofile-address', address);
    await testController.typeText('#editprofile-image', image);
    await testController.typeText('#editprofile-owner', owner);
    await testController.typeText('#editprofile-description', description);
    await testController.click('#editprofile-submit');
  }
}

export const editProfilePage = new EditProfilePage();
