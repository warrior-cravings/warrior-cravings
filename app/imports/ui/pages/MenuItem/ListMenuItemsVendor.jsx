import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { _ } from 'meteor/underscore';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { MenuItems } from '../../../api/menuItem/MenuItem';
import MenuItemVendor from '../../components/MenuItem/MenuItemVendor';
import CreateMenuItem from '../../components/MenuItem/CreateMenuItem';
import { Vendors } from '../../../api/vendor/Vendor';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListMenuItemVendor extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    const email = Meteor.user().username;
    const vendor = Vendors.collection.findOne({ owner: email });
    console.log(Roles.userIsInRole(Meteor.user().userId, 'vendor'));
    // console.log(email, vendor.name);
    const vendorItems = _.filter(this.props.menuItems, (item) => item.vendor === vendor.name);
    console.log(vendorItems);
    return (
      <Container>
        <Header as="h2" textAlign="center">List Menu Items (Vendor)</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Meal Type</Table.HeaderCell>
              <Table.HeaderCell>Ingredients</Table.HeaderCell>
              <Table.HeaderCell>Vendor</Table.HeaderCell>
              <Table.HeaderCell>Edit Item</Table.HeaderCell>
              <Table.HeaderCell>Delete Item</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* to change to filter by which vendor account is being used. vendorItems <=> this.props.menuItems */}
            {vendorItems.map((menuItem) => <MenuItemVendor key={menuItem._id} Item={menuItem} />)}
          </Table.Body>
        </Table>
        <CreateMenuItem key={this.props.menuItems.vendor} vendorsDoc={this.props.menuItems.vendor}/>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ListMenuItemVendor.propTypes = {
  vendorDisplayed: PropTypes.object,
  menuItems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(MenuItems.vendorPublicationName);
  const subscription2 = Meteor.subscribe(Vendors.vendorPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready() && subscription2.ready();
  // Get the Stuff documents
  const menuItems = MenuItems.collection.find({}).fetch();
  return {
    menuItems,
    ready,
  };
})(ListMenuItemVendor);
