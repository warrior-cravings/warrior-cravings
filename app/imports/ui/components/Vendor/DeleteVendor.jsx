import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Vendors } from '../../../api/vendor/Vendor';

class DeleteMenuItem extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })

  close = () => this.setState({ open: false })

  render() {
    const title = `Delete the ${this.props.vendor.name} vendor`;
    const deleteVendor = () => {
      Vendors.collection.remove(this.props.vendor._id);
      swal('Vendor Deleted!', "Don't forget to go to menu list to delete the Items!", 'success');
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
          onConfirm={deleteVendor}
        />
      </div>
    );
  }
}
DeleteMenuItem.propTypes = {
  vendor: PropTypes.object.isRequired,
};
export default DeleteMenuItem;
