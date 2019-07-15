import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Button, Container, Menu} from 'semantic-ui-react'
import SignIn from '../SignIn/'
import SignOut from '../SignOut/'
import {NavLink, Link, withRouter} from 'react-router-dom'
import './style.css'
import {openModal} from "../../modals/ModalActions"
import {logout} from '../../common/auth/authActions'

const actions ={ 
    openModal, 
    logout
}
const mapState = (state)=>({
    auth:state.auth
})

class Navbar extends Component {
   
    handleSignIn = ()=>{
        this.props.openModal('LoginModal')

    }
    handleRegister = ()=>{
        this.props.openModal('RegisterModal')

    }

    handleSignOut =()=>{
       this.props.logout()
this.props.history.push('/')
    }
    render () {
        const {auth} = this.props
        const authenticated = auth.authenticated
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

{authenticated &&
  <Button 
  as={NavLink} 
  to='/people' 
  floated="right"  
  inverted content="People" />
}
</Menu.Item>
    {authenticated ?(<SignIn currentUser={auth.currentUser} signOut={this.handleSignOut}/> 
                 ):(
                 <SignOut signIn={this.handleSignIn} register ={this.handleRegister}/> 
                 
                 )}
               </Container>
             </Menu>
    )
    
    
    }
}
    export default withRouter(connect(mapState, actions)(Navbar));