import React from 'react'
import Navbar from '../components/static/Navbar.js'
import Footer from '../components/static/Footer.js'
import Jumbotron from '../components/static/Jumbotron'

const services = () => (
  <div>
    <Navbar />
    <Jumbotron title={"Services we offer"} subtitle={"Feel free to reach out via email!"}/>
    <div className="container">
      <div className="grid">
        <div className="col-sm"><h4><u>Web Apps & design</u></h4></div>
          <div className="col-sm">
            <h6>Currently we can build a custom app to your specs, and take care of everything outside servers.</h6>
          </div>
        </div>
        <div className="col-sm"><h4><u>Web App Maintenance</u></h4></div>
          <div className="col-sm">
            <h6>We can Update, and take care of any issues, or bugs your current site may have!</h6>
        </div>

      <div className="col-sm"><h4><u>Twitch panels and logos</u></h4></div>
        <div className="col-sm">
          <h6>In need of some more personal or professional looking headers or panels? We do that too!</h6>
      </div>

      <div className="col-sm"><h4><u>Hardware/General tech issues</u></h4></div>
        <div className="col-sm">
          <h6>We can help dianose, or offer budget friendly fixes, and upgrades for all budgets</h6>
      </div>
      <br />
      <br />

    <Footer />
  </div>
    </div>
)

export default services
