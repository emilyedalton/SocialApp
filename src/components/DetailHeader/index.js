import React from 'react'
import { Segment, Item, Header, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const DetailHeader =({event, attend})=> {
    

    return(
        <div>
   <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0', background: "#4E2A84",
 }}>

        <Segment basic>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.titleofBook}
                  style={{ 
                    
                    color: 'White' 
                }}/>
             
                <p style={{ 
                    
                  color: 'White' 
              }}>
                 by <strong >{event.fullAuthor}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        {/* <Button>Cancel My Place</Button> */}
        <Button onClick={()=> attend(event)} color="gray">Follow this Title</Button>

        <Button as={Link} to={`/manage/${event.id}`}color="gray" floated="right">
          Manage Title
        </Button>
      </Segment>
    </Segment.Group>
    </div>
    )
}

    
    export default DetailHeader