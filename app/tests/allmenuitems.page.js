import { Selector } from 'testcafe';

class AllMenuItemsPage {
  constructor() {
    this.pageId = '#allUsers';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const allMenuItemsPage = new AllMenuItemsPage();
