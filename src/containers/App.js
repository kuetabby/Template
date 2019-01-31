import React, { Component } from 'react';
import {Element} from 'react-scroll';
import './App.css';

// Import Component
import Featured from '../components/Carosel/index'
import Venue from '../components/VenueInfo/index'
import Pricing from '../components/Pricing/index'
import Highlights from '../components/Highlight/index'
import Location from '../components/Location/index'
import Header from '../components/Header_Footer/Header'
import Footer from '../components/Header_Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Element name="feature">
          <Featured />
        </Element>

        <Element name="venue">
          <Venue />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="highlight">
          <Highlights />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
