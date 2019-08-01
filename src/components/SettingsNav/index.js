import React, { Component } from 'react';
import { Header, Menu, Tab } from 'semantic-ui-react';
import { Route, NavLink, Router } from 'react-router-dom';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import PhotosPage from '../PhotosPage';
import AccountPage from '../AccountPage';
import UserHeader from '../UserDetails/userHeader';
import UserDashboard from '../UserDetails/UserDashboard';

const query = ({auth})=>{
  return [
      {
          collection: 'users',
          doc: auth.uid,
          subcollections: [{collection: 'photos'}],
          storeAs: 'photos'
      }
  ]

}
const mapState = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  photos: state.firestore.ordered.photos, 
  loading: state.async.loading
})


class SettingsNav extends Component{

  render(){
    const {auth} = this.props
    const panes = 

[
{
  menuItem: { as: NavLink, content: "About", to: `/profile/${auth.uid}`
},
  render: () => (
    <Route path="/">
      <Tab.Pane >
        {/* <div>Authentication content here</div> */}
      </Tab.Pane>
    </Route>
  )
},
{
  menuItem: { as: NavLink, content: "Photos", to: "/settings/photos", exact: true },
  render: () => (
    <Route path="/" exact>
      <Tab.Pane>
        {/* <div>Home</div> */}
      </Tab.Pane>
    </Route>
  )
},
{
  menuItem: { as: NavLink, content: "Info", to: "/info" },
  render: () => (
    <Route path="/configs">
      <Tab.Pane>
        <div>Config Lists content here</div>
      </Tab.Pane>
    </Route>
  )
}
];

return (
    <Tab panes={panes} />
  
);
}
}

export default compose(
  connect(
    mapState
    
  ),
  firestoreConnect(auth => query(auth))
)(SettingsNav);
// export default SettingsNav;