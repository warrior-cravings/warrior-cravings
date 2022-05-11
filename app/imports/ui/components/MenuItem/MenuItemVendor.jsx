import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DeleteMenuItem from './DeleteMenuItem';

/** Renders a single row in the List Menu Items table. See pages/ListMenuItemsVendor.jsx. */
class MenuItemVendor extends React.Component {
  render() {
    return (
      <Table.Row id="menuItemsVendor">
        <Table.Cell>{this.props.Item.name}</Table.Cell>
        <Table.Cell>{this.props.Item.mealType.toString()}</Table.Cell>
        <Table.Cell>{this.props.Item.ingredients.toString()}</Table.Cell>
        <Table.Cell>{this.props.Item.vendor.toString()}</Table.Cell>
        <Table.Cell>{<Link id="editMenuItemButton" to={`/menuitem-edit/${this.props.Item._id}`}>Edit</Link>}</Table.Cell>
        <Table.Cell><DeleteMenuItem key={this.props.Item.name} item={this.props.Item}/></Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
MenuItemVendor.propTypes = {
  Item: PropTypes.object.isRequired,
};

export default MenuItemVendor;
