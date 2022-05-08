import React from 'react';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Grid, Container, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vendors } from '../../../api/vendor/Vendor';
import VendorCard from '../../components/Vendor/VendorCard';

/** Renders the Profile Collection as a set of Cards. */
class Hungry extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const vendorSample = _.sample((Vendors.collection.find().fetch()), 3);
    return (
      <Container id="vendor-page" style={{ paddingTop: '40px' }}>
        <Grid centered>
          <Card.Group itemsPerRow={3}>
            {vendorSample.map((vendor) => (<VendorCard key={vendor.name} vendor={vendor}/>))}
          </Card.Group>
        </Grid>
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
