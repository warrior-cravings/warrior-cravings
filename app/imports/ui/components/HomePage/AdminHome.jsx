import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class AdminHome extends React.Component {
  render() {
    const middlePadding = { paddingTop: '100px', paddingBottom: '100px' };
    return (
      <div style={middlePadding}>
        <Grid id='landing-page' container centered stackable columns={3}>
          <Grid.Column textAlign='center'>
            <Link to="/admin/listallprofiles">
              <Icon color='red' size="massive" name="users"/>
              <Header color='red' as='h1'>All Users</Header>
            </Link>
          </Grid.Column>
          <Grid.Column textAlign='center' >
            <Link to="/admin/listallvendors">
              <Icon color='red' size="massive" name="shopping basket"/>
              <Header color='red' as='h1'>All Vendors</Header>
            </Link>
          </Grid.Column>
          <Grid.Column textAlign='center' >
            <Link to="/admin/listallmenuitems">
              <Icon color='red' size="massive" name="list layout"/>
              <Header color='red' as='h1'>All Menu Items</Header>
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AdminHome;
