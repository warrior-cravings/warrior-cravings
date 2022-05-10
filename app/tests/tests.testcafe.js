import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { feelingHungryPage } from './feelinghungry.page';
// import { listMenuItemsUserPage } from './listmenuitemsuser.page';
import { listVendorsUserPage } from './listvendorsuser.page';
import { locationPage } from './location.page';
import { myProfilePage } from './myprofile.page';
import { userHomePage } from './userhome.page';
import { adminHomePage } from './adminhome.page';
import { allUsersPage } from './allusers.page';
import { allVendorsPage } from './allvendors.page';
import { allMenuItemsPage } from './allmenuitems.page';
import { listMenuItemsUserPage } from './listmenuitemsuser.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const credentialsA = { username: 'admin@foo.com', password: 'changeme' };
const createMenuItem = { name: 'croissant', mealType: 'Dessert', ingredients: '[flour, butter, water, yeast, sugar, salt, egg, milk]' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that user home page work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await userHomePage.isDisplayed(testController);
});

test('Test that location page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoLocationsPage(testController);
  await locationPage.isDisplayed(testController);
});

test('Test that list vendors page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoVendorsListPage(testController);
  await listVendorsUserPage.isDisplayed(testController);
});

// test.only('Test that list menu items user page shows up', async (testController) => {
//   await navBar.gotoSigninPage(testController);
//   await signinPage.signin(testController, credentials.username, credentials.password);
//   await navBar.gotoVendorsListPage(testController);
//   await listVendorsUserPage.gotoListMenuItemUser(testController);
//   await listMenuItemsUserPage.isDisplayed(testController);
// });

test('Test that feeling hungry page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoFeelingHungryPage(testController);
  await feelingHungryPage.isDisplayed(testController);
});

test('Test that my profile page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoMyProfilePage(testController);
  await myProfilePage.isDisplayed(testController);
});

test('Test that admin home page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsA.username, credentialsA.password);
  await adminHomePage.isDisplayed(testController);
});

test('Test that all users page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsA.username, credentialsA.password);
  await allUsersPage.isDisplayed(testController);
});

test('Test that all users vendors shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsA.username, credentialsA.password);
  await allVendorsPage.isDisplayed(testController);
});

test('Test that all menu items page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsA.username, credentialsA.password);
  await allMenuItemsPage.isDisplayed(testController);
});

// test('Test that list menu items page shows up', async (testController) => {
//   await listMenuItemsUserPage.isDisplayed(testController);
// });
