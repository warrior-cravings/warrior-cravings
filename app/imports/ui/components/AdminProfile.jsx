import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class AdminProfile extends React.Component {
  render() {
    return (
      <Item>
        <Item.Image size='small' floated='left' src={this.props.profile.image} />

        <Item.Content>
          <Item.Header as='a'>{this.props.profile.firstName}{this.props.profile.lastName}</Item.Header>
          <Item.Description>
            {this.props.profile.description}
          </Item.Description>
          <Item.Extra>{this.props.profile.address}</Item.Extra>
        </Item.Content>
      </Item>

    );
  }
}

// Require a document to be passed to this component.
AdminProfile.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(AdminProfile);
