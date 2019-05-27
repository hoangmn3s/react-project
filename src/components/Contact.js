import React, { Component } from 'react';
import ContactForm from './layouts/contact/ContactForm';
import ContactInfo from './layouts/contact/ContactInfo';

class Contact extends Component {
  render() {
    return (
    	<section id="contact">
        <div className="home">
          <div className="home_inner">
            <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="/assets/images/contact.jpg" data-speed="0.8" />
            <div className="home_container">
              <div className="home_content text-center">
                <div className="home_subtitle">Just us</div>
                <div className="home_title">Contact</div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ContactForm />
              </div>
              <div className="col-lg-6 contact_col">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
