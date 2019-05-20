import React, {Component} from 'react'
import { Segment, Image, Item, Header, Button} from 'semantic-ui-react'
// import { connect } from 'react-redux'
// import EventList from '../EventList'
// import EventForm from '../EventForm';
// import cuid from 'cuid'
// import {createEvent, deleteEvent, updateEvent} from '../EventList/eventActions'


const DetailHeader =({event})=> {
    

    return(
        <div>
   <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0', background: "Purple" }}
      
      >
        {/* <Image src="/assets/categoryImages/drinks.jpg" fluid /> */}

        <Segment basic>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ 
                    
                    color: 'White' 
                }}
                />
                <p>{event.date}</p>
                <p>
                  Hosted by <strong>{event.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button color="orange" floated="right">
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
    </div>
    )
}

    
    export default DetailHeader