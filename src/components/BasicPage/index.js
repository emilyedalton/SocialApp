import React, {Component} from 'react';
import {Segment, Form, Header, Divider, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import RadioInput from '../../common/form/RadioInput'
// import DateInput from "../../../app/common/form/DateInput";
// import PlaceInput from "../../../app/common/form/PlaceInput";
import TextInput from "../../common/form/TextInput.js";

class BasicPage extends Component {

    render() {
        const {pristine, submitting} = this.props;
        return (
            <Segment>
                <Header dividing size='large' content='Basics' />
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
                    value='a or b?'
                    label='a or b?'
                    component = {RadioInput}
                    />
                      {/* todo: Gender Radio button */}
                    </Form.Group>
                    <Field
                        width={8}
                        name='dateOfBirth'
                        component={TextInput}
                        placeholder='Date of Birth'
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

export default reduxForm({form: 'userProfile', enableReinitialize: true})(BasicPage);