import React, {Component} from 'react'
import DetailHeader from '../DetailHeader'
import EventInfo from '../EventInfo'
import Attendees from '../Attendees'
import Comments from '../Comments'
import { Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withFirestore} from 'react-redux-firebase'
import toastr from 'react-redux-toastr'
import {objectToArray} from '../../common/util/helpers'
import {attend} from '../User/userActions'
const mapState =(state, ownProps) => {
    const eventID = ownProps.match.params.id;
    
    let event ={};

    if (state.firestore.ordered.events && state.firestore.ordered.events.length >0){
        event = state.firestore.ordered.events.filter(event => event.id === eventID)[0]

    }
    return{
        event,
        auth: state.firebase.auth,
        profile: state.firebase.profile

    }
}

const actions = {
attend
}

class EventDetailedPage extends Component{
        async componentDidMount() {
            const { firestore, match } = this.props;
            await firestore.setListener(`events/${match.params.id}`);
          }
        
          async componentWillUnmount() {
            const { firestore, match } = this.props;
            await firestore.unsetListener(`events/${match.params.id}`);
          }

render(){
    const {event, auth, attend, profile} = this.props;
    const attendees = event && event.attendees && objectToArray(event.attendees)
    const isHost = event.hostUid === auth.uid; 
    const isGoing = attendees &&  attendees.some(a => a.id === auth.uid)

    return(
        <Grid>
        
        <Grid.Column width ={10}>
        <DetailHeader event ={event} attend={attend} profile={profile}/>
        <EventInfo event ={event}/>
        <Comments/>
        
        </Grid.Column>
        
        <Grid.Column width ={6}>
        
        <Attendees attendees={attendees}/>
        
        </Grid.Column>
        </Grid>
            )


}




}

    
 export default withFirestore (connect(mapState, actions)(EventDetailedPage))