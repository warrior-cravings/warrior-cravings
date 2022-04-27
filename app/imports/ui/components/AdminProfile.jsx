import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class AdminProfile extends React.Component {
  render() {
    const text = { paddingTop: '50px', fontSize: '20px' };
    return (
      <Grid columns={2}>
        <Grid.Column>
          <Card>
            <Image src={this.props.profile.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.profile.firstName} {this.props.profile.lastName}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              {this.props.profile.owner}
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <h2>About Me</h2>
          <p style={text}>{this.props.profile.description}</p>
          <Link style={text} to={`/edit/${this.props.profile._id}`}>Edit</Link>
        </Grid.Column>
      </Grid>
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
    _id: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(AdminProfile);
