import React from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const buttonStyle = { backgroundColor: 'red', color: 'white', fontFamily: 'Arial', fontSize: '30px', marginLeft: '100px', marginRight: '100px' };
    const headStyle = { color: 'red', fontFamily: 'UHMFont', fontSize: '40px', fontWeight: '700', paddingBottom: '30px' };
    const logoStyle = { color: 'red', fontFamily: 'UHMFont', fontSize: '300px', fontWeight: '700', paddingTop: '100px' };
    const sumStyle = { color: 'red', fontFamily: 'Arial', fontSize: '30px', fontWeight: '700', marginLeft: '170px', marginRight: '170px', paddingBottom: '100px', paddingTop: '30px' };
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Row>
          <Header as='h1' style={logoStyle}>WC</Header>
        </Grid.Row>
        <Grid.Row>
          <Header as='h1' style={headStyle}>Warrior Cravings </Header>
        </Grid.Row>
        <Grid.Row>
          <Button className="ui circular red button" color='white'as={NavLink} exact to="/signin" style={buttonStyle}>Sign In</Button>
          <Button className="ui circular red button" color='white' as={NavLink} exact to="/signup" style={buttonStyle}>Sign Up</Button>
        </Grid.Row>
        <Grid.Row>
          {/* eslint-disable-next-line max-len */}
          <p style={sumStyle}>The University of Hawaiʻi at Mānoa campus offers a large selection of food places for students to enjoy and eat at. Warrior Cravings allows Students to see all the unique food choices available on campus while providing a platform for Vendors to showcase their menu. </p>
        </Grid.Row>
      </Grid>

    );
  }
}

export default Landing;
