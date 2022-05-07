import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Segment, Header, Form, Modal, Button } from 'semantic-ui-react';
// Must use destructuring import to avoid https://github.com/vazco/uniforms/issues/433
import { AutoForm, TextField, SubmitField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import MultiSelectField from '../../forms/controllers/MultiSelectField';
import { MenuItemFormSchema as formSchema } from '../../forms/MenuItemForm';
import { MenuItems } from '../../../api/menuItem/MenuItem';
import { Vendors } from '../../../api/vendor/Vendor';

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
      console.log(email, vendor1);
      let insertError;
      const { name, mealType, ingredients } = data;
      console.log(vendorname, name, mealType, ingredients);
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
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Add Menu Item</Button>}
      >
        <Modal.Header>Add Menu Item</Modal.Header>
        <Modal.Content>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center">Create Menu Item</Header>
              <Segment>
                <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
                  <Form.Group widths={'equal'}>
                    <TextField name='name' showInlineError={true} placeholder={'Item Name'}/>
                  </Form.Group>
                  <MultiSelectField name='mealType' showInlineError={true} placeholder={'Select mealType'}/>
                  <TextField name='ingredients' showInlineError={true} placeholder={'Type Ingredients in comma separated list'}/>
                  <SubmitField value='Submit'/>
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
