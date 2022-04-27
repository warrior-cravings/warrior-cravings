import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Profiles } from '../../api/profile/Profiles';
import AdminProfile from '../components/AdminProfile';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
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
          <Header as="h2" textAlign="center" inverted>Profile</Header>
          <Card.Group>
            <Link to={'/addPro/'}>Add Profile</Link>
          </Card.Group>
        </Container>
      );
    }
    return (
      <Container>
        <Header as="h2" textAlign="center" inverted>Profile</Header>
        {this.props.profiles.map((profile, index) => (<AdminProfile key={index} profile={profile}/>))}
      </Container>
    );

  }
}

// Require an array of Stuff documents in the props.
ListProfilesAdmin.propTypes = {
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Profiles.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const profiles = Profiles.collection.find({}).fetch();
  return {
    profiles,
    ready,
  };
})(ListProfilesAdmin);
