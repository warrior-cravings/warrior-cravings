import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { MenuItems } from '../../api/menuItem/MenuItem';
import { Vendors } from '../../api/vendor/Vendor';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

function addMenuItem(data) {
  console.log(`  Adding: ${data.name} (${data.vendor})`);
  MenuItems.collection.insert(data);
}

function addVendor(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Vendors.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

if (MenuItems.collection.find().count() === 0) {
  if (Meteor.settings.defaultMenuItems) {
    console.log('Creating default Menu Items.');
    Meteor.settings.defaultMenuItems.map(data => addMenuItem(data));
  }
}

if (Vendors.collection.find().count() === 0) {
  if (Meteor.settings.defaultMenuItems) {
    console.log('Creating default Vendors.');
    Meteor.settings.defaultVendor.map(data => addVendor(data));
  }
}
