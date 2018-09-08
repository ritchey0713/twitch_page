import React from 'react'
import Navbar from '../components/static/Navbar.js'
import Footer from '../components/static/Footer.js'
import Jumbotron from '../components/static/Jumbotron'

const Contact = () => (
  <div>
  <Navbar />
  <Jumbotron title={"Contact Us"} subtitle={"We are always here for you!"}/>
  <div className="container">
    <h5>Contact via Gmail for any inquries on web apps, or issues with the site:
    azn.d3v@gmail.com </h5>
  </div>


  <Footer />
  </div>
)

export default Contact
