import { Selector } from 'testcafe';

class MyProfilePage {
  constructor() {
    this.pageId = '#myprofile';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoEditProfilePage(testController) {
    await testController.click('#editProfileButton');
  }
}

export const myProfilePage = new MyProfilePage();
