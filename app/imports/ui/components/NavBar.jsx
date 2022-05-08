import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Item, Icon } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = {
      fontFamily: 'UHMFont', backgroundColor: 'red', height: '80', marginBottom: '10px', fontSize: '0.85vw',
    };
    return (
      <Menu style={menuStyle} attached="top" borderless inverted>
        {(this.props.currentUser) ? ([
          <Item.Image id={'nav-logo'} size={'tiny'} src="/images/Warrior_Cravings_Logo_red-white.png" as={NavLink} activeClassName='' exact to='/home' key='home'>
          </Item.Image>,
          <Menu.Item as={NavLink} activeClassName="active" exact to="/locations" key='locations'>Locations</Menu.Item>,
          <Menu.Item as={NavLink} activeClassName="active" exact to="/listVenU" key='listVenU'>Vendors List</Menu.Item>,
          <Menu.Item as={NavLink} activeClassName="active" exact to="/hungry" key='hungry'>Feeling Hungry</Menu.Item>,
        ]) :
          <Item.Image id={'nav-logo'} size={'tiny'} src="/images/Warrior_Cravings_Logo_red-white.png" as={NavLink} activeClassName='' exact to='/'>
          </Item.Image>
        }

        {Roles.userIsInRole(Meteor.userId(), 'admin') ? ([
          <Menu.Item position='right' key='adminicon'><Icon size='large' name='detective'></Icon>Admin</Menu.Item>,
          <Menu.Item as={NavLink} activeClassName="active" exact to="/admin/listallprofiles" key='adminUsers'>All Users</Menu.Item>,
          <Menu.Item as={NavLink} activeClassName="active" exact to="/admin/listallvendors" key='adminVendors'>All Vendors</Menu.Item>,
          <Menu.Item as={NavLink} activeClassName="active" exact to="/admin/listallmenuitems" key='adminMenu'>All Menu Items</Menu.Item>,
        ]) : ''}
        {((this.props.currentUser) && !(Roles.userIsInRole(Meteor.userId(), 'admin'))) ? ([
          <Menu.Item position="right" as={NavLink} activeClassName="active" exact to="/myprofile" key='myprofile'>My Profile</Menu.Item>,
        ]) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'vendor') ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/menuitem/menuitemsV" key='vendor'> My Menu Items</Menu.Item>)
          : ''
        }
        {
          <Menu.Item>
            {this.props.currentUser === '' ? (<Dropdown id="login-dropdown" text="Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>) : (<Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>)}
          </Menu.Item>}
      </Menu>);
  }
}

// Declare the types of all properties.
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(NavBarContainer);
