import React from 'react';
import { Segment, Header, Grid, Card,Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const UserTitles= ({profile, photos, auth, titles, isCurrentUser, eventsLoading}) => {
    return (
    

<Grid.Column width={12}>
                     <Segment attached loading={eventsLoading}>
                         <Grid columns={2}>
                             <Grid.Column width={12}>
                                 <Header content={`${profile.displayName}'s Titles`}/>

                                 <Card.Group itemsPerRow={5}>
          {titles &&
            titles.map(title => (
              <Card as={Link} to={`/title/${title.id}`} key={title.id}>
                <Card.Content >
                  <Card.Header>{title.titleofBook}</Card.Header>
 </Card.Content>
 
 <Icon fitted name="book" color ="black" size="huge"/>  
 <Card.Content extra> <Label as='p' color='black' image>
                {title.choices}</Label> </Card.Content>           
              </Card>
            ))}
        </Card.Group>
 
                             </Grid.Column>

              <Grid.Column width={6}>
            
              
</Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
 );
};
export default UserTitles;