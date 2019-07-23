import React, {Component} from 'react';
import {Button, Card, Grid, Header, Icon, Image, Item, List, Menu, Segment} from "semantic-ui-react";
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import UserHeader from './userHeader'

const mapState = (state)=>({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    photos: state.firestore.ordered.photos, 


})

const UserDashboard  = ({profile, photos}) =>{

    

return(

<UserHeader profile={profile} photos={photos}/>
)

    }



export default connect(
    mapState,
  )(UserDashboard)