import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withFirebase} from 'react-redux-firebase'
import {Button, Container, Menu} from 'semantic-ui-react'
import SignIn from '../SignIn/'
import SignOut from '../SignOut/'
import {NavLink, Link, withRouter} from 'react-router-dom'
import './style.css'
import {openModal} from "../../modals/ModalActions"
// import {logout} from '../../common/auth/authActions'

const actions ={ 
    openModal, 
    
}
const mapState = (state)=>({
    auth:state.firebase.auth, 
    profile: state.firebase.profile
})

class Navbar extends Component {
   
    handleSignIn = ()=>{
        this.props.openModal('LoginModal')

    }
    handleRegister = ()=>{
        this.props.openModal('RegisterModal')

    }

    handleSignOut =()=>{
       this.props.firebase.logout()
this.props.history.push('/')
    }
    render () {
        const {auth, profile} = this.props
        const isAdmin = profile.choices
        const authenticated = auth.isLoaded && !auth.isEmpty;
    return(
             <Menu inverted fixed="top" style={{
                background: "#4E2A84",

             }}>
               <Container>
                 <Menu.Item header>
                 </Menu.Item>
                 <Menu.Item  as={NavLink} to='/' name="Home"/>
                 {authenticated &&(
                     <Fragment>

                 <Menu.Item  
                 as={NavLink} 
                 to='/people' 
                 name="People"/>
                 </Fragment>
                     )}
                 <Menu.Item>

                 {authenticated &&
                   <Button 
                   as={Link} 
                   to='/createEvent' 
                   floated="right"  
                   inverted content="Create" />
                 }
                 </Menu.Item>
                 <Menu.Item>
{/* This is basically how to protect routes, do not change yet

if user is authenticated and isAdmin === "a" show this button. 

I assigned this value to isAdmin below the render. Its  from choices in firebase  */}
{authenticated && isAdmin ==="a" &&
  <Button 
  as={NavLink} 
  to='/people' 
  floated="right"  
  inverted content="People" />
}
</Menu.Item>
    {authenticated ?(<SignIn profile={profile} signOut={this.handleSignOut}/> 
                 ):(
                 <SignOut signIn={this.handleSignIn} register ={this.handleRegister}/> 
                 
                 )}
               </Container>
             </Menu>
    )
    
    
    }
}
    export default withRouter(withFirebase(connect(mapState, actions)(Navbar)));