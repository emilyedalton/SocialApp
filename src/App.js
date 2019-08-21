import React, {Component} from 'react';
import EventDashboard from './components/EventDashboard'
import EventForm from './components/EventForm'
import PeopleDashboard from './components/PeopleDashboard'
import SettingsDashboard from './components/SettingsDashboard/'
import Home from './components/Home/'
import Welcome from './components/Welcome'
import Test from './components/Test/'
import { Route,Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import {Container} from 'semantic-ui-react'
import EventDetailedPage from './components/EventDetailedPage';
import ModalManager from './modals/ModalManager'
import UserDashboard from './components/UserDetails/UserDashboard';
import User from './components/User';
import {UserIsAuthenticated} from './common/auth/authWrapper'



class App extends Component {
  render (){
  return (
    <div>
      <ModalManager/>
      <Switch>
   <Route exact path ='/' component={Home}/>
   </Switch>
   <Route
   path="/(.+)"
   render={()=>(
    <div>

  
  
  <Navbar/>
    <Container className="main">
      <Switch>
      <Route path ='/welcome' component={Welcome}/>
      <Route path ='/titles' component={UserIsAuthenticated(EventDashboard)}/>
      <Route path ='/test' component={Test}/>
      <Route path ='/title/:id' component={UserIsAuthenticated(EventDetailedPage)}/>
      <Route path ='/manage/:id' component={UserIsAuthenticated(EventForm)}/>
      <Route path  ='/user/:id' component={UserIsAuthenticated(User)}/>
      <Route path ='/people' component={UserIsAuthenticated(PeopleDashboard)}/>
      <Route path ='/mytitles/:id' component={UserIsAuthenticated(UserDashboard)}/>



      <Route path ='/titles/:id' component={UserIsAuthenticated(EventDashboard)}/>

      <Route path ='/settings' component={UserIsAuthenticated(SettingsDashboard)}/>
      <Route path ='/createEvent' component={UserIsAuthenticated(EventForm)}/>


      </Switch>
     

      </Container>
    </div>
  )}
  />
    </div>
  );
}
}
export default App;
