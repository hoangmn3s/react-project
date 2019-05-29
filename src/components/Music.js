import React, { Component } from 'react';
import SingerDetail from './layouts/music/SingerDetail';
import SingerPicker from './layouts/music/SingerPicker';
class Music extends Component {
  
  constructor(props){
    super(props);
    this.state = {
          singer : {
            "id" : 1,
            "name" : "Trinh Trung Kien",
            "date_of_birth" : "1995",
            "contact" : "trungkien@gmail.com",
            "detail" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "image" : "single_image.jpg",
            "cover" : "single.jpg",
            "songlist" : [
              'TBEKB','CG','TK21B'
            ]
          }
        }
    this.setActiveSinger =  this.setActiveSinger.bind(this);
    }
  setActiveSinger(singerObj){
    this.setState({singer : singerObj});
  }
  render() {
    return (
      <section id="music">
      <div className="home">
          <div className="home_inner">
            <div id="music-banner" className="parallax_background parallax-window" data-image-src={"/assets/images/" + this.state.singer.cover} data-parallax="scroll" data-speed="0.8" />
          </div>
        </div>
        {/* Single */}
        <div className="single">
          <div className="container">
            <SingerPicker getActiveSinger={ this.setActiveSinger } />
            <SingerDetail activeSinger={this.state.singer}/>
          </div>
        </div>
        {/* Video */}
        <div className="video">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="video_container">
                  <iframe title="youtube iframe" width="100%" height="300px" src="https://www.youtube.com/embed/OsKLytDnKGA?rel=0&showinfo=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Music;
