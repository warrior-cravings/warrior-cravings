import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { MenuItems } from '../../../api/menuItem/MenuItem';

class DeleteMenuItem extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })

  close = () => this.setState({ open: false })

  render() {
    console.log(this.props.item);
    const title = `Delete the ${this.props.item.name} item`;
    const deleteItem = () => {
      console.log(title);
      MenuItems.collection.remove(this.props.item._id);
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
