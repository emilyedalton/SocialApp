import React from 'react';
import { Segment, Header, Item, Grid, Icon, List } from 'semantic-ui-react';

const UserInfo = ({profile, photos}) => {
    return (
    

<Grid.Column width={12}>
                     <Segment>
                         <Grid columns={2}>
                             <Grid.Column width={10}>
                                 <Header content={`About ${profile.displayName}`}/>
                                 <p>I am a: <strong>{profile.occupation}</strong></p>
                                 <p>Originally from <strong>{profile.city}</strong></p>
                                 <p>Member Since: <strong>28th March 2018</strong></p>
                                 <p>{profile.about}</p>

                             </Grid.Column>

              <Grid.Column width={6}>
            <Header icon='heart outline' content='Interests' />
            <List>
              {profile.interests ? (
                profile.interests.map((interest, index) => (
                  <Item key={index}>
                    <Icon name='heart' />
                    <Item.Content>{interest}</Item.Content>
                  </Item>
                ))
              ) : (
                <p>No interests</p>
              )}
               

</List>
</Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};
export default UserInfo;