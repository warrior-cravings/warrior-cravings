import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Profiles } from '../../../api/profile/Profiles';
import ProfileAdmin from '../../components/Profile/ProfileAdmin';

/** Renders a table containing all of the Profile documents. */
class ListProfilesAdmin extends React.Component {
  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    if (this.props.profiles.length === 0) {
      return (
        <Container>
          <Header as="h2" textAlign="center" inverted>No Profiles</Header>
        </Container>
      );
    }
    return (
      <Container>
        <Header as="h2" textAlign="center">List Profiles</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Image</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Edit Profile</Table.HeaderCell>
              <Table.HeaderCell>Delete Profile</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* to change to filter by which vendor account is being used. vendorItems <=> this.props.menuItems */}
            {this.props.profiles.map((profile) => <ProfileAdmin key={profile._id} profile={profile} />)}
          </Table.Body>
        </Table>
      </Container>
    );

  }
}

// Require an array of Profile documents in the props.
ListProfilesAdmin.propTypes = {
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Profile documents.
  const subscription = Meteor.subscribe(Profiles.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Profile documents
  const profiles = Profiles.collection.find({}).fetch();
  return {
    profiles,
    ready,
  };
})(ListProfilesAdmin);
