import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Component for layout out a Vendor Profile Card. */
class VendorCard extends React.Component {
  render() {
    return (
      <Card href={`#/vendor/${this.props.vendor._id}`}>
        <Image size='medium' src={this.props.vendor.image}/>
        <Card.Content>
          <Card.Header>
            {this.props.vendor.name}
          </Card.Header>
          <Card.Meta><p>Location: {this.props.vendor.location}</p></Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

VendorCard.propTypes = {
  vendor: PropTypes.object.isRequired,
};

export default VendorCard;
