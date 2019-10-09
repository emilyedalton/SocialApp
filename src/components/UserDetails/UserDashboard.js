import React, {Component} from 'react';
import {connect}from 'react-redux'
import {Grid} from 'semantic-ui-react'
import UserTitles from '../UserTitles'
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import {getAuthorTitles} from '../User/userActions'
import UserQuery from './userQuery'
import SettingsNav from '../SettingsNav'
import LoadingComponent from '../Loader' 




const mapState = (state, ownProps) => {
    let userUid = null;
    let profile = {};
  
    if (ownProps.match.params.id === state.auth.uid) {
      profile = state.firebase.profile;
    } 
    else 
    {
      profile =
        !isEmpty(state.firestore.ordered.profile) &&
        state.firestore.ordered.profile[0];
        userUid = ownProps.match.params.id;
    }
    return {
      profile,
      userUid,
      events: state.events,
      eventsLoading: state.async.loading,
      auth: state.firebase.auth,
      photos: state.firestore.ordered.photos,
      requesting: state.firestore.status.requesting

    };

  };
const actions ={
  getAuthorTitles
};


class UserDashboard extends Component{
    // async componentDidMount(){
    //     let events = await this.props.getAuthorTitles(this.props.userUid)
    //     console.log('I am workign')
    //   }
render(){
    const {profile, photos, auth, match, events, eventsLoading, requesting} =this.props;
    const isCurrentUser = auth.uid === match.params.id;
    // const loading = Object.values(requesting).some(a => a === true);
    if (eventsLoading) return <LoadingComponent />;

return(
<Grid>
 <SettingsNav profile={profile} photos={photos} auth={auth}
titles={events}
isCurrentUser={isCurrentUser}/>

<UserTitles profile={profile} photos={photos} auth={auth}
titles={events}
isCurrentUser={isCurrentUser}
eventsLoading={eventsLoading}
/>
</Grid>
)

    }

}

export default connect(
    mapState,
    actions
  )(
    firestoreConnect((auth, userUid) => UserQuery(auth, userUid))(
      UserDashboard
    )
  );