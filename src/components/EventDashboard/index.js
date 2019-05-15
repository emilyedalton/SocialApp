import React, {Component} from 'react'
import { Grid, Button} from 'semantic-ui-react'
import EventList from '../EventList'
import EventForm from '../EventForm';
import cuid from 'cuid'

const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

class EventDashboard extends Component {
//can remove the consturctor when you use arrow functions on the methods. 
    // constructor(props){
    //     super(props)
 state = {
    events: eventsDashboard,
    isOpen: false,
    selectedEvent: null

}
//aarow functin in the method does the same thing as below
// this.handleFormOpen = this.handleFormOpen.bind(this);
// this.handleCancel = this.handleCancel.bind(this);



    handleFormOpen =()=>{
        this.setState({
            isOpen: true,
        })
    
    }

    handleCancel=()=>{
        this.setState({
            isOpen: false,
            selectedEvent: null
        })
    
    }
    handleCreateEvent = (newEvent) =>{
        newEvent.id= cuid();
        newEvent.PhotoUrl= "photo shoud be here";
        const updatedEvents = [...this.state.events, newEvent]
        this.setState({
            events: updatedEvents,
            isOpen: true
        })


    }
    handleDeleteEvent = (eventID)=>() => {
        const updatedEvents = this.state.events.filter(e => e.id !== eventID);
        this.setState({
            events: updatedEvents

        })
    }
    handleOpenEvent=(eventToOpen)=>() =>{
        this.setState({
            selectedEvent: eventToOpen,
            isOpen: true

        })
    }
handleUpdateEvent = ( updatedEvents)=>{
    this.setState({
        events: this.state.events.map(event =>{
            if (event.id === updatedEvents.id){
                return Object.assign({}, updatedEvents);
            }else{
                return event
            }

        }),
        isOpen: false, 
        selectedEvent: null
    })

}
    render () {
        const {selectedEvent} =this.state

    return(
    
<Grid>
<Grid.Column width ={10}>

<EventList
onEventOpen={this.handleOpenEvent}
events={this.state.events}
deleteEvent ={this.handleDeleteEvent}
/>
</Grid.Column>
<Grid.Column width ={6}>
<Button
onClick = {this.handleFormOpen}
positive content ="Create Event"/>
{this.state.isOpen &&
<EventForm
handleCancel={this.handleCancel}
createEvent={this.handleCreateEvent}
selectedEvent={selectedEvent}
updateEvent ={this.handleUpdateEvent}

/>}
</Grid.Column>


</Grid>

    )
    
    }
    
    
    }
    export default EventDashboard 