import React from 'react'
import {Button, Menu }from 'semantic-ui-react'

const SignOut = ({signIn, register}) =>{
return (

    <div>
<Menu.Item position="right">
                   <Button onClick={signIn} basic inverted content="Login" />
                   <Button onClick={register} basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                 </Menu.Item>   
                  </div>
)

}
export default SignOut