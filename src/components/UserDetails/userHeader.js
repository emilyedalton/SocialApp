import React from 'react';
import { Segment, Header, Form, Divider, Label, Button, Item, Grid } from 'semantic-ui-react';

const UserHeader = ({profile, photos}) => {
    return (
<Grid>
                <Grid.Column width={16}>
                    <Segment>
                        <Item.Group>
                            <Item>
                                <Item.Image avatar size='small' src={profile.photoURL}/>
                                <Item.Content verticalAlign='bottom'>
                                    <Header as='h1'>{profile.displayName}</Header>
                                    <br/>
                                    <Header as='h3'>{profile.occupation}</Header>
                                    <br/>
                                    <Header as='h3'>27, Lives in {profile.city}</Header>
                                </Item.Content>
                            </Item>
                        </Item.Group>

                    </Segment>
                </Grid.Column>
                </Grid>

    );
};

export default UserHeader;