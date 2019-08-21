import React, {Component} from 'react'
import {Button, Item, Segment, Label} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class EventListItem extends Component {
    render () {
        const {auth,event, } = this.props
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
                        <Link to={`/user/${event.hostUid}`} style={{color: 'black'}}>

                         <h4>by {event.lastName}, {event.firstName}</h4>  </Link>
                         <p>{event.bookDesc}</p> 
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
                <Segment clearing>
<span>{event.Description}</span>                  
<Button as={Link} to ={`/title/${event.id}`}floated="right" content="View" />
<Button as={Link} to ={`/title/${event.id}`}  floted="right" content = "Follow this Title"/>
                </Segment>
              </Segment.Group>   

    )
    
    }
    
    
    }
    export default EventListItem 