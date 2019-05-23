import React, { Component } from 'react';
class FeaturedAlbum extends Component {
  render() {
    return (
        <div className="featured_album">
          <div className="background_image featured_background" style={{backgroundImage: 'url(assets/images/featured.png)'}} />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-6">
                <div className="section_title_container">
                  <div className="section_subtitle">Events</div>
                  <div className="section_title"><h1>Featured Album</h1></div>
                </div>
              </div>
            </div>
            <div className="row featured_row row-lg-eq-height">
              {/* Featured Album Image */}
              <div className="col-md-6">
                <div className="featured_album_image">
                  <div className="image_overlay" />
                  <div className="background_image" style={{backgroundImage: 'url(/assets/images/featured_album.jpg)'}} />
                  {/* <img src="/assets/images/featured_album.jpg" alt=""> */}
                </div>
              </div>
              {/* Featured Album Player */}
              <div className="col-md-6 featured_album_col">
                <div className="featured_album_player_container d-flex flex-column align-items-start justify-content-center">
                  <div className="featured_album_player">
                    <div className="featured_album_title_bar d-flex flex-row align-items-center justify-content-start">
                      <div className="featured_album_title_container">
                        <div className="featured_album_artist">3S Radio</div>
                        <div className="featured_album_title">Love is all Around</div>
                      </div>
                      <div className="featured_album_link ml-auto"><a href="https://soundcloud.com/3si-radio" target="_blank" rel="noopener noreferrer">Visit Chanel</a></div>
                    </div>
                    <iframe title="soundCloud-frame" width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/359598259&color=%23648484&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   	);
  }
}

export default FeaturedAlbum;
