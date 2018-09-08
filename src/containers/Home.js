import React, { Component } from 'react'

import Navbar from '../components/static/Navbar.js'
import Footer from '../components/static/Footer.js'
import Jumbotron from '../components/static/Jumbotron'
import About from '../components/About.js'
class Home extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Jumbotron title={"Thanks for visiting!"}/>
        <About />

        <Footer />
      </div>
    )
  }
}

export default Home
