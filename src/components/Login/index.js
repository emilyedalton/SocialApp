import React from 'react';
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../common/form/TextInput';
import {login, resetPassword} from '../../common/auth/authActions'

const actions = {
    login, 
    resetPassword
}

const LoginForm = ({login,error, resetPassword, handleSubmit}) => {
  return (
    <Form  size="large" onSubmit={(handleSubmit(login))}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && <Label basic color='red'>{error}</Label>}
        <Button fluid size="large" color="teal">
          Login
        </Button>
       
      </Segment>
      <Segment>
      <Form size="large" onSubmit={(handleSubmit(resetPassword))}>
      <Button fluid size="large" color="teal">
          Forgot Password?
        </Button>
       </Form>
      </Segment>
      {/* <a href onSubmit={handleSubmit(resetPassword)}> </a> */}
      {/* <Form  size="large" onSubmit={handleSubmit(resetPassword)}>
      <Segment>
      <Button fluid size="large" color="teal">
          Forgot? 
        </Button>
      </Segment>
      </Form> */}
    
    </Form>
  );
};

export default connect(null, actions)(reduxForm({form: 'loginForm'}) (LoginForm));