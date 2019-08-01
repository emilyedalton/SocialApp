import React from 'react';
import { Segment, Header, Item, Grid, Card,Icon, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const UserTitles= ({profile, photos, auth, titles, isCurrentUser}) => {
    return (
    

<Grid.Column width={12}>
                     <Segment>
                         <Grid columns={2}>
                             <Grid.Column width={12}>
                                 <Header content={`About ${profile.displayName}`}/>

                                 <Card.Group itemsPerRow={5}>
          {titles &&
            titles.map(title => (
              <Card as={Link} to={`/event/${title.id}`} key={title.id}>
                <Card.Content>
                  <Card.Header textAlign='center'>{title.titleofBook}</Card.Header>
 </Card.Content>
 
 <Icon fitted name="book" color ="black" size="huge" textAlign='center' verticalAlign="middle"/>  
 <Card.Content> {title.choices} </Card.Content>           
              </Card>
            ))}
        </Card.Group>
 
                             </Grid.Column>

              <Grid.Column width={6}>
            
                <p>No interests</p>
              
               

</Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
 );
};
export default UserTitles;