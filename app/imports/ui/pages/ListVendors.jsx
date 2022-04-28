import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Vendors } from '../../api/vendor/Vendor';
import Vendor from '../components/Vendor';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListVendors extends React.Component {
  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    if (this.props.vendors.length === 0) {
      return (
        <Container>
          <Header as="h2" textAlign="center" inverted>Vendor Profile</Header>
          <Card.Group>
            <Link to={'/addVen/'}>Add Vendor Profile</Link>
          </Card.Group>
        </Container>
      );
    }
    return (
      <Container>
        <Header as="h2" textAlign="center" inverted>Vendor Profile</Header>
        <Card.Group>{this.props.vendors.map((vendor, index) => (<Vendor key={index} vendor={vendor}/>))}</Card.Group>
      </Container>
    );

  }
}

// Require an array of Stuff documents in the props.
ListVendors.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Vendors.vendorPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const vendors = Vendors.collection.find({}).fetch();
  console.log(Vendors);
  return {
    vendors,
    ready,
  };
})(ListVendors);
