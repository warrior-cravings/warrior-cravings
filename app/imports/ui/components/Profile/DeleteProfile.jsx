import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Profiles } from '../../../api/profile/Profiles';

class DeleteMenuItem extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })

  close = () => this.setState({ open: false })

  render() {
    const title = `Delete the ${this.props.profile.name} vendor`;
    const deleteProfile = () => {
      Profiles.collection.remove(this.props.profile._id);
      swal('Profile Deleted!', "Make Sure You don't regret!", 'success');
      this.close();
    };
    return (
      <div>
        <Button onClick={this.open} icon='delete'></Button>
        <Confirm
          open={this.state.open}
          header={title}
          cancelButton='Never mind'
          confirmButton="Let's do it"
          onCancel={this.close}
          onConfirm={deleteProfile}
        />
      </div>
    );
  }
}
DeleteMenuItem.propTypes = {
  profile: PropTypes.object.isRequired,
};
export default DeleteMenuItem;
