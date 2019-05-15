import React, {Component} from 'react'
import {Button, Container, Menu} from 'semantic-ui-react'
import './style.css'


class Navbar extends Component {
    render () {
    return(
             <Menu inverted fixed="top" className='ui violet'>
               <Container>
                 <Menu.Item header>
                 </Menu.Item>
                 <Menu.Item name="Form" />
                 <Menu.Item>
                   <Button floated="right"  inverted content="Create" />
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