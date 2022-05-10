import React from 'react';
import { Image, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import DeleteVendor from '../Vendor/DeleteVendor';

/** Renders a single row in the List Vendor table. See pages/ListVendorsAdmin.jsx. */
class VendorAdmin extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.vendor.name}</Table.Cell>
        <Table.Cell>
          <Image size='small' src={this.props.vendor.image}/>
          <p>{this.props.vendor.image.toString()}</p>
        </Table.Cell>
        <Table.Cell>{this.props.vendor.location}</Table.Cell>
        <Table.Cell>{this.props.vendor.owner}</Table.Cell>

        <Table.Cell>{<Link to={`/admin/menuvendor-edit/${this.props.vendor._id}`}>Edit</Link>}</Table.Cell>
        <Table.Cell><DeleteVendor key={this.props.vendor.name} vendor={this.props.vendor}/></Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
VendorAdmin.propTypes = {
  vendor: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(VendorAdmin);
