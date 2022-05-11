import { Selector } from 'testcafe';

class EditMenuItemPage {
  constructor() {
    this.pageId = '#editmenuitem';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async editItem(testController, name, ingredients) {
    await this.isDisplayed(testController);
    await testController
      .click('#edititem-name')
      .pressKey('ctrl+a delete')
      .typeText('#edititem-name', name);
    await testController.pressKey('tab');
    await testController.pressKey('down');
    await testController.pressKey('enter');
    await testController.pressKey('tab');
    await testController
      .click('#edititem-ingredients')
      .pressKey('ctrl+a delete')
      .typeText('#edititem-ingredients', ingredients);
    await testController.click('#edititem-submit');
  }
}

export const editMenuItemPage = new EditMenuItemPage();
