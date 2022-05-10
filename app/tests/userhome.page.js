import { Selector } from 'testcafe';

class UserHomePage {
  constructor() {
    this.pageId = '#userhome';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const userHomePage = new UserHomePage();
