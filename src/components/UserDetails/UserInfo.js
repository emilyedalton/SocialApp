import React from 'react';
import { Segment, Header, Item, Grid, Icon, List } from 'semantic-ui-react';

const UserInfo = ({profile, photos}) => {
    return (

<Grid.Column width={12}>
                     <Segment>
                         <Grid columns={2}>
                             <Grid.Column width={10}>
                                 <Header icon='smile' content={`About ${profile.displayName}`}/>
                                 <p>I am a: <strong>{profile.occupation}</strong></p>
                                 <p>Originally from <strong>{profile.city}</strong></p>
                                 <p>Member Since: <strong>28th March 2018</strong></p>
                                 <p>{profile.about}</p>

                             </Grid.Column>
                             <Grid.Column width={6}>

                                 <Header icon='heart outline' content='Interests'/>
                                 <List>
                                     <Item>
                                         <Icon name='heart'/>
                                         <Item.Content>Interest 1</Item.Content>
                                     </Item>
                                     <Item>
                                         <Icon name='heart'/>
                                         <Item.Content>Interest 2</Item.Content>
                                     </Item>
                                     <Item>
                                         <Icon name='heart'/>
                                         <Item.Content>Interest 3</Item.Content>
                                     </Item>
                                 </List>
                             </Grid.Column>
                         </Grid>

                     </Segment>
                     </Grid.Column> 

);
};

export default UserInfo;