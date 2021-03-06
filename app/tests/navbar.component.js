import { Selector } from 'testcafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-current-user').exists;
    if (loggedInUser) {
      await testController.click('#navbar-current-user');
      await testController.click('#navbar-sign-out');
    }
  }

  async gotoSigninPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-in');
  }

  /** Check that the specified user is currently logged in. */
  async isLoggedIn(testController, username) {
    const loggedInUser = Selector('#navbar-current-user').innerText;
    await testController.expect(loggedInUser).eql(username);
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-sign-out');
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignupPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-up');
  }

  /** Locations Page */
  async gotoLocationsPage(testController) {
    await testController.click('#locations');
  }

  /** Vendors List Page */
  async gotoVendorsListPage(testController) {
    await testController.click('#vendorsList');
  }

  /** Feeling Hungry Page */
  async gotoFeelingHungryPage(testController) {
    await testController.click('#feelingHungry');
  }

  /** Feeling Hungry Page */
  async gotoMyProfilePage(testController) {
    await testController.click('#myProfile');
  }

  /** All Users */
  async gotoAllUsersPage(testController) {
    await testController.click('#allUsers');
  }

  /** All Vendors */
  async gotoAllVendorsPage(testController) {
    await testController.click('#allVendors');
  }

  /** All Menu Items */
  async gotoAllMenuItemsPage(testController) {
    await testController.click('#allMenuItems');
  }

  /** My Vendor */
  async gotoMyVendorPage(testController) {
    await testController.click('#myVendor');
  }

  /** My Menu Items */
  async gotoMyMenuItemsPage(testController) {
    await testController.click('#myMenuItems');
  }
}

export const navBar = new NavBar();
