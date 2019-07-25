import React, { Component } from 'react'
import { Button, Form, Segment, Grid, Header, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { createEvent, updateEvent } from '../EventList/eventActions'
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import cuid from 'cuid'
import TextInput from '../../common/form/TextInput'
import TextArea from '../../common/form/TextArea'
import RadioInput from '../../common/form/RadioInput'
import SelectInput from '../../common/form/SelectInput'
import { openModal } from "../../modals/ModalActions"



const mapState = (state, ownProps) => {
    const eventID = ownProps.match.params.id;
    let event = {};

    if (eventID && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventID)[0]

    }
    return {
        initialValues: event
    }
}
const actions = {

    createEvent,
    updateEvent,
    openModal
}

const category = [
    { key: 'trade', text: 'Trade', value: 'trade' },
    { key: 'scholarly', text: 'Scholarly', value: 'scholarly' }
    // {key: 'film', text: 'Film', value: 'film'},
    // {key: 'food', text: 'Food', value: 'food'},
    // {key: 'music', text: 'Music', value: 'music'},
    // {key: 'travel', text: 'Travel', value: 'travel'},
];

const validate = combineValidators({
    title: isRequired({ message: 'The field is required' }),
    category: isRequired({ message: 'This field is required' }),
    description: composeValidators(
        isRequired({ message: 'Field is required' }),
        hasLengthGreaterThan(4)({ message: 'description needs to be at least 5 characters' })
    )(),
    city: isRequired('city'),
    venue: isRequired('venue')
})


class EventForm extends Component {
    state = {
        event: Object.assign({}, this.props.event),
        isTrade: ''
    }

    componentDidMount() {
        this.props.openModal('LoginModal')
    }
    handleTrade= (value)=>{
        this.setState({isTrade: null})
    }
    handleScholar= (value)=>{
        this.setState({isTrade: "somevalue"})
    }

    handleSubmit = (values) => {

        if (this.props.initialValues.id) {
            this.props.updateEvent(values);
            this.props.history.goBack();
        } else {
            const newEvent = {
                ...values,
                id: cuid(),
                hostPhotoURL: '/assets/user.png'
            }
            this.props.createEvent(newEvent)
            this.props.history.push('/events')

        }

    };



    render() {
        const { invalid, submitting, pristine } = this.props;

        return (
            <Grid>
                {/* {this.state.isTrade !== null ? (
           <h1>Trade Author</h1>
        ):  */}

                <Grid.Column width={10}>
                    <h1>Author Questionnaire</h1>
                    <p>Many thanks for taking the time to complete this form thoughtfully. The information you provide here is an essential part of our success in marketing your book and helping potential readers discover it. If you prefer to supply your responses  in an electronic MS Word file, please contact your acquisitions editor.</p>
                    <Segment>
                        <Header color='black' content='Trade or Scholarly?' />
                        <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                        <Form.Group inline>
                    <Field
                    name='choices'
                    type='radio'
                    value='trade'
                    label='trade'
                    component = {RadioInput}
                    onChange ={()=>this.handleTrade()}
                    />
                     <Field
                    name='choices'
                    type='radio'
                    value="scholarly"
                    label='scholarly'
                    component = {RadioInput}
                    onChange ={()=>this.handleScholar()}

                    />
                      {/* todo: Gender Radio button */}
                    </Form.Group>
                            <Header color='black' content='Name as you would like it to appear on the title page' />
                            
                            {this.state.isTrade !== null? (
                            <Field name='fullAuthor'
                             type='text' 
                             component={TextInput} 
                             placeholder='Name as you would like it to appear on the title page' 
                             disabled={this.state.isTrade}
                             />
                            ):<h1>Will it work</h1>}
                            <Header  color='black' content='Legal Name' />
                             <Form.Group inline>
                             <Field name='lastName'
                             type='text' 
                             component={TextInput} 
                             placeholder='Last Name' disabled="" 
                             />
                             <Field name='firstName'
                             type='text' 
                             component={TextInput} 
                             placeholder='First Name' disabled="" 
                             />
                             </Form.Group>

                            <Header  color='black' content='Email address' />
                            <Field name='email' 
                            type='text' component={TextInput} 
                            placeholder='Email Address' disabled=""
                             />

                            <Header  color='black' content='Pronouns' />
                            <Field name='pronouns' 
                            type='text' component={TextInput} 
                            placeholder='Pronouns' disabled=""
                             />
                             <Header  color='black' content='What country or countries are you a citizen of?' />
                             <p> This information is required for some awards nominations.</p>
                            <Field name='What country or countries are you a citizen of?' 
                            type='text' component={TextInput} 
                            placeholder='What country or countries are you a citizen of?' disabled={category==="trade"}
                             />
                            <Field name='titleofBook' type='text' component={TextArea} placeholder='Working Title and Subtitle of the Book' disabled="" />

                            <Field name='titleofBook' type='text' component={TextArea} placeholder='Working Title and Subtitle of the Book' disabled="" />
                            <Field name='description' type='text' rows={12} component={TextArea} placeholder='Event description' />

                            <Header sub color='black' content='location information' />

                            <Field name='city' type='text' component={TextInput} placeholder='Event city' />
                            <Field name='venue' type='text' component={TextInput} placeholder='Event venue' />
                            <Field name='date' type='text' component={TextInput} placeholder='Event date' />
                            <Button disabled={invalid || submitting || pristine} positive type="submit">
                                Submit
                     </Button>
                            <Button
                                onClick={this.props.history.goBack}
                                type="button">Cancel</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
                {/* } */}
            </Grid>


        )

    }


}

export default connect(mapState, actions)(reduxForm({ form: 'eventForm}', enableReinitialize: true, validate })(EventForm))