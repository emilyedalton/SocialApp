import React from 'react';
import EventDashboard from './components/EventDashboard'
import Navbar from './components/Navbar';
import {Container} from 'semantic-ui-react'

function App() {
  return (
    <div>
    <Container className="main">
    
      <Navbar/>
      <EventDashboard/>
      </Container>
    
    </div>
  );
}

export default App;
