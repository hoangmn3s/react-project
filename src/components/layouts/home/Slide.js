import React, { Component } from 'react';
class Slide extends Component {
  render() {
    return (
    	<div className="home">
          <div className="home_slider_container">
            {/* Home Slider */}
            <div className="owl-carousel owl-theme home_slider">
              {/* Slide */}
              <div className="owl-item">
                <div className="background_image" style={{backgroundImage: 'url(assets/images/index.jpg)'}} />
                <div className="home_container">
                  <div className="home_container_inner d-flex flex-column align-items-center justify-content-center">
                    <div className="home_content text-center">
                      <div className="home_subtitle">New single release</div>
                      <div className="home_title"><h1>Love is all around</h1></div>
                      <div className="home_link"><a href="/#">Listen on Soundcloud</a></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide */}
              <div className="owl-item">
                <div className="background_image" style={{backgroundImage: 'url(assets/images/index.jpg)'}} />
                <div className="home_container">
                  <div className="home_container_inner d-flex flex-column align-items-center justify-content-center">
                    <div className="home_content text-center">
                      <div className="home_subtitle">New single release</div>
                      <div className="home_title"><h1>Love is all around</h1></div>
                      <div className="home_link"><a href="/#">Listen on Soundcloud</a></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide */}
              <div className="owl-item">
                <div className="background_image" style={{backgroundImage: 'url(assets/images/index.jpg)'}} />
                <div className="home_container">
                  <div className="home_container_inner d-flex flex-column align-items-center justify-content-center">
                    <div className="home_content text-center">
                      <div className="home_subtitle">New single release</div>
                      <div className="home_title"><h1>Love is all around</h1></div>
                      <div className="home_link"><a href="/#">Listen on Soundcloud</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Slide;
