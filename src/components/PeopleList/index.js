import React, {Component} from 'react'
import PeopleListItem from '../PeopleListItem'
import {Button, Grid, Card} from 'semantic-ui-react'
import LazyLoad, { lazyload } from 'react-lazyload'

class PeopleList extends Component {

    render () {
        const {events, onEventOpen, auth} = this.props;
    return(
<div>
{events&&events.map((event)=>(
    
    <Card>
        
    <LazyLoad key={event.id}>

<PeopleListItem
auth={auth}
event ={event}
onEventOpen ={onEventOpen}
/>
</LazyLoad>
</Card>

))}

</div>
            
    )
    
    }
    
    
    }
    export default PeopleList 