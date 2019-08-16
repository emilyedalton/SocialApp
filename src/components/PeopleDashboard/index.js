// import React, {Component} from 'react';
// import {compose} from 'redux'
// import {connect}from 'react-redux'
// import UserHeader from '../UserDetails/userHeader'
// // import UserInfo from '../UserDetails/UserInfo'
// import UserTitles from '../UserTitles'
// import DetailPhotos from '../UserDetails/DetailPhotos'
// import { firestoreConnect, isEmpty } from 'react-redux-firebase';
// import {getAuthorTitles} from '../User/userActions'
// import UserQuery from '../UserDetails/userQuery'
// import SettingsNav from '../SettingsNav'



// const actions = {
//     getAuthorTitles
// }
// const mapState = (state, ownProps) => {
//     let userUid = null;
//     let profile = {};
  
//     // if (ownProps.match.params.id === state.auth.uid) {
//     //   profile = state.firebase.profile;
//     // } 
//     // console.log(profile)

//     // else 
//     // {
//     //   profile =
//     //     !isEmpty(state.firestore.ordered.profile) &&
//     //     state.firestore.ordered.profile[0];
//     //     userUid = ownProps.match.params.id;
//     // }
//     return {
//       profile,
//       userUid,
//       events: state.events,
//       eventsLoading: state.async.loading,
//       auth: state.firebase.auth,
//       users: state.users,
//       photos: state.firestore.ordered.photos,
//       requesting: state.firestore.status.requesting

//     };

//   };

// // const mapState = (state)=>({
//     // userUid: state.user.uid,
// //     auth: state.firebase.auth,
// //     profile: state.firebase.profile,
// //     photos: state.firestore.ordered.photos, 
    


// // })

// class PeopleDashboard extends Component{
//     async componentDidMount(){
//         let events = await this.props.getAuthorTitles(this.props.userUid)
//         console.log(events)
//     }
// render(){
//     const {profile, photos, auth, users, events} =this.props;
//     // const isCurrentUser = auth.uid === match.params.id;
    

// return(
// <div>

// <UserHeader users={users} photos={photos} events={events} />
//  {/* <DetailPhotos profile={profile} photos={photos} auth={auth}
// titles={events}
// isCurrentUser={isCurrentUser}/>
// <UserTitles profile={profile} photos={photos} auth={auth}
// titles={events}
// isCurrentUser={isCurrentUser}/> */}
// </div>
// )

//     }

// }

// export default connect(
//     mapState,
//     actions
//   )(
//     firestoreConnect((auth, userUid) => UserQuery(auth, userUid))(
//       PeopleDashboard
//     )
//   );