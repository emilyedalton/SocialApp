import React, {Component} from 'react'
import {List, Image} from 'semantic-ui-react'


class EventAttendee extends Component {
    render () {
        const {attendee} = this.props
    return(
<List.Item>
    <Image as= 'a'size ='mini'circluar src={attendee.photoUrl}
    />
</List.Item>
    )
    
    }
    
    
    }
    export default EventAttendee 