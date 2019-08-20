import React, {Component} from 'react'
import PeopleListItem from '../PeopleListItem'
import {Button, Grid, Card} from 'semantic-ui-react'
import LazyLoad, { lazyload } from 'react-lazyload'

class PeopleList extends Component {

    render () {
        const {events, onEventOpen, auth} = this.props;
    return(
<div>
<Grid colums={3}>

{events&&events.map((event)=>(


<LazyLoad key={event.id}>
<Grid.Column width={5}>

<PeopleListItem
auth={auth}
event ={event}
onEventOpen ={onEventOpen}
/>
</Grid.Column>

</LazyLoad>

))}
  </Grid>


</div>
            
    )
    
    }
    
    
    }
    export default PeopleList 