import React, {Component} from 'react'
import {Button, Item, Segment, Icon, List, Label} from 'semantic-ui-react'
import EventAttendee from '../EventAttendee'
import {Link} from 'react-router-dom'


class EventListItem extends Component {
    render () {
        const {event, deleteEvent,} = this.props
    return(
             <Segment.Group>
                <Segment>
                  <Item.Group>
                  <Label as='p' color='black' image>
                {event.choices}</Label>
                    <Item>
                     

                      <Item.Content>
                        <Item.Header as="a">{event.titleofBook}</Item.Header>
                        <Item.Description>
                         <h4>by {event.lastName}, {event.firstName}</h4> 
                         <p>{event.bookDesc}</p> 
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
                <Segment clearing>
<span>{event.Description}</span>                  
<Button as={Link} to ={`/event/${event.id}`}floated="right" content="View" />
<Button as={Link} to ={`/event/${event.id}`}  floted="right" content = "Follow this Title"/>
                </Segment>
              </Segment.Group>   

    )
    
    }
    
    
    }
    export default EventListItem 