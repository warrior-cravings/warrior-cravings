import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Grid, Image, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Vendors } from '../../../api/vendor/Vendor';
import ListMenuItemsUser from '../../pages/MenuItem/ListMenuItemsUser';
/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Vendor extends React.Component {
  render() {
    const text = { paddingTop: '50px', fontSize: '20px' };
    return (
      <Grid container style={{ paddingTop: '2em' }}>
        <Image size='medium' src={this.props.vendor.image}/>
        <Header as='h1'>{this.props.vendor.name}</Header>
        <div><Header as='h3'>Location : {this.props.vendor.location}</Header></div>
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
  const ready = sub1.ready();
  return {
    vendor,
    ready,
  };
})(Vendor);
