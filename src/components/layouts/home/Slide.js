import React, { Component } from 'react';
class Slide extends Component {
  showCover(fileName){
      var coverImg = "/assets/images/" + fileName;
    return {
      backgroundImage: "url(" + coverImg + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
  }
  render() {
     var slideItem = this.props.cover.map((media,index) => {
        return (
           <div className="owl-item" key={index}>
                <div className="background_image" style={ this.showCover(media) } />
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
        )
      })
    return (
    	<div className="home">
          <div className="home_slider_container">
            {/* Home Slider */}
            <div className="owl-carousel owl-theme home_slider">
              {slideItem}
            </div>
          </div>
        </div>
    );
  }
}

export default Slide;
