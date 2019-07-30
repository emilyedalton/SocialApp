import React, { Fragment } from 'react';
import { Header, Menu, Tab } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PhotosPage from '../PhotosPage';
import AccountPage from '../AccountPage';
import UserDashboard from '../UserDetails/UserDashboard';



const panes = [
  { menuItem: 'Photos', render: () => <PhotosPage/> },
  { menuItem: 'Info', render: () => <UserDashboard/> },
  { menuItem: 'Account', render: () => <AccountPage/> },
]

const SettingsNav = () => {
  return (
    <Tab  panes={panes} />
    // <Fragment>
    //   <Menu vertical>
    //     <Header icon='user' attached inverted color='grey' content='Profile' />
    //     <Menu.Item as={NavLink} to='/settings/basic'>
    //       Basics
    //     </Menu.Item>
    //     <Menu.Item as={NavLink} to='/settings/about'>
    //       About Me
    //     </Menu.Item>
    //     <Menu.Item as={NavLink} to='/settings/photos'>
    //       My Photos
    //     </Menu.Item>
    //   </Menu>
    //   <Menu vertical>
    //     <Header
    //       icon='settings'
    //       attached
    //       inverted
    //       color='grey'
    //       content='Account'
    //     />
    //     <Menu.Item as={NavLink} to='/settings/account'>
    //       My Account
    //     </Menu.Item>
    //   </Menu>
    // </Fragment>
  );
};

export default SettingsNav;