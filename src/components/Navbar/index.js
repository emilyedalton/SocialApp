import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Container, Menu} from 'semantic-ui-react'
import SignIn from '../SignIn/'
import SignOut from '../SignOut/'
import {NavLink, Link, withRouter} from 'react-router-dom'
import './style.css'
import {openModal} from "../../modals/ModalActions"

const actions ={ 
    openModal
}

class Navbar extends Component {
    state={ 
        authenticated : false
    }
    handleSignIn = ()=>{
        this.props.openModal('LoginModal')

    }
    handleRegister = ()=>{
        this.props.openModal('RegisterModal')

    }

    handleSignOut =()=>{
        this.setState({
            authenticated: false
        })
this.props.history.push('/')
    }
    render () {
        const {authenticated} = this.state
    return(
             <Menu inverted fixed="top" style={{
                background: "#4E2A84",

             }}>
               <Container>
                 <Menu.Item header>
                 </Menu.Item>
                 <Menu.Item  as={NavLink} to='/' name="Home"/>
                 {authenticated &&
                 <Menu.Item  as={NavLink} to='/people' name="People"/>
                }
                 <Menu.Item>
                 {authenticated &&
                   <Button as={Link} to='/createEvent' floated="right"  inverted content="Create" />
                 }
                 </Menu.Item>
    {authenticated ?(<SignIn signOut={this.handleSignOut}/> 
                 ):(
                 <SignOut signIn={this.handleSignIn} register ={this.handleRegister}/> 
                 
                 )}
               </Container>
             </Menu>
    )
    
    
    }
}
    export default withRouter(connect( null, actions)(Navbar));