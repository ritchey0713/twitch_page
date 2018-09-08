import React from 'react'
import { Link } from 'react-router-dom'

import Comments from '../components/comments/Comments.js'

import Hardware from '../components/static/headers/hardware.png'
import GithubHeader from '../components/static/headers/Github (1).png'
import Portfolio from '../components/static/headers/Portfolio.png'
import Twitchheader from '../components/static/headers/Twitch.png'
import DiscordHeader from '../components/static/headers/Discord.png'
import Youtube from '../components/static/headers/youtube.png'
import Blog from '../components/static/headers/Blog.png'
import FAQ from '../components/static/headers/FAQ.png'
import Services from '../components/static/headers/Services.png'
import './About.css'

const About = () => {
  return (
    <div className="container">
      <h1 className="container">
      </h1>
        <br />
        <br />

      <div className="row">
        <figure className="col-md-4">
          <Link to={'/hardware'}>
            <img className="header" src={Hardware} alt="Hardware" />
          </Link>
        </figure>

        <figure className="col-md-4">
          <a href={'https://github.com/ritchey0713'}>
            <img className="header" src={GithubHeader} alt="GitHub"/>
          </a>
        </figure>

        <figure className="col-md-4">
          <a href="https://discord.gg/ruQGMjP">
            <img className="header" src={DiscordHeader} alt="Discord"/>
          </a>
        </figure>

        <figure className="col-md-4">
          <a href="https://www.youtube.com/channel/UCaD_c8zU0srM33VQVlXyTwQ?view_as=subscriber">
            <img className="header" src={Youtube} alt="Youtube"/>
            </a>
        </figure>

        <figure className="col-md-4">
          <a href="https://www.twitch.tv/azn_dev">
            <img className="header" src={Twitchheader} alt="Twitch"/>
          </a>
        </figure>

        <figure className="col-md-4">
          <Link to="/portfolio">
            <img className="header" src={Portfolio} alt="portfolio"/>
          </Link>
        </figure>

        <figure className="col-md-4">
          <a href="http://dritchey.com/">
            <img className="header" src={Blog}  alt="Blog"/>
          </a>
        </figure>

        <figure className="col-md-4">
          <a href="/about">
            <img className="header" src={FAQ}  alt="Blog"/>
          </a>
        </figure>

        <figure className="col-md-4">
          <a href="/services">
            <img className="header" src={Services}  alt="Services"/>
          </a>
        </figure>
      </div>


    <Comments />

    </div>
  )
}

export default About
