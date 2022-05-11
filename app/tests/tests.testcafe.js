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
import { myVendorPage } from './myvendor.page';
import { vendorHomePage } from './vendorhome.page';
import { menuItemsVendorPage } from './menuitemsvendor.page';
import { addVendorPage } from './addvendor.page';
import { editVendorPage } from './editvendor.page';
import { editProfilePage } from './editprofile.page';
import { addMenuItemPage } from './addmenuitem.page';
import { editMenuItemPage } from './editmenuitem.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const credentialsA = { username: 'admin@foo.com', password: 'changeme' };
const credentialsV = { username: 'bean@foo.com', password: 'changeme' };
// eslint-disable-next-line max-len
const testVendor = { name: 'Rabbit Rabbit', email: 'rabbitrabbit@foo.com', location: '2700 S King St, Unit E, Honolulu, HI 96826', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F5f601a_a5532845705b48e0b8834f10ad872c65~mv2_d_3000_1339_s_2.jpg%2Fv1%2Ffill%2Fw_980%2Ch_437%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2F5f601a_a5532845705b48e0b8834f10ad872c65~mv2_d_3000_1339_s_2.jpg&f=1&nofb=1', description: 'boba tea'};
const testVendor2 = { name: 'The Bean Counter', location: 'Business Administration', image: 'https://manoa.hawaii.edu/food/wp-content/uploads/sites/37/2020/05/beancounter_big.jpg', description: 'coffee shop' };
const testUser = { firstName: 'Philip', lastName: 'Johnson', address: 'POST 307, University of Hawaii', image: 'https://philipmjohnson.github.io/images/philip2.jpeg', owner: 'john@foo.com', description: 'cool test!' };
const testMenuItem = { name: 'croissant', ingredients: 'flour, butter, water, yeast, sugar, salt, egg, milk' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

/** PAGE TESTING */

/** USER --------------------------------------------------------------------------------------------------*/
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

/** ADMIN -------------------------------------------------------------------------------------------------*/
test('Test that admin home page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsA.username, credentialsA.password);
  await adminHomePage.isDisplayed(testController);
});

test('Test that all users page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsA.username, credentialsA.password);
  await navBar.gotoAllUsersPage(testController);
  await allUsersPage.isDisplayed(testController);
});

test('Test that all vendors page  shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsA.username, credentialsA.password);
  await navBar.gotoAllVendorsPage(testController);
  await allVendorsPage.isDisplayed(testController);
});

test('Test that all menu items page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsA.username, credentialsA.password);
  await navBar.gotoAllMenuItemsPage(testController);
  await allMenuItemsPage.isDisplayed(testController);
});

/** VENDOR -------------------------------------------------------------------------------------------------*/
test('Test that vendor home page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsV.username, credentialsV.password);
  await vendorHomePage.isDisplayed(testController);
});

test('Test that my vendor page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsV.username, credentialsV.password);
  await navBar.gotoMyVendorPage(testController);
  await myVendorPage.isDisplayed(testController);
});

test('Test that my menu items page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsV.username, credentialsV.password);
  await navBar.gotoMyMenuItemsPage(testController);
  await menuItemsVendorPage.isDisplayed(testController);
});

/** FORMS TESTING------------------------------------------------------------------------------------------ */

test('Test that add vendor work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsA.username, credentialsA.password);
  await navBar.gotoAllVendorsPage(testController);
  await allVendorsPage.gotoAddVendorPage(testController);
  await addVendorPage.addVendor(testController, testVendor.name, testVendor.email, testVendor.location, testVendor.image, testVendor.description);
});

test('Test that edit vendor work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsV.username, credentialsV.password);
  await navBar.gotoMyVendorPage(testController);
  await myVendorPage.gotoEditVendorPage(testController);
  await editVendorPage.editVendor(testController, testVendor2.name, testVendor2.location, testVendor2.image, testVendor2.description);
});

test('Test that edit user profile work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoMyProfilePage(testController);
  await myProfilePage.gotoEditProfilePage(testController);
  await editProfilePage.editProfile(testController, testUser.firstName, testUser.lastName, testUser.address, testUser.image, testUser.owner, testUser.description);
});

test.only('Test that add menu Item work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsV.username, credentialsV.password);
  await navBar.gotoMyMenuItemsPage(testController);
  await menuItemsVendorPage.gotoAddMenuItemPage(testController);
  await addMenuItemPage.addItem(testController, testMenuItem.name, testMenuItem.ingredients);
});

test.only('Test that edit menu Item work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsV.username, credentialsV.password);
  await navBar.gotoMyMenuItemsPage(testController);
  await menuItemsVendorPage.gotoEditMenuItemPage(testController);
  await editMenuItemPage.editItem(testController, testMenuItem.name, testMenuItem.ingredients);
});
