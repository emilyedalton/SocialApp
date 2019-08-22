import React from 'react'
import {Header, Grid, Image} from 'semantic-ui-react'


const DetailPhotos = ({photos}) =>{

    return(

<Grid>

    <Grid.Column width={12}>
    <Header content="Author Photo(s)"/>    

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