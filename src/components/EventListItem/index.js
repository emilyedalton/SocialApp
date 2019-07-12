import React, {Component} from 'react'
import {Button, Item, Segment, Icon, List} from 'semantic-ui-react'
import EventAttendee from '../EventAttendee'
import {Link} from 'react-router-dom'


class EventListItem extends Component {
    render () {
        const {event, deleteEvent} = this.props
    return(
             <Segment.Group>
                <Segment>
                  <Item.Group>
                    <Item>
                      <Item.Image 
                      size="tiny" circular src={event.hostPhotoURL} />

                      <Item.Content>
                        <Item.Header as="a">{event.title}</Item.Header>
                        <Item.Description>
                          Hosted by <Link to ={event.hostedBy}></Link>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
                <Segment>
                  <span>
                    {/* <Icon name="clock" /> {event.date} | */}
                    <Icon name="marker" /> {event.venue}
                  </span>
                </Segment>
                <Segment secondary>
                <List horizontal>
            {event.attendees &&   Object.values(event.attendees).map((attendee, index) => (
                <EventAttendee key={index} attendee={attendee} />

))}
                  
                
                  </List>
                </Segment>
                <Segment clearing>
<span>{event.Description}</span>                  
<Button as={Link} to ={`/event/${event.id}`}color="teal" floated="right" content="View" />
<Button onClick={deleteEvent(event.id)}as="a" color="red" floated="left" content="delete" />
<Button as={Link} to ={`/event/${event.id}`} color = "teal" floted="right" content = "go to event"/>
                </Segment>
              </Segment.Group>   

    )
    
    }
    
    
    }
    export default EventListItem 