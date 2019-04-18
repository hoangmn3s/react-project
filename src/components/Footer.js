import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
<footer className="footer">
          <div className="footer_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
            <div className="newsletter_container">
              <div className="newsletter_title"><h2>Subscribe to our newsletter</h2></div>
              <form action="#" id="newsletter_form" className="newsletter_form">
                <input type="email" className="newsletter_input" placeholder="Your E-mail" required="required" />
                <button className="newsletter_button">Subscribe</button>
              </form>
            </div>
            <div className="footer_lists d-flex flex-sm-row  flex-column align-items-start justify-content-start ml-xl-auto">
              {/* Useful Links */}
              <div className="footer_list">
                <div className="footer_list_title">Useful Links</div>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="/#">Testimonials</a></li>
                  <li><a href="/#">Music</a></li>
                  <li><a href="blog.html">News</a></li>
                </ul>
              </div>
              {/* Mixtape */}
              <div className="footer_list">
                <div className="footer_list_title">Mixtape</div>
                <ul>
                  <li><a href="/#">Music</a></li>
                  <li><a href="/#">PR &amp; Marketing</a></li>
                  <li><a href="/#">Contact</a></li>
                  <li><a href="/#">About us</a></li>
                  <li><a href="/#">Testimonials</a></li>
                </ul>
              </div>
              {/* Connect */}
              <div className="footer_list">
                <div className="footer_list_title">Connect</div>
                <ul>
                  <li><a href="/#">Returns</a></li>
                  <li><a href="/#">Shippings</a></li>
                  <li><a href="/#">Jobs</a></li>
                  <li><a href="/#">Social Media</a></li>
                  <li><a href="/#">Soundcloud</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright_bar">
            <span>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </span>
          </div>
        </footer>
    );
  }
}

export default Footer;
