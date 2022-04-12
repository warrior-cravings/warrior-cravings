import React from 'react';
import { Grid, Header, Icon, List } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const footStyle = { backgroundColor: 'red', height: '100px', paddingTop: '10x', paddingBottom: '10px' };
    return (
        <footer className="footer" style={ footStyle }>
          <Grid container textAlign='center' columns={1}>
            <Grid.Column>
            </Grid.Column>
          </Grid>
        </footer>
    );
  }
}

export default Footer;
