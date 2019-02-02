import React, {Suspense, lazy} from 'react';
import {Element} from 'react-scroll';
import './App.css';

// Import Component
import {Spinner} from './Spinner'
const Featured = lazy(() => import('../components/Featured'));
const Venue = lazy(() => import('../components/Venue'));
const Pricing = lazy(() => import('../components/Pricing'));
const Highlight = lazy(() => import('../components/Highlight'));
const Location = lazy(() => import('../components/Location'));
const Header = lazy(() => import('../components/Header_Footer/Header'))
const Footer = lazy(() => import('../components/Header_Footer/Footer'))

function App(){
    return (
      <Suspense fallback={<Spinner size="large" />}>
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
            <Highlight />
          </Element>

          <Element name="location">
            <Location />
          </Element>

          <Footer />
        </div>
      </Suspense>
    );
}

export default App;
