import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
     
        <header className="header">
          <div className="header_content d-flex flex-row align-items-center justify-content-center">
            <div className="logo">
              <a href="/home">Mixtape</a>
            </div>
            <div className="log_reg">
              <ul className="d-flex flex-row align-items-start justify-content-start">
                 <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
              </ul>
            </div>
            <nav className="main_nav">
              <ul className="d-flex flex-row align-items-start justify-content-start">
                <li className="active">
                   <Link to="/home">Home</Link>
                </li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className="hamburger ml-auto">
              <div className="d-flex flex-column align-items-end justify-content-between"></div>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;
