import React from 'react'
import { Segment, Item, Header, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const DetailHeader =({event})=> {
    

    return(
        <div>
   <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0', background: "Purple" }}>

        <Segment basic>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.titleofBook}
                  style={{ 
                    
                    color: 'White' 
                }}
                />
                <p>{event.bookDesc}</p>
                <p>
                  Hosted by <strong>{event.fullAuthor}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button as={Link} to={`/manage/${event.id}`}color="orange" floated="right">
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
    </div>
    )
}

    
    export default DetailHeader