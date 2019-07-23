import React, {Component} from 'react';
import { compose} from 'redux'
import {connect}from 'react-redux'
import UserHeader from './userHeader'
import UserInfo from './UserInfo'
import DetailPhotos from './DetailPhotos'
import { firestoreConnect } from 'react-redux-firebase';

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

const mapState = (state)=>({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    photos: state.firestore.ordered.photos, 


})

const UserDashboard  = ({profile, photos, auth}) =>{

    

return(
<div>
<UserHeader profile={profile} photos={photos}/>
<UserInfo profile={profile} photos={photos}/>
<DetailPhotos profile={profile} photos={photos} auth={auth} />
</div>
)

    }



export default compose(
    connect(mapState),
    firestoreConnect(auth => query(auth)),
  )(UserDashboard)