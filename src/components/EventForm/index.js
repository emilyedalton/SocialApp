import React, {Component} from 'react'
import {Button, Form, Segment, Grid, Header} from 'semantic-ui-react'
import { connect } from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import { createEvent, updateEvent} from '../EventList/eventActions'
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate'
import cuid from 'cuid'
import TextInput from '../../common/form/TextInput'
import TextArea from '../../common/form/TextArea'
import SelectInput from '../../common/form/SelectInput'
import {openModal} from "../../modals/ModalActions"



const mapState =(state, ownProps) => {
    const eventID = ownProps.match.params.id;
    let event ={};

    if (eventID && state.events.length >0){
        event = state.events.filter(event => event.id === eventID)[0]

    }
    return{
        initialValues: event
    }
}
const actions = {

    createEvent, 
    updateEvent,
    openModal
}

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

const validate= combineValidators({
    title: isRequired({message: 'The field is required'}),
    category: isRequired({message: 'This field is required'}),
    description: composeValidators(
        isRequired({message: 'Field is required'}),
        hasLengthGreaterThan(4)({message: 'description needs to be at least 5 characters'})
    )(),
    city: isRequired('city'),
    venue: isRequired('venue')
})


class EventForm extends Component {
    state ={
        event: Object.assign({}, this.props.event),
        isTrade: null
    }
    componentDidMount(){
        this.props.openModal('LoginModal')
    }

    handleSubmit = (values)=>{
   
    if (this.props.initialValues.id){
        this.props.updateEvent(values);
        this.props.history.goBack();
        }else{
const newEvent={
    ...values,
    id:cuid(),
    hostPhotoURL: '/assets/user.png'
}
    this.props.createEvent(newEvent)
    this.props.history.push('/events')

        }

    };



    render () {
        const {invalid, submitting, pristine}=this.props;
  
    return(
        <Grid>
        {this.state.isTrade !== null ? (
           <h1>Trade Author</h1>
        ): 
        
        <Grid.Column width={10}>
        <Segment>
            <Header sub color ='black' content='details'/>
                   <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                     <Field name ='title' type='text' component={TextInput} placeholder='Event Title'/>
                     <Field name ='category' type='text' options={category} multiple={true}component={SelectInput} placeholder='Event category'/>
                     <Field name ='description' type='text' rows={12} component={TextArea} placeholder='Event description'/>
                    
                     <Header sub color ='black' content='location information'/>

                     <Field name ='city' type='text' component={TextInput} placeholder='Event city'/>
                     <Field name ='venue' type='text' component={TextInput} placeholder='Event venue'/>
                     <Field name ='date' type='text' component={TextInput} placeholder='Event date'/>
                     <Button disabled ={invalid || submitting || pristine} positive type="submit">
                       Submit
                     </Button>
                     <Button 
                     onClick={this.props.history.goBack}
                     type="button">Cancel</Button>
                   </Form>
                 </Segment>  
                 </Grid.Column>
        }
        </Grid>
                  
    
    )
    
    }
    
    
    }

    export default connect(mapState, actions)(reduxForm({form:'eventForm}', enableReinitialize: true, validate})(EventForm))