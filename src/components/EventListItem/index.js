import React, {Component} from 'react'
import {Button, Item, Segment, Icon, List} from 'semantic-ui-react'
import EventAttendee from '../EventAttendee'


class EventListItem extends Component {
    render () {
    return(
             <Segment.Group>
                <Segment>
                  <Item.Group>
                    <Item>
                      <Item.Image as= 'a'size ='mini'circluar src='https://randomuser.me/api/portraits/men/42.jpg'/>

                      <Item.Content>
                        <Item.Header as="a">Event Title</Item.Header>
                        <Item.Description>
                          Hosted by <a>hosted by</a>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
                <Segment>
                  <span>
                    <Icon name="clock" /> date |
                    <Icon name="marker" /> time
                  </span>
                </Segment>
                <Segment secondary>
                  <List horizontal>
                  <EventAttendee/>
                  <EventAttendee/>
                  <EventAttendee/>
                  </List>
                </Segment>
                <Segment clearing>
                Some text
                  <Button as="a" color="teal" floated="right" content="View" />
                </Segment>
              </Segment.Group>   

    )
    
    }
    
    
    }
    export default EventListItem 