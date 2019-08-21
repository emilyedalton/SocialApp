import React, { Component } from 'react';
import {Tab } from 'semantic-ui-react';
import { Route, NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

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
  menuItem: { as: NavLink, content: "My Titles", to: `/mytitles/${auth.uid}`, exact: true
},
  render: () => (
    <Route path="/">
      <Tab.Pane/> 
   
    </Route>
  )
},
{
  menuItem: { as: Link, content: "Photos", to: "/settings/photos", exact: true },
  render: () => (
    <Route path="/" exact>
      <Tab.Pane/>
     
    </Route>
  )
},
{
  menuItem: { as: NavLink, content: "Settings", to: "/settings/account" },
  render: () => (
    <Route path="/">
      <Tab.Pane/>
   
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
