import React from 'react'
import Navbar from '../components/static/Navbar.js'
import Footer from '../components/static/Footer.js'
import Jumbotron from '../components/static/Jumbotron'

const Info = () => (
  <div>
    <Navbar />
    <Jumbotron title={'A Look Inside'}/>
      <div className="container">
        <div className="grid">
          <div className="col-sm">What I Do?</div>
            <div className="col-sm">
              <h6>Full stack Web Developer</h6>

            </div>
          </div>

        <div className="grid">
          <div className="col-sm">What is My YouTube About?</div>
            <div className="col-sm">
                <h6>I host a channel building, and teaching skills in the following areas:</h6>
                <ul>
                  <li>
                    Web Development & Design
                  </li>
                  <li>
                    Logo & Graphic Design
                  </li>
                  <li>
                    Twitch overlays & panel Designs
                  </li>
                  <li>
                    Web App maintenance
                  </li>
                  <li>
                    Gym & Diet tips
                  </li>
                </ul>

              </div>
            </div>

            <div className="grid">
              <div className="col-sm">Are you Asian?</div>
                <div className="col-sm">
                  <h6>Yes, I am Half-Korean</h6>

                </div>
              </div>

              <div className="grid">
                <div className="col-sm">Where are you from?</div>
                  <div className="col-sm">
                    <h6>Native Ohioan</h6>
                  </div>
                </div><br /> <br />
          </div>
        <Footer />
  </div>
)

export default Info
