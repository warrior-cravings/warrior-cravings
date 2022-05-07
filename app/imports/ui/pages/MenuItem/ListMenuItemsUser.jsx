import React from 'react';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Container, Table, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { MenuItems } from '../../../api/menuItem/MenuItem';
import MenuItemUser from '../../components/MenuItem/MenuItemUser';
import { Vendors } from '../../../api/vendor/Vendor';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListMenuItemUser extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    const vendorItems = _.filter(this.props.menuItems, (item) => item.vendor === this.props.vendorDisplayed.name);
    console.log(vendorItems);
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Meal Type</Table.HeaderCell>
              <Table.HeaderCell>Ingredients</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* to change to filter by which vendor account is being used. vendorItems <=> this.props.menuItems */}
            {vendorItems.map((menuItem) => <MenuItemUser key={menuItem._id} Item={menuItem} />)}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ListMenuItemUser.propTypes = {
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
})(ListMenuItemUser);
