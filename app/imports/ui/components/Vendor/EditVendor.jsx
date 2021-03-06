import React from 'react';
import { Roles } from 'meteor/alanning:roles';
import { Grid, Loader, Header, Segment, Button } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Vendors } from '../../../api/vendor/Vendor';

const bridge = new SimpleSchema2Bridge(Vendors.schema);

/** Renders the Page for editing a single document. */
class EditVendor extends React.Component {

  // On successful submit, insert the data.
  submit(data) {
    const { name, image, location, description, _id } = data;
    Vendors.collection.update(_id, { $set: { name, image, location, description } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Vendor Profile updated successfully', 'success')));
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    const returnBut = (Roles.userIsInRole(Meteor.userId(), 'admin')) ? (
      <Button as={NavLink} activeClassName="active" exact to="/admin/listallvendors" key='vendor'>Return to list</Button>
    ) : (
      <Button as={NavLink} activeClassName="active" exact to="/myvendor" key='vendor'>Return to my profile</Button>
    );
    return (
      <Grid id="editvendor" container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Vendor Profile</Header>
          <Segment>
            <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
              <TextField id="editvendor-name" name='name'/>
              <TextField id="editvendor-location" name='location'/>
              <TextField id="editvendor-image" name='image'/>
              <LongTextField id="editvendor-description" name='description'/>
              <SubmitField id="editvendor-submit" value='Submit'/>
              <ErrorsField/>
            </AutoForm>
          </Segment>
          {returnBut}
        </Grid.Column>
      </Grid>
    );
  }
}

// Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use.
EditVendor.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Vendors.vendorPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  const doc = Vendors.collection.findOne(documentId);
  return {
    doc,
    ready,
  };
})(EditVendor);
