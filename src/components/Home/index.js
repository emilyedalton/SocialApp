import React from 'react'

import {Button} from 'semantic-ui-react'

const Home =({history})=> {
    return(
        <div>
         <h1>Home</h1>  
         <Button onClick={()=>history.push('/events')}basic content="Go Somewhere" />
         </div>
    )
    
    }

    
    
    export default Home 