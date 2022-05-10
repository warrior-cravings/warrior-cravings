import { Selector } from 'testcafe';

class AddMenuItemPage {
  constructor() {
    this.pageId = '#addmenuitem';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async addItem(testController, name, ingredients) {
    await this.isDisplayed(testController);
    await testController.typeText('#additem-name', name);
    await testController.click('#additem-mealtype');
    await testController.typeText('#additem-ingredients', ingredients);
    await testController.click('#additem-submit');
  }
}

export const addMenuItemPage = new AddMenuItemPage();
