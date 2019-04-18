import React, { Component } from 'react';
class Show extends Component {
  render() {
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
                    {/* Show */}
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div><div className="show_date">18/07</div></div>
                      <div className="show_info d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-start justify-content-center">
                        <div className="show_name"><a href="/#">Electric Castle Festival</a></div>
                        <div className="show_location">Cluj, Romania</div>
                      </div>
                      <div className="ml-auto"><div className="show_shop trans_200"><a href="/#">Buy Tickets</a></div></div>
                    </li>
                    {/* Show */}
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div><div className="show_date">20/07</div></div>
                      <div className="show_info d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-start justify-content-center">
                        <div className="show_name"><a href="/#">Ultra Music Festival</a></div>
                        <div className="show_location">Miami, USA</div>
                      </div>
                      <div className="ml-auto"><div className="show_shop trans_200"><a href="/#">Buy Tickets</a></div></div>
                    </li>
                    {/* Show */}
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div><div className="show_date">03/08</div></div>
                      <div className="show_info d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-start justify-content-center">
                        <div className="show_name"><a href="/#">Untold Festival</a></div>
                        <div className="show_location">Cluj, Romania</div>
                      </div>
                      <div className="ml-auto"><div className="show_shop trans_200"><a href="/#">Buy Tickets</a></div></div>
                    </li>
                    {/* Show */}
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div><div className="show_date">11/08</div></div>
                      <div className="show_info d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-start justify-content-center">
                        <div className="show_name"><a href="/#">Sun Kissed Festival</a></div>
                        <div className="show_location">Paris, France</div>
                      </div>
                      <div className="ml-auto"><div className="show_shop trans_200"><a href="/#">Buy Tickets</a></div></div>
                    </li>
                    {/* Show */}
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div><div className="show_date">18/08</div></div>
                      <div className="show_info d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-start justify-content-center">
                        <div className="show_name"><a href="/#">Spanish Festival</a></div>
                        <div className="show_location">Madrid, Spain</div>
                      </div>
                      <div className="ml-auto"><div className="show_shop trans_200"><a href="/#">Buy Tickets</a></div></div>
                    </li>
                    {/* Show */}
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div><div className="show_date">25/08</div></div>
                      <div className="show_info d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-start justify-content-center">
                        <div className="show_name"><a href="/#">Vikings Festival</a></div>
                        <div className="show_location">Oslo, Norway</div>
                      </div>
                      <div className="ml-auto"><div className="show_shop trans_200"><a href="/#">Buy Tickets</a></div></div>
                    </li>
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

export default Show;
