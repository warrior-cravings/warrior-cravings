import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Vendor table. See pages/ListVendorsUser.jsx. */
class Vendor extends React.Component {
  render() {
    return (
      <Card fluid href={`#/vendor/${this.props.vendor._id}`}>
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

// Require a document to be passed to this component.
Vendor.propTypes = {
  vendor: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Vendor);
