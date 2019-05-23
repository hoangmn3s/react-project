import React, { Component } from 'react';
class Event extends Component {
  render() {
    return (
    	<li className="d-flex flex-row align-items-center justify-content-start" >
          <div><div className="show_date">{this.props.eventDate}</div></div>
          <div className="show_info d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-start justify-content-center">
            <div className="show_name"><a href="/#">{this.props.eventName}</a></div>
            <div className="show_location">{this.props.eventLocation}</div>
          </div>
          <div className="ml-auto"><div className="show_shop trans_200"><a href="/#">Buy Tickets</a></div></div>
        </li>
);
  }
}

export default Event;
