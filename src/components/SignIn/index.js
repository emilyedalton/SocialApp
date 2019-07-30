import React from 'react'
import {Dropdown, Menu, Image }from 'semantic-ui-react'
import { NavLink, Link} from 'react-router-dom'

const SignIn = ({signOut, profile, auth}) =>{
return (

       <Menu.Item position="right">
       <Image avatar spaced="right" src={profile.photoURL || "/assets/user.png"}/>
         <Dropdown pointing="top left" text={profile.displayName}>
           <Dropdown.Menu>
             <Dropdown.Item text="Create Title" icon="plus" />
             <Dropdown.Item text="My Titles" icon="book" />
             <Dropdown.Item text="My Network" icon="users" />
             {/* <Dropdown.Item as={Link} exact to={`profile/${auth.uid}`}text="My Profile" icon="user" /> */}
             <Dropdown.Item text="Settings" as={Link} to={`/settings`} icon="settings" />
             {/* <Dropdown.Item text="Photos" as={Link} to={`/settings/photos`} icon="camera" /> */}

             <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
           </Dropdown.Menu>
         </Dropdown>
       </Menu.Item>
)

}
export default SignIn