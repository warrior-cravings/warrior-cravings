import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { feelingHungryPage } from './feelinghungry.page';
import { listMenuItemsUserPage } from './listmenuitemsuser.page';
import { listVendorsUserPage } from './listvendorsuser.page';
import { locationPage } from './location.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that feeling hungry page shows up', async (testController) => {
  await feelingHungryPage.isDisplayed(testController);
});

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that list menu items page shows up', async (testController) => {
  await listMenuItemsUserPage.isDisplayed(testController);
});

test('Test that list vendors page shows up', async (testController) => {
  await listVendorsUserPage.isDisplayed(testController);
});

test('Test that location page shows up', async (testController) => {
  await locationPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});
