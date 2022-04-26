import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
// import { Redirect } from 'react-router-dom';
// import { Meteor } from 'meteor/meteor';
// import { Roles } from 'meteor/alanning:roles';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    // if (Roles.userIsInRole(Meteor.userId(), 'user')) {
    //   return <Redirect to={{ from: { pathname: '/userhome' } }}/>;
    // }
    const headStyle = { color: 'red', fontFamily: 'UHMFont', fontSize: '30px', fontWeight: '700', paddingBottom: '10px' };
    const logoStyle = { color: 'red', fontFamily: 'UHMFont', fontSize: '200px', fontWeight: '700', paddingTop: '50px' };
    const sumStyle = { color: 'red', fontFamily: 'Arial', fontSize: '25px', fontWeight: '700', marginLeft: '165px', marginRight: '165px', paddingBottom: '80px', paddingTop: '10px' };
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Row>
          <Header as='h1' style={logoStyle}>WC</Header>
        </Grid.Row>
        <Grid.Row>
          <Header as='h1' style={headStyle}>Warrior Cravings </Header>
        </Grid.Row>
        <Grid.Row>
          <p style={sumStyle}>
            The University of Hawaiʻi at Mānoa campus offers a large selection of food places for students to enjoy and eat at.
            Warrior Cravings allows Students to see all the unique food choices available on campus while providing a platform for Vendors to showcase their menu. </p>
        </Grid.Row>
      </Grid>

    );
  }
}

export default Landing;
