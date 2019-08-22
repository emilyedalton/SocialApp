import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import {sortByAuthor, getAllEvents} from '../EventList/eventActions'
import PeopleList from '../PeopleList'
import LoadingComponent from '../Loader'

const mapState =(state) => ({
    events: state.events,
    loading: state.async.loading,
    auth:state.firebase.auth, 


})

const actions = {
    sortByAuthor, 
    getAllEvents
    
}


class PeopleDashboard extends Component{
    async componentDidMount (){
        let all= await this.props.getAllEvents()
        console.log(all)
        let sorted= await this.props.sortByAuthor()
    console.log(sorted)
    }

render(){
    const {events, loading, auth} =this.props; 
    if (loading) return <LoadingComponent/>

return(
<div>
<h1>Authors</h1>

 <Grid stackable columns={1}>
<Grid.Row />
<PeopleList
auth ={auth}
events={events}
deleteEvent ={this.handleDeleteEvent}
getEventsForDashboard={this.getEventsForDashboard}
/>
</Grid>

</div>
)

    }

}

export default connect(
    mapState, 
    actions
)(firestoreConnect([{collection: 'events'}])(PeopleDashboard));