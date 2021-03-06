import React from 'react';
import { Roles } from 'meteor/alanning:roles';
import { Grid, Loader, Header, Segment, Button } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { NavLink } from 'react-router-dom';
import { Profiles } from '../../../api/profile/Profiles';

const bridge = new SimpleSchema2Bridge(Profiles.schema);

/** Renders the Page for editing a single document. */
class EditProfile extends React.Component {

  // On successful submit, insert the data.
  submit(data) {
    const { firstName, lastName, image, address, description, _id, owner } = data;
    console.log(owner);
    Profiles.collection.update(_id, { $set: { firstName, lastName, image, address, description } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Profile updated successfully', 'success')));
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    const returnBut = (Roles.userIsInRole(Meteor.userId(), 'admin')) ? (
      <Button as={NavLink} activeClassName="active" exact to="/admin/listallprofiles" key='profile'>Return to list</Button>
    ) : (
      <Button as={NavLink} activeClassName="active" exact to="/myprofile" key='profile'>Return to Profile</Button>
    );
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Profile</Header>
          <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
            <Segment>
              <TextField id="editprofile-firstName" name='firstName'/>
              <TextField id="editprofile-lastName" name='lastName'/>
              <TextField id="editprofile-address" name='address'/>
              <TextField id="editprofile-image" name='image'/>
              <TextField id="editprofile-owner" name='owner'/>
              <LongTextField id="editprofile-description" name='description'/>
              <SubmitField id="editprofile-submit" value='Submit'/>
              <ErrorsField/>
            </Segment>
            {returnBut}
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

// Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use.
EditProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Profiles.userPublicationName);
  const subscription2 = Meteor.subscribe(Profiles.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  const ready2 = subscription2.ready();
  // Get the document
  const doc = Profiles.collection.findOne(documentId);
  return {
    doc,
    ready,
    ready2,
  };
})(EditProfile);
