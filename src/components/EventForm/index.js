import React, {Component} from 'react'
import {Button, Form, Segment, Grid, Header} from 'semantic-ui-react'
import { connect } from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import { createEvent, updateEvent} from '../EventList/eventActions'
import cuid from 'cuid'
import TextInput from '../../common/form/TextInput'
import TextArea from '../../common/form/TextArea'
import SelectInput from '../../common/form/SelectInput'



const mapState =(state, ownProps) => {
    const eventID = ownProps.match.params.id;
    let event ={};

    if (eventID && state.events.length >0){
        event = state.events.filter(event => event.id === eventID)[0]

    }
    return{
        event
    }
}
const actions = {

    createEvent, 
    updateEvent
}

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];
class EventForm extends Component {
    state ={
        event: Object.assign({}, this.props.event)
        
    }
   

    handleSubmit = (e)=>{
    e.preventDefault()
    if (this.state.event.id){
        this.props.updateEvent(this.state.event);
        this.props.history.goBack();
        }else{
const newEvent={
    ...this.state.event,
    id:cuid(),
    hostPhotoURL: '/assets/user.png'
}
    this.props.createEvent(newEvent)
    this.props.history.push('/events')

        }

    };



    render () {
        
    return(
        <Grid>
        <Grid.Column width={10}>
        <Segment>
            <Header sub color ='black' content='details'/>
                   <Form onSubmit={this.handleSubmit}>
                     <Field name ='title' type='text' component={TextInput} placeholder='Event Title'/>
                     <Field name ='category' type='text' options={category} multiple={true}component={SelectInput} placeholder='Event category'/>
                     <Field name ='description' type='text' rows={12} component={TextArea} placeholder='Event description'/>
                    
                     <Header sub color ='black' content='location information'/>

                     <Field name ='city' type='text' component={TextInput} placeholder='Event city'/>
                     <Field name ='venue' type='text' component={TextInput} placeholder='Event venue'/>
                     <Field name ='date' type='text' component={TextInput} placeholder='Event date'/>
                     <Button positive type="submit">
                       Submit
                     </Button>
                     <Button 
                     onClick={this.props.history.goBack}
                     type="button">Cancel</Button>
                   </Form>
                 </Segment>  
                 </Grid.Column>
        </Grid>
                  

    )
    
    }
    
    
    }

    export default connect(mapState, actions)(reduxForm({form:'eventForm}'})(EventForm))