import React from 'react'
import {Form, Label} from 'semantic-ui-react'

const TextInput = ({input, width, type, disabled,placeholder,meta: {touched, error}})=>{
return (
<div>
<Form.Field error={touched && !!error} width={width}>
<input {...input} placeholder ={placeholder} type={type} disabled={disabled}/>
{touched && error && <Label basic color='red'>{error}</Label>}
</Form.Field>
</div>

)
}

export default TextInput