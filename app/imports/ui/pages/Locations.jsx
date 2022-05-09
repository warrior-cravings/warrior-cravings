import React from 'react';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Grid, List, Image, Header, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Vendors } from '../../api/vendor/Vendor';

/** A simple static component to render some text for the locations page. */
class Locations extends React.Component {
  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const groupByLocation = _.groupBy(this.props.vendors, 'location');
    console.log(groupByLocation);
    const locationNames = _.keys(groupByLocation);

    const locations = _.values(groupByLocation);
    locations.map((location) => groupByLocation[location]);
    console.log(locations);

    return (
      <Container>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Image src='/images/vendor_map3.jpg' alt='Map of vendor'></Image>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {
                _.map(locations, (location, index) => (
                  <Container>
                    <Header as='h3'>{locationNames[index]}</Header>
                    <List as='ul' link>
                      {
                        _.map(_.values(location), (vendor) => (<List.Item id={vendor._id} as='li'>{vendor.name}</List.Item>))
                      }
                    </List>
                  </Container>
                ))
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

Locations.propTypes = {
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
  return {
    vendors,
    ready,
  };
})(Locations);
