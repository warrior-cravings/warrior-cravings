import React from 'react';

class Footer extends React.Component {
  render() {
    const divStyle = { paddingBottom: '15px', paddingTop: '50px' };
    return (
      <footer>
        <div style={divStyle} className="ui center aligned container">
          <hr/>
              The Warrior Cravings Project <br/>
              University of Hawaii<br/>
              Honolulu, HI 96822 <br/>
          <a href="https://github.com/warrior-cravings">https://github.com/warrior-cravings</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
