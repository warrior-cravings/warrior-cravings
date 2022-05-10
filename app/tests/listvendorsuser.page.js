import { Selector } from 'testcafe';

class ListVendorsUserPage {
  constructor() {
    this.pageId = '#listVenU';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const listVendorsUserPage = new ListVendorsUserPage();
