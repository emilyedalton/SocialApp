import React from 'react'

import {Button, Container, Header, Grid} from 'semantic-ui-react'
import  './style.css'

const Home =({history})=> {
    return(
        <div>
       <Grid centered columns={1} style={{height: "100vh"}}  >
  
        <Container 
        style = {{margin: "auto"}}
        >

         <Header as='h1' content="Northwestern University Press | Author Portal" 
         style={{
             color: "#4E2A84"
         
         }}
         />  
         <Button onClick={()=>history.push('/welcome')}
         basic content="Get Started"/>
         
         
         </Container>
         </Grid>

         </div>
    )
    
    }

    
    
    export default Home 