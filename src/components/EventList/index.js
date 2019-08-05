import React, {Component} from 'react'
import EventListItem from '../EventListItem'
import {Button} from 'semantic-ui-react'

class EventList extends Component {

    render () {
        const {events, onEventOpen, deleteEvent, getEventsForDashboard} = this.props;
    return(
<div>
{events&&events.map((event)=>(
<EventListItem
key={event.id} 
event ={event}
onEventOpen ={onEventOpen}
deleteEvent ={deleteEvent}
/>

))}

</div>
            
    )
    
    }
    
    
    }
    export default EventList 