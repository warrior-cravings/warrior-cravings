import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Component for layout out a Profile Card. */
export const VendorCard = (props) => (
  <Card centered>
    <Card.Content>
      <Image floated='center' size='normal' src={props.vendor.image} />
      <Card.Header>{props.vendor.name}</Card.Header>
      <Card.Description>
        {props.vendor.location}
      </Card.Description>
      <Card.Description>
        {props.vendor.description}
        {props.vendor.menuItem}
      </Card.Description>
    </Card.Content>
  </Card>
);

VendorCard.propTypes = {
  vendor: PropTypes.object.isRequired,
};
