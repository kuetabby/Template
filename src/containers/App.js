import React, { Component } from 'react';
import './App.css';

// Import Component
import Featured from '../components/Carosel/index'
import Venue from '../components/VenueInfo/index'

class App extends Component {
  render() {
    return (
      <div>
        <Featured />
        <Venue />
      </div>
    );
  }
}

export default App;
