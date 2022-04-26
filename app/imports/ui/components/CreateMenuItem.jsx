import React from 'react';
import { Grid, Segment, Header, Form, Modal, Button } from 'semantic-ui-react';
// Must use destructuring import to avoid https://github.com/vazco/uniforms/issues/433
import { AutoForm, TextField, DateField, LongTextField, SelectField, SubmitField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import MultiSelectField from '../forms/controllers/MultiSelectField';
import RadioField from '../forms/controllers/RadioField';
import { MenuItemFormSchema as formSchema } from '../forms/MenuItemForm';
import { MenuItems } from '../../api/menuItem/MenuItem';

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class CreateMenuItem extends React.Component {
  /** On submit, try to insert the data. If successful, reset the form. */
  submit(data, formRef) {
    let insertError;
    const { name, email } = data;
    MenuItems.insert({ name },
      (error) => { insertError = error; });

    if (insertError) {
      swal('Error', insertError.message, 'error');
    } else {
      swal('Success', 'The student record was created.', 'success');
      this.setState({ email });
      formRef.reset();
    }
  }

  CreateMenuItemModal() {
    const [open, setOpen] = React.useState(false);
    let fRef = null;
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
              <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)}>
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
              Add
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
