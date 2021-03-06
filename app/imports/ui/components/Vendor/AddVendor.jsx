import React from 'react';
import { Grid, Segment, Header, Button, Modal } from 'semantic-ui-react';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Vendors } from '../../../api/vendor/Vendor';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  email: String,
  image: String,
  description: String,
  location: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddVendor extends React.Component {

  // On submit, insert the data.
  AddVendorModal() {
    const [open, setOpen] = React.useState(false);
    let fRef = null;
    const submit = (data, formRef) => {
      const { _id, name, image, location, description, email } = data;
      const owner = email;
      Vendors.collection.insert({ _id, name, image, location, owner, description },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Vendor Profile added successfully', 'success');
            formRef.reset();
          }
        });
    };
    return (
      <Modal id="addvendor"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button id="addVendorButton">Add Vendor</Button>}
      >
        <Modal.Header>Add Vendor</Modal.Header>
        <Modal.Content>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Add Vendor Profile</Header>
              <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
                <Segment>
                  <TextField id="addvendor-name" name='name'/>
                  <TextField id="addvendor-email" name='email'/>
                  <TextField id="addvendor-location" name='location'/>
                  <TextField id="addvendor-image" name='image'/>
                  <LongTextField id="addvendor-description" name='description'/>
                  <SubmitField id="addvendor-submit" value='Submit'/>
                  <ErrorsField/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} positive>
              Finished Creating Vendors
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    return (
      <this.AddVendorModal/>
    );
  }
}

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default AddVendor;
