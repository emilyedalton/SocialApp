import React from 'react';
import { Segment, Header, Item, Grid } from 'semantic-ui-react';

const UserHeader = ({profile, photos}) => {
    return (
<Grid>
                <Grid.Column width={16}>
                    <Segment>
                        <Item.Group>
                            <Item>
                                <Item.Image avatar size='tiny' src={profile.photoURL || '/assets/user.png'}/>
                                <Item.Content>
                                    <Header as='h1'>{profile.displayName}</Header>
                                  
                                </Item.Content>
                            </Item>
                        </Item.Group>

                    </Segment>
                </Grid.Column>
                </Grid>

    );
};

export default UserHeader;