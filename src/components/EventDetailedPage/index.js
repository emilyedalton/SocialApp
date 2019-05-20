import React, {Component} from 'react'
import DetailHeader from '../DetailHeader'
import EventInfo from '../EventInfo'
import Attendees from '../Attendees'
import Comments from '../Comments'
import { Grid, Button} from 'semantic-ui-react'

import {connect} from 'react-redux'

const mapState =(state, ownProps) => {
    const eventID = ownProps.match.params.id;
    let event ={};

    if (eventID && state.events.length >0){
        event = state.events.filter(event => event.id === eventID)[0]

    }
    return{
        event
    }
}
// import { connect } from 'react-redux'
// import EventList from '../EventList'
// import EventForm from '../EventForm';
// import cuid from 'cuid'
// import {createEvent, deleteEvent, updateEvent} from '../EventList/eventActions'


const EventDetailedPage = ({event}) =>{
return(
<Grid>

<Grid.Column width ={10}>
<DetailHeader event ={event}/>
<EventInfo event ={event}/>
<Comments/>

</Grid.Column>

<Grid.Column width ={6}>

<Attendees attendees={event.attendees}/>

</Grid.Column>
</Grid>
    )
}

    
 export default connect(mapState)(EventDetailedPage)