import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import { Vendors } from '../../../api/vendor/Vendor';
import VendorCard from '../../components/Vendor/VendorCard';

/** Returns the Profile and associated Projects and Interests associated with the passed user name. */
function getVendorData(name) {
  const data = Vendors.collection.findOne({ name });
  return _.extend({ }, data);
}

/** Renders the Profile Collection as a set of Cards. */
class Hungry extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const name = _.sample(_.pluck(Vendors.collection.find().fetch(), 'name'));
    const vendorData = getVendorData(name);
    return (
      <Container id="vendor-page">
        <VendorCard vendor={vendorData}/>
      </Container>
    );
  }
}

Hungry.propTypes = {
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Ensure that minimongo is populated with all collections prior to running render().
  const sub1 = Meteor.subscribe(Vendors.vendorPublicationName);
  return {
    ready: sub1.ready(),
  };
})(Hungry);
