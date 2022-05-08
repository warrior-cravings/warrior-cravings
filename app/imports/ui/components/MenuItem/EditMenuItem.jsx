import React from 'react';
import { Grid, Loader, Header, Segment, Form, Button } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { NavLink } from 'react-router-dom';
import { MenuItems } from '../../../api/menuItem/MenuItem';
import MultiSelectField from '../../forms/controllers/MultiSelectField';

const bridge = new SimpleSchema2Bridge(MenuItems.schema);

/** Renders the Page for editing a single document. */
class EditMenuItem extends React.Component {

  // On successful submit, insert the data.
  submit(data) {
    const { name, vendor, mealType, ingredients, _id } = data;
    MenuItems.collection.update(_id, { $set: { name, vendor, mealType, ingredients } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Menu Item</Header>
          <Segment>
            <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
              <Form.Group widths={'equal'}>
                <TextField name='name' showInlineError={true}/>
                <HiddenField name='vendor'/>
              </Form.Group>
              <MultiSelectField name='mealType' showInlineError={true}/>
              <TextField name='ingredients' showInlineError={true}/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </AutoForm>
          </Segment>
          <Button as={NavLink} activeClassName="active" exact to="/vendor-home" key='vendor'>Return to list</Button>
        </Grid.Column>
      </Grid>
    );
  }
}

// Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use.
EditMenuItem.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(MenuItems.vendorPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  const doc = MenuItems.collection.findOne(documentId);
  console.log(doc, documentId, match);
  return {
    doc,
    ready,
  };
})(EditMenuItem);
