import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { MenuItems } from '../../api/menuItem/MenuItem';
import { Vendors } from '../../api/vendor/Vendor';
import { Profiles } from '../../api/profile/Profiles';

// If logged in, then publish documents owned by this user. Otherwise publish nothing.
// Vendor-level publication
Meteor.publish(MenuItems.vendorPublicationName, function () {
  if (this.userId) {
    // const username = Meteor.users.findOne(this.userId).username;
    return MenuItems.collection.find();
  }
  return this.ready();
});

// Vendor-level publication
Meteor.publish(Vendors.vendorPublicationName, function () {
  if ((this.userId)) {
    return Vendors.collection.find();
  }
  return this.ready();
});

Meteor.publish(Profiles.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Profiles.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(Profiles.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Profiles.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
