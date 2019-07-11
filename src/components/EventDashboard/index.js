import React, {Component} from 'react'
import { Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'
import EventList from '../EventList'
import { deleteEvent } from '../EventList/eventActions'
import LoadingComponent from '../Loader';
import EventActivity from '../EventActivity';

const mapState =(state) => ({
    events: state.events,
    loading: state.async.loading
})

const actions = {
    deleteEvent,
}
class EventDashboard extends Component {


    handleDeleteEvent = (eventID)=>() => {
        this.props.deleteEvent(eventID)

        }
    

    render () {
        const {events, loading} =this.props; 
        if (loading) return <LoadingComponent/>
    return(
    
<Grid>
<Grid.Column width ={10}>

<EventList
events={events}
deleteEvent ={this.handleDeleteEvent}
/>
</Grid.Column>
<Grid.Column width ={6}>
<h2>Activity Feed</h2>
<EventActivity/>

</Grid.Column>


</Grid>

    )
    
    }
    
    
    }
    export default connect(mapState, actions)(EventDashboard)