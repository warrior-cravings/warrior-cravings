import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Menu (Admin) table. See pages/ListMenuAdmin.jsx. */
class MenuItemVendor extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.Item.name}</Table.Cell>
        <Table.Cell>{this.props.Item.mealType.toString()}</Table.Cell>
        <Table.Cell>{this.props.Item.ingredients.toString()}</Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
MenuItemVendor.propTypes = {
  Item: PropTypes.object.isRequired,
};

export default MenuItemVendor;
