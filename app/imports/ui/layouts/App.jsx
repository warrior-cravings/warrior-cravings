import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListMenuItemsUser from '../pages/MenuItem/ListMenuItemsUser';
import ListMenuItemsVendor from '../pages/MenuItem/ListMenuItemsVendor';
import ListMenuItemsAdmin from '../pages/MenuItem/ListMenuItemsAdmin';
import EditMenuItem from '../components/MenuItem/EditMenuItem';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import ListProfilesAdmin from '../pages/Lists/ListProfilesAdmin';
import EditProfile from '../pages/EditProfile';
import AddProfile from '../pages/AddProfile';
import ListProfiles from '../pages/Lists/ListProfiles';
import ListVendorsUser from '../pages/Lists/ListVendorsUser';
import ListVendorsAdmin from '../pages/Lists/ListVendorsAdmin';
import EditVendor from '../pages/EditVendor';
import AddVendor from '../components/Vendor/AddVendor';
import Locations from '../pages/Locations';
import Home from '../pages/Home';
import Hungry from '../pages/Hungry';
import MyVendor from '../pages/MyVendor';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/locations" component={Locations}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/signout" component={Signout}/>
            <ProtectedRoute path="/home" component={Home}/>
            <ProtectedRoute path="/vendor/menuitems" component={ListMenuItemsUser}/>
            <VendorProtectedRoute path="/menuitem/menuitemsV" component={ListMenuItemsVendor}/>
            <VendorProtectedRoute path="/vendor/menuitem-edit/:_id" component={EditMenuItem}/>
            <AdminProtectedRoute path="/admin/menuitemsA" component={ListMenuItemsAdmin}/>
            <VendorProtectedRoute path="/vendor-home" component={ListMenuItemsVendor}/>
            <VendorProtectedRoute path="/myvendor" component={MyVendor}/>
            <ProtectedRoute path="/myprofile" component={ListProfiles}/>
            <ProtectedRoute path="/hungry" component={Hungry}/>
            <ProtectedRoute path="/listVenU" component={ListVendorsUser}/>
            <AdminProtectedRoute path="/admin/listallprofiles" component={ListProfilesAdmin}/>
            <AdminProtectedRoute path="/admin/listallvendors" component={ListVendorsAdmin}/>
            <AdminProtectedRoute path="/admin/addPro" component={AddProfile}/>
            <AdminProtectedRoute path="/admin/addVen" component={AddVendor}/>
            <AdminProtectedRoute path="/edit/:_id" component={EditProfile}/>
            <VendorProtectedRoute path="/editVen/:_id" component={EditVendor}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
      return (isLogged && isAdmin) ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

const VendorProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      const isVendor = Roles.userIsInRole(Meteor.userId(), 'vendor');
      const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
      return (isLogged && (isVendor || isAdmin)) ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

VendorProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;
