import React from 'react';
import { Grid, Menu, Icon, List } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const footStyle = { backgroundColor: 'red', height: '100px', paddingTop: '10x', paddingBottom: '10px' };
    const footContentStyle = { color: 'white', fontSize: '30px' };
    return (
      <footer className="footer" attached="bottom" style={footStyle}>
        <div style={footContentStyle} className="ui center aligned container">
              The Warrior Cravings Project <br/>
              University of Hawaii<br/>
              Honolulu, HI 96822 <br/>
          <a style={footContentStyle} href="https://github.com/warrior-cravings">https://github.com/warrior-cravings</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
