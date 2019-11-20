import React from 'react';
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../common/form/TextInput';
import { resetPassword} from '../../common/auth/authActions'

const actions = {
    
    resetPassword
}

const ResetForm = ({error, resetPassword, handleSubmit}) => {
  return (
    <Form  size="large" onSubmit={(handleSubmit(resetPassword))}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        {error && <Label basic color='red'>{error}</Label>}
        <Button fluid size="large" color="black" style={{marginTop:"10px"}}>
          Reset Password
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(null, actions)(reduxForm({form: 'resetForm'}) (ResetForm));