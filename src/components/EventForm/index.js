import React, {Component} from 'react'
import {Button, Form, Segment} from 'semantic-ui-react'

const emptyEvent ={
    title:'', 
    date: '',
    city: '',
    venue: '',
    hostedBy: ''

}

class EventForm extends Component {
    state ={
        event: emptyEvent
        
    }
    componentDidMount (){
        if (this.props.selectedEvent !== null){
            this.setState ({
                event:this.props.selectedEvent
            })
        }

    }

    handleSubmit = (e)=>{
        e.preventDefault()
this.props.createEvent(this.state.event)


}

handleInputChange =  (e) =>{
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value
    this.setState({
event: newEvent

    })
    }
    render () {
        const {handleCancel} = this.props

        const {event} = this.state
    return(
                 <Segment>
                   <Form onSubmit={this.handleSubmit}>
                     <Form.Field>
                       <label>Event Title</label>
                       <input name ='title' value={event.title} onChange={this.handleInputChange} placeholder="First Name" />
                     </Form.Field>
                     <Form.Field>
                       <label>Event Date</label>
                       <input name ='date' value={event.date} onChange={this.handleInputChange} placeholder="First Name" type="date" placeholder="Event Date" />
                     </Form.Field>
                     <Form.Field>
                       <label>City</label>
                       <input name ='city' value={event.city} onChange={this.handleInputChange} placeholder="City event is taking place" />
                     </Form.Field>
                     <Form.Field>
                       <label>Venue</label>
                       <input name ='venue' value={event.venue} onChange={this.handleInputChange} placeholder="Enter the Venue of the event" />
                     </Form.Field>
                     <Form.Field>
                       <label>Hosted By</label>
                       <input name ='hostedBy' value={event.hostedBy} onChange={this.handleInputChange} placeholder="Enter the name of person hosting" />
                     </Form.Field>
                     <Button positive type="submit">
                       Submit
                     </Button>
                     <Button 
                     onClick={handleCancel}
                     type="button">Cancel</Button>
                   </Form>
                 </Segment>   

    )
    
    }
    
    
    }
    export default EventForm 