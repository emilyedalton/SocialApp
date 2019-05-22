import React, {Component} from 'react'
import { Grid, Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import EventList from '../EventList'
import EventForm from '../EventForm';
import cuid from 'cuid'
import {createEvent, deleteEvent, updateEvent} from '../EventList/eventActions'

const mapState =(state) => ({
    events: state.events
})

const actions = {
    // createEvent,
    deleteEvent,
    // updateEvent
}
class EventDashboard extends Component {
//can remove the consturctor when you use arrow functions on the methods. 
    // constructor(props){
    //     super(props)
//  state = {
//     isOpen: false,
//     selectedEvent: null

// }
//aarow functin in the method does the same thing as below
// this.handleFormOpen = this.handleFormOpen.bind(this);
// this.handleCancel = this.handleCancel.bind(this);



    // handleFormOpen =()=>{
    //     this.setState({
    //         isOpen: true,
    //     })
    
    // }

    // handleCancel=()=>{
    //     this.setState({
    //         isOpen: false,
    //         selectedEvent: null
    //     })
    
    // }
    // handleCreateEvent = (newEvent) =>{
    //     newEvent.id= cuid();
    //     newEvent.PhotoUrl= "photo shoud be here";
    //     this.props.createEvent(newEvent)
    //     this.setState({
    //         isOpen: true
    //     })


    // }

    handleDeleteEvent = (eventID)=>() => {
        this.props.deleteEvent(eventID)

        }
    
//     handleOpenEvent=(eventToOpen)=>() =>{
//         this.setState({
//             selectedEvent: eventToOpen,
//             isOpen: true

//         })
//     }
// handleUpdateEvent = (updatedEvent)=>{
//     this.props.updateEvent(updatedEvent)
//     this.setState({
//         isOpen: false, 
//         selectedEvent: null
//     })

// }
    render () {
        // const {selectedEvent} =this.state
        const {events} =this.props
    return(
    
<Grid>
<Grid.Column width ={10}>

<EventList
// onEventOpen={this.handleOpenEvent}
events={events}
deleteEvent ={this.handleDeleteEvent}
/>
</Grid.Column>
<Grid.Column width ={6}>
{/* <Button
onClick = {this.handleFormOpen}
positive content ="Create Event"/>
{this.state.isOpen &&
<EventForm
handleCancel={this.handleCancel}
createEvent={this.handleCreateEvent}
selectedEvent={selectedEvent}
updateEvent ={this.handleUpdateEvent} */}


</Grid.Column>


</Grid>

    )
    
    }
    
    
    }
    export default connect(mapState, actions)(EventDashboard)