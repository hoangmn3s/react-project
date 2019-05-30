import React, { Component } from 'react';
import Event from './event/Event';
class EventList extends Component {
  render() {
    var showEvent = this.props.eventList.map((eventObj,index) => {
                      return(
                        <Event 
                          key={eventObj.eventId}
                          eventId={eventObj.eventId}
                          eventDate={eventObj.eventDate}
                          eventName={eventObj.eventName}
                          eventLocation={eventObj.eventLocation}
                        />
                        )
                    })
    return (
    	<div className="shows">
          <div className="container">
            <div className="row" style={{zIndex: 10}}>
              <div className="col">
                <div className="section_title_container">
                  <div className="section_subtitle">Events</div>
                  <div className="section_title"><h1>Upcoming Shows</h1></div>
                </div>
              </div>
            </div>
            <div className="row shows_row">
              {/* Shows List */}
              <div className="col-lg-8 order-lg-1 order-2 shows_list_col">
                <div className="shows_list_container">
                  <ul className="shows_list">
                   {showEvent}
                  </ul>
                </div>
              </div>
              {/* Shows Image */}
              <div className="col-lg-4 order-lg-2 order-1">
                <div className="shows_image">
                  <div className="image_overlay" />
                  <img src="/assets/images/shows.jpg" alt="https://unsplash.com/@anthonydelanoix" />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default EventList;
