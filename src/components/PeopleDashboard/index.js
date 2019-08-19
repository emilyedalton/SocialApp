import React, {Component} from 'react';
import {Grid,Card} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import {sortByAuthor, getAllEvents} from '../EventList/eventActions'
import PeopleList from '../PeopleList'

const mapState =(state) => ({
    events: state.events,
    loading: state.async.loading,
    auth:state.firebase.auth, 

    // loadedEvents: []

})

const actions = {
    sortByAuthor, 
    getAllEvents
    
}


// sortByAuthor = async()=>{
      
//     let next= await this.props.sortByAuthor()
//     console.log(next)
// }


class PeopleDashboard extends Component{
    async componentDidMount (){
        let all= await this.props.getAllEvents()
        console.log(all)}

render(){
    const {events, loading, profile, auth} =this.props; 
     

return(
<div>
<h1>People List</h1>


  <Card.Group itemsPerRow={3} style={{border:'2px solid red'}}>
<PeopleList
auth ={auth}
events={events}
deleteEvent ={this.handleDeleteEvent}
getEventsForDashboard={this.getEventsForDashboard}
/>
{/* <EventByAuthor
next={next}/> */}
{/* </Grid.Column>
<Grid.Column width ={6}>
<h2>Activity Feed</h2>
<EventActivity/> */}
</Card.Group>


</div>
)

    }

}

export default connect(
    mapState, 
    actions
)(firestoreConnect([{collection: 'events'}])(PeopleDashboard));