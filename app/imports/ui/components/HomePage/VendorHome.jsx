import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class VendorHome extends React.Component {
  render() {
    const middlePadding = { paddingTop: '100px', paddingBottom: '100px' };
    return (
      <div style={middlePadding}>
        <Grid id='landing-page' container centered stackable columns={3}>
          <Grid.Column textAlign='center'>
            <Link to="/listVenU">
              <Icon color='red' size="massive" name="utensils"/>
              <Header color='red' as='h1'>Other Vendors</Header>
            </Link>
          </Grid.Column>
          <Grid.Column textAlign='center' >
            <Link to="/vendor/mymenu">
              <Icon color='red' size="massive" name="star"/>
              <Header color='red' as='h1'>My Menu Items</Header>
            </Link>
          </Grid.Column>
          <Grid.Column textAlign='center' >
            <Link to="/listvendors">
              <Icon color='red' size="massive" name="user circle"/>
              <Header color='red' as='h1'>My Vendor Profile</Header>
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default VendorHome;
