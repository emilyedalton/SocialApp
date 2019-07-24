import React from 'react'
import {Button, Card, Header, Grid, Image, Segment} from 'semantic-ui-react'


const DetailPhotos = ({photos}) =>{

    return(
        
<Grid>
    <Grid.Column width={12}>
        <Image.Group size="small">
           
            {photos && photos.map(photo => 


                    <Image
                       key={photo.id} src={photo.url}/>
                 

)}                       </Image.Group>

                
        </Grid.Column>
        </Grid>
    )
}

export default DetailPhotos