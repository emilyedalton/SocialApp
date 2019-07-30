import React, {Component} from 'react';
import {Segment, Form, Header, Divider, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import RadioInput from '../../common/form/RadioInput'
import DateInput from '../../common/form/DateInput'
import {addYears} from 'date-fns'
import TextInput from '../../common/form/TextInput.js'

class BasicPage extends Component {

    render() {
        const {pristine, submitting, handleSubmit, updateProfile} = this.props;
        return (
            <Segment>
                <Header dividing size='large' content='Basics'/>
                <Form onSubmit={handleSubmit(updateProfile)}>
                    <Field
                        width={8}
                        name='displayName'
                        type='text'
                        component={TextInput}
                        placeholder='Known As'
                    />
                    <Form.Group inline>
                    <h2>Are you an admin?</h2>
                    <Field
                    name='admin'
                    type='radio'
                    value='yes'
                    label='yes'
                    component = {RadioInput}
                    />
                   
                    </Form.Group>
                    <Field
                        width={8}
                        name='dateOfBirth'
                        component={DateInput}
                        placeholder='Date of Birth'
                        dateFormat ='dd LLL yyyy'
                        showYearDrowdown={true}
                        showMonthDrowpdown={true}
                        drowpdownMode='select'
                        maxDate={addYears(new Date(), 18)}
                    />
                    <Field
                        name='city'
                        placeholder='Home Town'
                        options={{types: ['(cities)']}}
                        label='Female'
                        component={TextInput}
                        width={8}
                    />
                    <Divider/>
                    <Button disabled={pristine || submitting} size='large' positive content='Update Profile'/>
                </Form>
            </Segment>
        );
    }
}

export default reduxForm({form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false})(BasicPage);