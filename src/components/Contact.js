import React, { Component } from 'react';

class Contact extends Component {
  
  render() {
   
    return (
    	<section id="contact">
        <div className="home">
          <div className="home_inner">
            {/* Image artist: https://unsplash.com/@yoannboyer */}
            <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="/assets/images/contact.jpg" data-speed="0.8" />
            <div className="home_container">
              <div className="home_content text-center">
                <div className="home_subtitle">Just us</div>
                <div className="home_title">Contact</div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="contact">
          <div className="container">
            <div className="row">
              {/* Contact Form */}
              <div className="col-lg-6">
                <div className="contact_form_container">
                  <div className="contact_title">Send us a message</div>
                  <form action="#" className="contact_form" id="contact_form">
                    <input type="text" className="contact_input" placeholder="Name" required="required" />
                    <input type="email" className="contact_input" placeholder="E-mail" required="required" />
                    <input type="text" className="contact_input" placeholder="Subject" />
                    <textarea className="contact_input contact_textarea" placeholder="Message" required="required" defaultValue={""} />
                    <button className="contact_button">Send Message</button>
                  </form>
                </div>
              </div>
              {/* Contact Info */}
              <div className="col-lg-6 contact_col">
                <div className="contact_info">
                  <div className="contact_title">Where to find us</div>
                  <div className="contact_text">
                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus luctus nec. Curabitur luctus luctus erat, sit amet facilisis quam congue quis. Quisque ornare luctus erat id dignissim. Nullam ac nunc quis ex porttitor luctus.</p>
                  </div>
                  <div className="contact_info_list">
                    <ul>
                      <li className="d-flex flex-row align-items-start justify-content-start">
                        <div><div>Address</div></div>
                        <div>1481 Creekside Lane Avila Beach, CA 931</div>
                      </li>
                      <li className="d-flex flex-row align-items-start justify-content-start">
                        <div><div>Phone</div></div>
                        <div>+53 345 7953 32453</div>
                      </li>
                      <li className="d-flex flex-row align-items-start justify-content-start">
                        <div><div>E-mail</div></div>
                        <div>yourmail@gmail.com</div>
                      </li>
                    </ul>
                  </div>
                  <div className="social">
                    <ul className="d-flex flex-row align-items-center justify-content-start">
                      <li>
                        <a href="/#">
                          <i className="fa fa-pinterest" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i className="fa fa-dribbble" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i className="fa fa-behance" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
