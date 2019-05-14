import React, {Component} from 'react'
import {Button, Item, Segment, Icon, List} from 'semantic-ui-react'
import EventAttendee from '../EventAttendee'


class EventListItem extends Component {
    render () {
        const {event, onEventEdit} = this.props
    return(
             <Segment.Group>
                <Segment>
                  <Item.Group>
                    <Item>
                      <Item.Image 
                      as= 'a'size ='mini'
                      circluar src={event.hostPhotoURL}/>

                      <Item.Content>
                        <Item.Header as="a">{event.title}</Item.Header>
                        <Item.Description>
                          Hosted by <a>{event.date}</a>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
                <Segment>
                  <span>
                    <Icon name="clock" /> {event.date} |
                    <Icon name="marker" /> {event.venue}
                  </span>
                </Segment>
                <Segment secondary>
                  <List horizontal>
                  {event.attendees && event.attendees.map((attendees)=>(
<EventAttendee
key={attendees.id} attendee ={attendees}
/>

))}
                  
                
                  </List>
                </Segment>
                <Segment clearing>
<span>{event.Description}</span>                  
<Button onClick={onEventEdit(event)}as="a" color="teal" floated="right" content="View" />
                </Segment>
              </Segment.Group>   

    )
    
    }
    
    
    }
    export default EventListItem 