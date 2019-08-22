import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class PeopleListItem extends Component {
    render () {
        const {event} = this.props
    return(
        <Card>
          <Card.Content>
           <Link to={`/user/${event.hostUid}`} style={{color: 'black'}}>

                         <h4>{event.lastName}, {event.firstName}</h4>  </Link> 
                         </Card.Content>
     </Card>
    )
    
    }
    
    
    }
    export default PeopleListItem 