import React, {Component} from 'react';
import EventDashboard from './components/EventDashboard'
import EventForm from './components/EventForm'
import PeopleDashboard from './components/PeopleDashboard'
import UserDetails from './components/UserDetails/'
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
import {withFirebase} from 'react-redux-firebase'
import UserTitles from './components/UserTitles';
import User from './components/User';

const mapState = (state)=>({
  auth:state.firebase.auth, 
  profile: state.firebase.profile
})

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
      <Route path ='/titles' component={EventDashboard}/>
      <Route path ='/test' component={Test}/>
      <Route path ='/event/:id' component={EventDetailedPage}/>
      <Route path ='/manage/:id' component={EventForm}/>
      <Route path  ='/user/:id' component={User}/>
      <Route path ='/people' component={PeopleDashboard}/>
      <Route path ='/mytitles/:id' component={UserDashboard}/>

      {/* <Route path ='settings/mytitles/:id' component={UserDashboard}/> */}


      <Route path ='/events/:id' component={EventDashboard}/>

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
