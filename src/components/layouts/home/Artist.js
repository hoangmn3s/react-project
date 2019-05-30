import React, { Component } from 'react';
class Artist extends Component {
  render() {
    var artist = this.props.artist;
    console.log(artist);
    return (
		<div className="artist">
          <div className="container">
            <div className="row">
              {/* Artist Image */}
              <div className="col-lg-4 artist_image_col">
                <div className="artist_image">
                  <img src={"/assets/images/" + artist.image} alt="1"/>
                </div>
              </div>
              {/* Artist Content */}
              <div className="col-lg-7 offset-lg-1">
                <div className="artist_content">
                  <div className="section_title_container">
                    <div className="section_subtitle">Events</div>
                    <div className="section_title"><h1>{artist.name}</h1></div>
                  </div>
                  <div className="artist_text">
                    <p>{artist.detail}</p>
                  </div>
                  <div className="artist_sig"><img src="/assets/images/sig.png" alt="1"/></div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
   	);
  }
}

export default Artist;
