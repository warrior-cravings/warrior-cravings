import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ListMenuItemsUser from '../../pages/MenuItem/ListMenuItemsUser';

/** Component for layout out a Profile Card. */
class VendorCard extends React.Component {
  render() {
    return (
      <Card centered fluid>
        <Image size='large' src={this.props.vendor.image} />
        <Card.Content>
          <Card.Header>{this.props.vendor.name}</Card.Header>
          <Card.Description>
            <p>Location: {this.props.vendor.location}</p>
          </Card.Description>
          <Card.Description>
            {this.props.vendor.description}
            <ListMenuItemsUser key={this.props.vendor.name} vendorDisplayed={this.props.vendor}/>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

VendorCard.propTypes = {
  vendor: PropTypes.object.isRequired,
};

export default VendorCard;
