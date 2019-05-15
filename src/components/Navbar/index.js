import React, {Component} from 'react'
import {Button, Container, Menu} from 'semantic-ui-react'
import SignIn from '../SignIn/'
import SignOut from '../SignOut/'
import {NavLink, Link} from 'react-router-dom'
import './style.css'


class Navbar extends Component {
    state={ 
        authenticated : true
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

    }
    render () {
        const {authenticated} = this.state
    return(
             <Menu inverted fixed="top" className='ui violet'>
               <Container>
                 <Menu.Item header>
                 </Menu.Item>
                 <Menu.Item  as={NavLink} to='/' name="Home"/>
                 <Menu.Item  as={NavLink} to='/people' name="People"/>

                 <Menu.Item>
                   <Button as={Link} to='createEvent' floated="right"  inverted content="Create" />
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
    export default Navbar 