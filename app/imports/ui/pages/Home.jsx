import React from 'react';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import VendorHome from './VendorHome';
import AdminHome from './AdminHome';
import UserHome from './UserHome';

/** A simple static component to render some text for the landing page. */
class Home extends React.Component {
  render() {
    const isUser = Meteor.userId() !== 'admin' && Meteor.userId() !== 'vendor';
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
