import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
          <div className="header_content d-flex flex-row align-items-center justify-content-center">
            <div className="logo"><a href="/#">Mixtape</a></div>
            <div className="log_reg">
              <ul className="d-flex flex-row align-items-start justify-content-start">
                <li><a href="/#">Login</a></li>
                <li><a href="/#">Register</a></li>
              </ul>
            </div>
            <nav className="main_nav">
              <ul className="d-flex flex-row align-items-start justify-content-start">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="about.html">About us</a></li>
                <li><a href="music.html">Music</a></li>
                <li><a href="blog.html">News</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
            <div className="hamburger ml-auto">
              <div className="d-flex flex-column align-items-end justify-content-between">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;
