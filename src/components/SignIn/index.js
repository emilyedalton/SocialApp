import React from 'react'
import {Dropdown, Menu, Image }from 'semantic-ui-react'
import { NavLink, Link} from 'react-router-dom'

const SignIn = ({signOut, profile, auth}) =>{
return (

       <Menu.Item position="right">
       <Image avatar spaced="right" src={profile.photoURL || "/assets/user.png"}/>
         <Dropdown pointing="top left" text={profile.displayName}>
           <Dropdown.Menu>
             <Dropdown.Item text="Create Title" as ={Link} to={"/createEvent"}icon="plus" />
             <Dropdown.Item text="My Titles" as={Link}  to={`/mytitles/${auth.uid}`} icon="book" />
             <Dropdown.Item text="Photos" as={Link} to={`/settings/photos`} icon="camera" />
             {/* <Dropdown.Item text="My Network" icon="users" /> */}
             {/* <Dropdown.Item as={Link} to={`profile/${auth.uid}`}text="My Profile" icon="user" /> */}
             <Dropdown.Item text="Settings" as={Link} to={`/settings/account`} icon="settings" />

             <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
           </Dropdown.Menu>
         </Dropdown>
       </Menu.Item>
)

}
export default SignIn