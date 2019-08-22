import React, {Component} from 'react'
import EventListItem from '../EventListItem'
import LazyLoad from 'react-lazyload'

class EventList extends Component {

    render () {
        const {events, onEventOpen, deleteEvent,  auth} = this.props;
    return(
<div>
{events&&events.map((event)=>(
    <LazyLoad key={event.id}>
<EventListItem
auth={auth}
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