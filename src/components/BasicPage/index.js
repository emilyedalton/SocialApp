import React, {Component} from 'react';
import {Segment, Form, Header, Divider, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import RadioInput from '../../common/form/RadioInput'
import DateInput from '../../common/form/DateInput'
import {addYears} from 'date-fns'
import TextInput from '../../common/form/TextInput.js'

class BasicPage extends Component {

    render() {
        const {pristine, submitting } = this.props;
        return (
            <Segment>
                <Header dividing size='large' content='Basics'/>
                <Form>
                    <Field
                        width={8}
                        name='displayName'
                        type='text'
                        component={TextInput}
                        placeholder='Known As'
                    />
                    <Form.Group inline>
                    <Field
                    name='choices'
                    type='radio'
                    value='a'
                    label='a'
                    component = {RadioInput}
                    />
                     <Field
                    name='choices'
                    type='radio'
                    value='b'
                    label='b'
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