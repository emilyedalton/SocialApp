import React, {Component} from 'react'
import {Button, Container, Menu} from 'semantic-ui-react'
import './style.css'


class Navbar extends Component {
    render () {
    return(
             <Menu inverted fixed="top">
               <Container>
                 <Menu.Item header>
                   Re-vents
                 </Menu.Item>
                 <Menu.Item name="Events" />
                 <Menu.Item>
                   <Button floated="right" positive inverted content="Create Event" />
                 </Menu.Item>
                 <Menu.Item position="right">
                   <Button basic inverted content="Login" />
                   <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                 </Menu.Item>
               </Container>
             </Menu>
    )
    
    }
    
    
    }
    export default Navbar 