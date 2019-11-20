import React from 'react';
import {connect} from 'react-redux'
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {combineValidators, isRequired} from 'revalidate'
import {registerUser} from '../../common/auth/authActions'
import TextInput from '../../common/form/TextInput';

const actions = {
  registerUser
}
const validate = combineValidators({
displayName: isRequired('display name'),
email: isRequired('email'),
password: isRequired('passowrd')

})

const RegisterForm = ({handleSubmit, registerUser,error, invalid, submitting }) => {
  return (
    <div>
      <Form size="large" onSubmit={handleSubmit(registerUser)} autoComplete="off">
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
            style={{marginTop:"10px"}}
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
            style={{marginTop:"10px"}}
          />
          {error && <Label basic color ='red'>{error}</Label>}
          <Button disabled={invalid || submitting} fluid size="large" color="black"style={{marginTop:"10px"}}>
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default connect(null, actions)(reduxForm({form:'registerForm', validate})(RegisterForm));