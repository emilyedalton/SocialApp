import React, {Component} from 'react'
import {Button, Container, Menu} from 'semantic-ui-react'
import SignIn from '../SignIn/'
import SignOut from '../SignOut/'
import {NavLink, Link, withRouter} from 'react-router-dom'
import './style.css'


class Navbar extends Component {
    state={ 
        authenticated : false
    }
    handleSignIn = ()=>{
        this.setState({
            authenticated: true
        })

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
                   <Button as={Link} to='createEvent' floated="right"  inverted content="Create" />
                 }
                 </Menu.Item>
    {authenticated ?(<SignIn signOut={this.handleSignOut}/> 
                 ):(
                 <SignOut signIn={this.handleSignIn}/> 
                 
                 )}
               </Container>
             </Menu>
    )
    
    
    }
}
    export default withRouter(Navbar);