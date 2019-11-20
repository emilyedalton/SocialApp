import React from 'react'
import {Button, Menu }from 'semantic-ui-react'

const SignOut = ({signIn, register, reset}) =>{
return (

    <div>
<Menu.Item position="right">
                   <Button onClick={signIn} basic inverted content="Login" />
                   <Button onClick={register} basic inverted content="Register" style={{marginLeft: '0.5em'}} />
                   <Button onClick={reset} basic inverted content="Forgot Password?" style={{marginLeft: '0.5em'}} />

                 </Menu.Item>   
                  </div>
)

}
export default SignOut