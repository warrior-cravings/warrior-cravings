import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Main/Landing';
import ListMenuItemsVendor from '../pages/MenuItem/ListMenuItemsVendor';
import ListMenuItemsAdmin from '../pages/MenuItem/ListMenuItemsAdmin';
import EditMenuItem from '../components/MenuItem/EditMenuItem';
import NotFound from '../pages/Main/NotFound';
import Signin from '../pages/Main/Signin';
import Signup from '../pages/Main/Signup';
import Signout from '../pages/Main/Signout';
import ListProfilesAdmin from '../pages/Lists/ListProfilesAdmin';
import EditProfile from '../components/Profile/EditProfile';
import AddProfile from '../components/Profile/AddProfile';
import MyProfile from '../components/Profile/MyProfile';
import ListVendorsUser from '../pages/Lists/ListVendorsUser';
import ListVendorsAdmin from '../pages/Lists/ListVendorsAdmin';
import EditVendor from '../components/Vendor/EditVendor';
import Locations from '../pages/Main/Location';
import Home from '../pages/Main/Home';
import MyVendor from '../components/Vendor/MyVendor';
import Vendor from '../components/Vendor/Vendor';
import FeelingHungry from '../pages/Main/FeelingHungry';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/signout" component={Signout}/>
            <ProtectedRoute path="/home" component={Home}/>
            <ProtectedRoute exact path="/locations" component={Locations}/>
            <VendorProtectedRoute path="/myvendor" component={MyVendor}/>
            <ProtectedRoute path="/myprofile" component={MyProfile}/>
            <ProtectedRoute path="/feelinghungry" component={FeelingHungry}/>
            <ProtectedRoute path="/listVenU" component={ListVendorsUser}/>
            <VendorProtectedRoute path="/vendor/mymenu" component={ListMenuItemsVendor}/>
            <AdminProtectedRoute path="/admin/listallprofiles" component={ListProfilesAdmin}/>
            <AdminProtectedRoute path="/admin/listallvendors" component={ListVendorsAdmin}/>
            <AdminProtectedRoute path="/admin/listallmenuitems" component={ListMenuItemsAdmin}/>
            <AdminProtectedRoute path="/admin/addPro" component={AddProfile}/>
            <ProtectedRoute path="/edit/:_id" component={EditProfile}/>
            <ProtectedRoute path="/vendor/:_id" component={Vendor}/>
            <VendorProtectedRoute path="/menuitem-edit/:_id" component={EditMenuItem}/>
            <VendorProtectedRoute path="/admin/menuvendor-edit/:_id" component={EditVendor}/>
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
