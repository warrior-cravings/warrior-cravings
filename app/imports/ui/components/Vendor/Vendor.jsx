import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Grid, Image, Header, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Vendors } from '../../../api/vendor/Vendor';
import ListMenuItemsUser from '../../pages/MenuItem/ListMenuItemsUser';
/** Renders a single row in the List Vendor table. See pages/ListVendors.jsx. */
class Vendor extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const text = { paddingTop: '50px', fontSize: '20px' };
    return (
      <Grid container style={{ paddingTop: '2em' }}>
        <Image size='medium' src={this.props.vendor.image}/>
        <div>
          <Header as='h1'>{this.props.vendor.name}</Header>
          <Header as='h3'>Location : {this.props.vendor.location}</Header>
        </div>
        <p style={text}>{this.props.vendor.description}</p>
        <ListMenuItemsUser key={this.props.vendor.name} vendorDisplayed={this.props.vendor}/>
      </Grid>
    );
  }
}

// Require a document to be passed to this component.
Vendor.propTypes = {
  vendor: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;// Get the document
  const sub1 = Meteor.subscribe(Vendors.vendorPublicationName);
  const vendor = Vendors.collection.findOne(documentId);
  console.log(vendor);
  const ready = sub1.ready();
  return {
    vendor,
    ready,
  };
})(Vendor);
