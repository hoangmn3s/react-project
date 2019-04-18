import React, { Component } from 'react';
class Menu extends Component {
  render() {
    return (
<div className="menu">
          <div>
            <div className="menu_overlay" />
            <div className="menu_container d-flex flex-column align-items-start justify-content-center">
              <div className="menu_log_reg">
                <ul className="d-flex flex-row align-items-start justify-content-start">
                  <li><a href="/#">Login</a></li>
                  <li><a href="/#">Register</a></li>
                </ul>
              </div>
              <nav className="menu_nav">
                <ul className="d-flex flex-column align-items-start justify-content-start">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="music.html">Music</a></li>
                  <li><a href="blog.html">News</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
    );
  }
}

export default Menu;
