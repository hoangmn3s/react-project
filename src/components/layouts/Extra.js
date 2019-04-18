import React, { Component } from 'react';
class Extra extends Component {
  render() {
    return (
    <div className="extra">
          <div className="extra_container">
            <div className="background_image" style={{backgroundImage: 'url(assets/images/extra.jpg)'}} />
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="extra_content d-flex flex-column align-items-start justify-content-center">
                    <div className="extra_title"><h1>Get your tickets now!</h1></div>
                    <div className="extra_text">
                      <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum</p>
                    </div>
                    <div className="extra_button"><a href="/#">Buy Now</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Extra;
