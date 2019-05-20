import React, {Component} from 'react'
import DetailHeader from '../DetailHeader'
import EventInfo from '../EventInfo'
import Attendees from '../Attendees'
import Comments from '../Comments'
import { Grid, Button} from 'semantic-ui-react'

// import { connect } from 'react-redux'
// import EventList from '../EventList'
// import EventForm from '../EventForm';
// import cuid from 'cuid'
// import {createEvent, deleteEvent, updateEvent} from '../EventList/eventActions'


const EventDetailedPage = () =>{
return(
<Grid>

<Grid.Column width ={10}>
<DetailHeader/>
<EventInfo/>
<Comments/>

</Grid.Column>

<Grid.Column width ={6}>

<Attendees/>

</Grid.Column>
</Grid>
    )
}

    
    export default EventDetailedPage