import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vendors } from '../../../api/vendor/Vendor';
import VendorAdmin from '../../components/Vendor/VendorAdmin';
import AddVendor from '../../components/Vendor/AddVendor';

/** Renders a table containing all of the Vendor documents. */
class ListVendors extends React.Component {
  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center">List Menu Items (Vendor)</Header>
        <AddVendor/>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Image</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Owner</Table.HeaderCell>
              <Table.HeaderCell>Edit Vendor</Table.HeaderCell>
              <Table.HeaderCell>Delete Vendor</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* to change to filter by which vendor account is being used. vendorItems <=> this.props.menuItems */}
            {this.props.vendors.map((vendor) => <VendorAdmin key={vendor._id} vendor={vendor} />)}
          </Table.Body>
        </Table>
      </Container>
    );

  }
}

// Require an array of Vendor documents in the props.
ListVendors.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Vendor documents.
  const subscription = Meteor.subscribe(Vendors.vendorPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Vendor documents
  const vendors = Vendors.collection.find({}).fetch();
  return {
    vendors,
    ready,
  };
})(ListVendors);
