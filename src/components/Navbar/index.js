import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withFirebase} from 'react-redux-firebase'
import {Button, Container, Menu} from 'semantic-ui-react'
import SignIn from '../SignIn/'
import SignOut from '../SignOut/'
import {NavLink, Link, withRouter} from 'react-router-dom'
import './style.css'
import {openModal} from "../../modals/ModalActions"

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
        const isAdmin = profile.admin
        const authenticated = auth.isLoaded && !auth.isEmpty;
    return(
             <Menu inverted fixed="top" style={{
                background: "#4E2A84",

             }}>
             
               <Container>
                 <Menu.Item header>
                 </Menu.Item>
                 {authenticated &&
                 <Menu.Item
                  as={NavLink} 
                  to={`/user/${auth.uid}`}
                  name="My Profile"/>}
                 <Menu.Item  as={NavLink} exact to='/' name="Home"/>
                 {authenticated && isAdmin==="yes"&&(
                     <Fragment>

                 <Menu.Item  
                 as={NavLink} 
                 to='/people' 
                 name="People"/>

                 <Menu.Item
                  as={NavLink} 
                  exact to='/titles' 
                  name="Titles"/>

                 
                 </Fragment>
                 
                     )}
                 <Menu.Item>

                 {authenticated &&
                   <Button 
                   as={Link} 
                   exact to='/createEvent' 
                   floated="right"  
                   inverted content="Create" />
                 }
                 </Menu.Item>

    {authenticated ?(<SignIn auth={auth}profile={profile} signOut={this.handleSignOut}/> 
                 ):(
                 <SignOut signIn={this.handleSignIn} register ={this.handleRegister}/> 
                 
                 )}
               </Container>
             </Menu>
    )
    
    
    }
}
    export default withRouter(withFirebase(connect(mapState, actions)(Navbar)));