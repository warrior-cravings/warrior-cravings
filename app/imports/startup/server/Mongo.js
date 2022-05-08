import { Meteor } from 'meteor/meteor';
import { MenuItems } from '../../api/menuItem/MenuItem';
import { Vendors } from '../../api/vendor/Vendor';
import { Profiles } from '../../api/profile/Profiles.js';

// Initialize the database with a default data document.

function addMenuItem(data) {
  console.log(`  Adding: ${data.name} (${data.vendor})`);
  MenuItems.collection.insert(data);
}

function addVendor(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Vendors.collection.insert(data);
}

function addProfile(data) {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Profiles.collection.insert(data);
}

// Initialize the Collection if empty.
if (MenuItems.collection.find().count() === 0) {
  if (Meteor.settings.defaultMenuItems) {
    console.log('Creating default Menu Items.');
    Meteor.settings.defaultMenuItems.map(data => addMenuItem(data));
  }
}

if (Vendors.collection.find().count() === 0) {
  if (Meteor.settings.defaultVendors) {
    console.log('Creating default Vendors.');
    Meteor.settings.defaultVendors.map(data => addVendor(data));
  }
}

if (Profiles.collection.find().count() === 0) {
  if (Meteor.settings.defaultProfiles) {
    console.log('Creating default Profiles.');
    Meteor.settings.defaultProfiles.map(data => addProfile(data));
  }
}
