import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const accentStyle = { color: 'white', fontFamily: 'Arial', fontWeight: '700' };
    const gridStyle = { paddingBottom: '5em', paddingTop: '5em', paddingLeft: '5em', paddingRight: '5em' };
    return (

      <div id='landing-page-image1'>
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <div>
            <Header as='h1' centered="true" style={{ color: 'white', fontFamily: 'UHMFont', fontSize: '100px', fontWeight: '900', paddingTop: '150px' }}>Warrior Cravings</Header>
            <p style={{ color: 'white', fontFamily: 'Arial', fontSize: '40px', fontWeight: '700', paddingBottom: '80px', paddingTop: '10px' }}>
              The University of Hawaiʻi at Mānoa campus offers a large selection of food places for students to enjoy and eat at.
              Warrior Cravings allows students to see all the unique food choices available on campus while providing a platform for vendors to showcase their menu. </p>
          </div>
          <div className='accent-block'>
            <Header as='h2' style={accentStyle} inverted>Start off by signing up and making an account.</Header>
          </div>
          <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={gridStyle}>
                  <Header as='h3' style={{ fontSize: '2em', color: 'white' }}>
                    First Steps
                  </Header>
                  <p style={{ fontSize: '1.33em', color: 'white' }}>Once you create an account, log in and create your very own profile! As a vendor, add your menu items and descriptions.</p>
                </Grid.Column>
                <Grid.Column style={gridStyle}>
                  <Header as='h3' style={{ fontSize: '2em', color: 'white' }}>
                    What You Can Do?
                  </Header>
                  <p style={{ fontSize: '1.33em', color: 'white' }}>
                    As a user, you can access the vendors list and see the locations of each vendor. As an admin or vendor, you can add menu items and see the community that is currently signed up for the app.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid></div>
    );
  }
}

export default Landing;
