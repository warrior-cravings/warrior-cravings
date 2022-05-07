import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Vendor extends React.Component {
  render() {
    const text = { paddingTop: '50px', fontSize: '20px' };
    return (
      <Card>
        <Image src={this.props.vendor.image}/>
        <Card.Content>
          <Card.Header>{this.props.vendor.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/edit/${this.props.vendor._id}`}>Edit</Link>
        </Card.Content
        ><Card.Content extra>
          <p style={text}>{this.props.vendor.description}</p>
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
