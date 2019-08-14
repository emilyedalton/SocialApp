import React, {Fragment} from 'react'
import {Button, Card, Header, Image, Segment, Label} from 'semantic-ui-react'
import LazyLoad from 'react-lazyload'


const UserPhotos = ({photos, profile, deletePhoto, setMainPhoto, eventsLoading}) =>{
  let filteredPhotos;
  if (photos) {
      filteredPhotos=photos.filter(photo => {

        return photo.url !== profile.photoURL
      })
  }
    return(
        <Fragment>
        <Segment loading={eventsLoading}>
        <Header sub color='teal' content='All Photos'/>

        <Card.Group itemsPerRow={5}>
            <Card>
                <Image src={profile.photoURL || '/assets/user.png'}/>
                <Label color="black">Display Photo</Label>
            </Card>
            {photos && filteredPhotos.map(photo => (

<Card key ={photo.id}>
<LazyLoad key={photo.id}>
                    <Image
                          src={photo.url}
                    />
                    </LazyLoad>
                    <div className='ui two buttons'>
                        <Button onClick={()=> setMainPhoto(photo)} basic color='black'>Main</Button>
                        <Button onClick={() => deletePhoto(photo)} basic icon='trash' color='black' />
                    </div>
                </Card>

            ))}
                
        </Card.Group>
    </Segment>
    </Fragment>
    )
}

export default UserPhotos