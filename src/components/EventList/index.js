import React, {Component} from 'react'
import EventListItem from '../EventListItem'
import {Button} from 'semantic-ui-react'
import LazyLoad, { lazyload } from 'react-lazyload'

class EventList extends Component {

    render () {
        const {events, onEventOpen, deleteEvent, getEventsForDashboard} = this.props;
    return(
<div>
{events&&events.map((event)=>(
    <LazyLoad key={event.id}>
<EventListItem
 
event ={event}
onEventOpen ={onEventOpen}
deleteEvent ={deleteEvent}
/>
</LazyLoad>
))}

</div>
            
    )
    
    }
    
    
    }
    export default EventList 