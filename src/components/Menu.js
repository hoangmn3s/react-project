import React, { Component } from 'react';
import {
  Link,

} from 'react-router-dom';
class Menu extends Component {
  render() {
    return (
<div className="menu">
          <div>
            <div className="menu_overlay" />
            <div className="menu_container d-flex flex-column align-items-start justify-content-center">
              <div className="menu_log_reg">
                <ul className="d-flex flex-row align-items-start justify-content-start">
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                </ul>
              </div>
              <nav className="menu_nav">
                <ul className="d-flex flex-column align-items-start justify-content-start">
                  <li className="active">
                   <Link to="/home">Home</Link>
                </li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
    );
  }
}

export default Menu;
