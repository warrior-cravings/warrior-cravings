import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import AddStuff from '../pages/AddStuff';
import ListMenuItemsVendor from '../pages/ListMenuItemsVendor';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import ListProfiles from '../pages/ListProfiles';
import ListProfilesAdmin from '../pages/ListProfilesAdmin';
import EditProfile from '../pages/EditProfile';
import AddProfile from '../pages/AddProfile';
import ListVendors from '../pages/ListVendors';
import EditVendor from '../pages/EditVendor';
import AddVendor from '../pages/AddVendor';
import AdminHome from '../pages/AdminHome';
import UserHome from '../pages/UserHome';
import VendorHome from '../pages/VendorHome';
import Locations from '../pages/Locations';

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
            <VendorProtectedRoute path="/vendor-home" component={ListMenuItemsVendor}/>
            <ProtectedRoute path="/list" component={ListProfiles}/>
            <ProtectedRoute path="/listVen" component={ListVendors}/>
            <ProtectedRoute path="/add" component={AddStuff}/>
            <AdminProtectedRoute path="/admin" component={ListProfilesAdmin}/>
            <ProtectedRoute path="/addPro" component={AddProfile}/>
            <ProtectedRoute path="/addVen" component={AddVendor}/>
            <ProtectedRoute path="/edit/:_id" component={EditProfile}/>
            <VendorProtectedRoute path="/editVen/:_id" component={EditVendor}/>
            <ProtectedRoute path="/userhome" component={UserHome}/>
            <ProtectedRoute path="/vendorhome" component={VendorHome}/>
            <AdminProtectedRoute path="/adminhome" component={AdminHome}/>
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
