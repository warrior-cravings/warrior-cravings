import React from 'react';
import { Grid, Segment, Header, Form, Modal, Button } from 'semantic-ui-react';
// Must use destructuring import to avoid https://github.com/vazco/uniforms/issues/433
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { AutoForm, TextField, SubmitField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import PropTypes from 'prop-types';
import MultiSelectField from '../forms/controllers/MultiSelectField';
import { MenuItemFormSchema as formSchema } from '../forms/MenuItemForm';
import { MenuItems } from '../../api/menuItem/MenuItem';
import { Vendors } from '../../api/vendor/Vendor';

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for Editing a document. */
class EditMenuItem extends React.Component {
  /** On submit, try to insert the data. If successful, reset the form. */
  submit(data) {
    const { name, _id } = data;
    MenuItems.collection.update(_id, { $set: { name } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  EditMenuItemModal() {
    const [open, setOpen] = React.useState(false);
    const model = _.extend({}, this.props.menuItemsDoc, this.props.vendorsDoc);
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Edit Menu Item</Button>}
      >
        <Modal.Header>Edit Menu Item</Modal.Header>
        <Modal.Content>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center">Edit Menu Item</Header>
              <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={model}>
                <Segment>
                  <Form.Group widths={'equal'}>
                    <TextField name='name' showInlineError={true} placeholder={'Item Name'}/>
                    <TextField name='vendor' disabled={true} showInlineError={false} placeholder={'Vendor'}/>
                  </Form.Group>
                  <MultiSelectField name='mealType' showInlineError={true} placeholder={'Select mealType(optional)'}/>
                  <MultiSelectField name='ingredients' showInlineError={true} placeholder={'Select Ingredients (optional)'}/>
                  <SubmitField value='Submit'/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} positive>
              Done
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
      <this.EditMenuItemModal/>
    );
  }
}
EditMenuItem.propTypes = {
  vendorsDoc: PropTypes.object,
  menuItemsDoc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the email from the URL field. See imports/ui/layouts/App.jsx for the route containing :email.
  const email = match.params._id;
  // Request StudentData and Enrollment docs. Won't be locally available until ready() returns true.
  const VendorDataSubscription = Meteor.subscribe('Vendors');
  const MenuItemDataSubscription = Meteor.subscribe('MenuItems');
  return {
    vendorsDoc: Vendors.findOne({ email }),
    menuItemsDoc: MenuItems.findOne({ email }),
    ready: VendorDataSubscription.ready() && MenuItemDataSubscription.ready(),
  };
})(EditMenuItem);
