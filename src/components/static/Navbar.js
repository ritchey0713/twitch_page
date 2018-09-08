import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {

    return(
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Azn_Dev Showcase</Link>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
        <div className="navbar-collapse collapse" id="navbarsExample06">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
                <li className="nav-item">
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="https://example.com" id="dropdown06" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                <div className="dropdown-menu" aria-labelledby="dropdown06">
                  <Link className="dropdown-item" to="/hardware">Hardware</Link>
                  <Link className="dropdown-item" to="/contact">Contact</Link>
                  <Link className="dropdown-item" to="/services">Services</Link>
                  <Link className="dropdown-item" to="/about">About</Link>
                  <Link className="dropdown-item" to="/portfolio">Portfolio</Link>
                </div>
              </li>
            </ul>
        </div>
      </div>
    </nav>
    )
  }


export default Navbar
