import React, { Component } from 'react';
class ContactForm extends Component {
  submitContact = () => {
      console.log(this.refs);
  }

  render(){
    return (
      <div className="contact_form_container">
        <div className="contact_title">Send us a message</div>
        <form action="#" className="contact_form" id="contact_form">
          <input type="text" className="contact_input" placeholder="Name" required="required" ref="contactName" />
          <input type="email" className="contact_input" placeholder="E-mail" required="required" ref="contactEmail" />
          <input type="text" className="contact_input" placeholder="Subject"  ref="contactSubject" />
          <textarea className="contact_input contact_textarea" placeholder="Message" required="required" defaultValue={""}  ref="contactEmail" />
          <button className="contact_button" onClick={ this.submitContact } >Send Message</button>
        </form>
      </div>
   	);
  }
}
export default ContactForm;