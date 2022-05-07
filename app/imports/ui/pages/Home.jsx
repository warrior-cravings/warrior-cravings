import React from 'react';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import VendorHome from '../components/HomePage/VendorHome';
import AdminHome from '../components/HomePage/AdminHome';
import UserHome from '../components/HomePage/UserHome';

/** A simple static component to render some text for the landing page. */
class Home extends React.Component {
  render() {
    const isUser = (!(Roles.userIsInRole(Meteor.userId(), 'admin')) && !(Roles.userIsInRole(Meteor.userId(), 'vendor')));
    const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
    const isVendor = Roles.userIsInRole(Meteor.userId(), 'vendor');
    return (
      <div>
        {(isUser) ? (<UserHome/>) : ''}
        {(isAdmin) ? (<AdminHome/>) : ''}
        {(isVendor) ? (<VendorHome/>) : ''}
      </div>
    );
  }
}

export default Home;
