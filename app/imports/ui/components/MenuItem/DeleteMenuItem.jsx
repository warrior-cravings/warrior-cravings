import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { MenuItems } from '../../../api/menuItem/MenuItem';

class DeleteMenuItem extends Component {

  render() {
    const state = { open: false };
    const open = () => this.setState({ open: true });
    const close = () => this.setState({ open: false });
    const title = `Delete the ${this.props.item.name} item`;
    const deleteItem = () => {
      MenuItems.collection.remove(this.props.item._id);
      this.close();
    };
    return (
      <div>
        <Button onClick={open} icon='delete'></Button>
        <Confirm
          open={state.open}
          header={title}
          cancelButton='Never mind'
          confirmButton="Let's do it"
          onCancel={close}
          onConfirm={deleteItem}
        />
      </div>
    );
  }
}
DeleteMenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default DeleteMenuItem;
