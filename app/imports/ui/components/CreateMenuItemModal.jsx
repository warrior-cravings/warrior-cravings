import React from 'react';
import { Modal, Button, Image, Grid, Header, Segment, Form, Message } from 'semantic-ui-react';
import { AutoForm, DateField, LongTextField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import MultiSelectField from '../forms/controllers/MultiSelectField';
import RadioField from '../forms/controllers/RadioField';

export function CreateMenuItemModal() {
  const [open, setOpen] = React.useState(false);

  return (<Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button>Add Menu Item</Button>}
  >
    <Modal.Header>Add Menu Item</Modal.Header>
    <Modal.Content image>
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Create Menu Item</Header>
          <Form>

          </Form>
          {/*
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)}>
            <Segment>
              <Form.Group widths={'equal'}>
                <TextField name='name' showInlineError={true} placeholder={'Your name'}/>
                <TextField name='email' showInlineError={true} placeholder={'Your email'}/>
                <SelectField name='instructor' showInlineError={true} />
              </Form.Group>
              <LongTextField name='bio' showInlineError={true} placeholder={'A bit about you'}/>
              <Form.Group widths={'equal'}>
                <SelectField name='level' showInlineError={true} />
                <SelectField name='gpa' showInlineError={true} placeholder={'Select one'} />
                <DateField name='enrolled' showInlineError={true}/>
              </Form.Group>
              <MultiSelectField name='hobbies' showInlineError={true} placeholder={'Select hobbies (optional)'}/>
              <RadioField name='major' inline showInlineError={true}/>
              <SubmitField value='Submit'/>
            </Segment>
          </AutoForm>
          */}
        </Grid.Column>
      </Grid>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={() => setOpen(false)} positive>
        Add Item
      </Button>
    </Modal.Actions>
  </Modal>);
}
