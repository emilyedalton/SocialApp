import React, {Component} from 'react';
import EventDashboard from './components/EventDashboard'
import EventForm from './components/EventForm'
import PeopleDashboard from './components/PeopleDashboard'
import UserDetails from './components/UserDetails/'
import SettingsDashboard from './components/SettingsDashboard/'
import Home from './components/Home/'
import { Route,Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import {Container} from 'semantic-ui-react'

class App extends Component {
  render (){
  return (
    <div>
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
      <Route path ='/events' component={EventDashboard}/>
      <Route path ='/events/:id' component={EventDashboard}/>
      <Route path ='/people' component={PeopleDashboard}/>
      <Route path ='/profile/:id' component={UserDetails}/>
      <Route path ='/settings' component={SettingsDashboard}/>
      <Route path ='/createEvent' component={EventForm}/>
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
