import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Grid, Header, Image, Loader, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Vendors } from '../../../api/vendor/Vendor';
import ListMenuItemsUser from '../../pages/MenuItem/ListMenuItemsUser';

/** Renders a table containing all of the Vendor documents. Use <VendorItem> to render each row. */
class MyVendor extends React.Component {
  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    const text = { paddingTop: '50px', fontSize: '20px' };
    return (
      <Container id="myVendor">
        <Header as="h2" textAlign="center">My Vendor Profile</Header>
        <Button id="editVendorButton" as={NavLink} activeClassName="active" exact to={`/admin/menuvendor-edit/${this.props.vendor._id}`} key='editvendor'>Edit My Vendor Profile</Button>
        <Grid container style={{ paddingTop: '2em' }}>
          <Image size='medium' src={this.props.vendor.image}/>
          <div>
            <Header as='h1'>{this.props.vendor.name}</Header>
            <Header as='h3'>Location : {this.props.vendor.location}</Header>
          </div>
          <p style={text}>{this.props.vendor.description}</p>
          <ListMenuItemsUser key={this.props.vendor.name} vendorDisplayed={this.props.vendor}/>
        </Grid>
      </Container>
    );

  }
}

// Require an array of Vendor documents in the props.
MyVendor.propTypes = {
  vendor: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Vendor documents.
  const subscription = Meteor.subscribe(Vendors.vendorPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Vendor documents
  const email = Meteor.user().username;
  const vendor = Vendors.collection.findOne({ owner: email });
  return {
    vendor,
    ready,
  };
})(MyVendor);
