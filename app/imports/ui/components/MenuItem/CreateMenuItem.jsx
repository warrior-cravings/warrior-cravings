import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Segment, Header, Form, Modal, Button } from 'semantic-ui-react';
import { AutoForm, TextField, SubmitField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import MultiSelectField from '../../forms/controllers/MultiSelectField';
import { itemValues as itemType, MenuItems } from '../../../api/menuItem/MenuItem';
import { Vendors } from '../../../api/vendor/Vendor';

const formSchema = new SimpleSchema({
  name: { label: 'Name', type: String },
  mealType: {
    label: 'Item Type',
    type: Array,
  },
  'mealType.$': { type: String, allowedValues: itemType.itemType },
  ingredients: {
    label: 'Ingredients',
    type: String,
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class CreateMenuItem extends React.Component {
  /** On submit, try to insert the data. If successful, reset the form. */

  CreateMenuItemModal() {
    const [open, setOpen] = React.useState(false);
    let fRef = null;
    const submit = (data, formRef) => {
      const email = Meteor.user().username;
      const vendor1 = Vendors.collection.find({ owner: email }).fetch();
      const vendorname = vendor1[0].name;
      let insertError;
      const { name, mealType, ingredients } = data;
      MenuItems.collection.insert({ name, vendor: vendorname, mealType, ingredients },
        (error) => { insertError = error; });
      if (insertError) {
        swal('Error', insertError.message, 'error');
      } else {
        swal('Success', 'The Menu Item was created.', 'success');
        this.setState({ name });
        formRef.reset();
      }
    };
    return (
      <Modal id="addmenuitem"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button id="addMenuItemButton">Add Menu Item</Button>}
      >
        <Modal.Header>Add Menu Item</Modal.Header>
        <Modal.Content>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center">Create Menu Item</Header>
              <Segment>
                <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
                  <Form.Group widths={'equal'}>
                    <TextField id="additem-name" name='name' showInlineError={true} placeholder={'Item Name'}/>
                  </Form.Group>
                  <MultiSelectField name='mealType' showInlineError={true} placeholder={'Select mealType'}/>
                  <TextField id="additem-ingredients" name='ingredients' showInlineError={true} placeholder={'Type Ingredients in comma separated list'}/>
                  <SubmitField id="additem-submit" value='Submit'/>
                </AutoForm>
              </Segment>
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} positive>
              Finished Creating Items
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
      <this.CreateMenuItemModal/>
    );
  }
}

export default CreateMenuItem;
