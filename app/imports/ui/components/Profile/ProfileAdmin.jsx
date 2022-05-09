import React from 'react';
import { Image, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/** Renders a single row in the List Profile table. See pages/ListProfilesAdmin.jsx. */
class AdminProfile extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.profile.firstName}</Table.Cell>
        <Table.Cell>{this.props.profile.lastName}</Table.Cell>
        <Table.Cell>
          <Image size='small' src={this.props.profile.image}/>
          <p>{this.props.profile.image.toString()}</p>
        </Table.Cell>
        <Table.Cell>{this.props.profile.address}</Table.Cell>
        <Table.Cell>{this.props.profile.description}</Table.Cell>
        <Table.Cell>{this.props.profile.owner}</Table.Cell>

        <Table.Cell>{<Link to={`/edit/${this.props.profile._id}`}>Edit</Link>}</Table.Cell>
        {/* <Table.Cell><DeleteMenuprofile key={this.props.profile.name} profile={this.props.profile}/></Table.Cell> */}
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
AdminProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(AdminProfile);
