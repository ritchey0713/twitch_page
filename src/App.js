import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './containers/Home.js'
import Portfolio from './components/jsportfolio.js'
import Hardware from './components/Hardware.js'
import Contact from './components/Contact.js'
import Info from './components/info.js'
import Services from './components/services.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/hardware' component={Hardware} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={Info} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/portfolio' component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
