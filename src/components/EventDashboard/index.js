import React, {Component} from 'react'
import { Grid, Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import EventList from '../EventList'
import EventByAuthor from '../../components/EventsByAuthor'
import { deleteEvent, loadEvent } from '../EventList/eventActions'
import LoadingComponent from '../Loader';
import EventActivity from '../EventActivity';
import { firestoreConnect } from 'react-redux-firebase';
import {getEventsForDashboard, getAllEvents} from '../EventList/eventActions'

const mapState =(state) => ({
    events: state.events,
    loading: state.async.loading,
    // loadedEvents: []

})

const actions = {
    deleteEvent,
    getEventsForDashboard,
    getAllEvents
}
class EventDashboard extends Component {
    state = {
        moreEvents: false,

    }

    async componentDidMount (){
        let all= await this.props.getAllEvents()
        console.log(all)}

    //     // if (next && next.docs && next.docs.length > 1){
    //     //     this.setState({
    //     //         moreEvents: true

    //     //     })
    //     // }
    //     console.log(events)
    // }
    getEventsForDashboard = async()=>{
      
        let next= await this.props.getEventsForDashboard()
        console.log(next)
    }
    // componentDidUpdate = prevProps => {
    //     if (this.props.events !== prevProps.events) {
    //       this.setState({
    //         loadedEvents: [...this.state.loadedEvents, ...this.props.events]
    //       });
    //     }
    //   };

    getNextEvents = async() =>{
        const {events} = this.props;
        // let lastEvent = events && events[events.length - 1]
        // console.log(lastEvent)
        let next = await this.props.getEventsForDashboard()
        console.log(next)
        if (next && next.docs && next.docs.length <= 1){
            this.setState({
                moreEvents: true
            })
        }
    }
   

    handleDeleteEvent = (eventID)=>() => {
        this.props.deleteEvent(eventID)

        }
    

    render () {
        const {events, loading, profile,} =this.props; 
        if (loading) return <LoadingComponent/>
    return(
    
<Grid>
<Grid.Column width ={10}>
<h1>Title List</h1> <Button onClick={this.getNextEvents} content= "Sort by Author Last Name"/>
<EventList
events={events}
deleteEvent ={this.handleDeleteEvent}
getEventsForDashboard={this.getEventsForDashboard}
/>
{/* <EventByAuthor
next={next}/> */}
</Grid.Column>
<Grid.Column width ={6}>
<h2>Activity Feed</h2>
<EventActivity/>

</Grid.Column>


</Grid>

    )
    
    }
    
    
    }
    export default connect(
        mapState, 
        actions
    )(firestoreConnect([{collection: 'events'}])(EventDashboard));