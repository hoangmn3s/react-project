import React, { Component } from 'react';
import Media from './Media';
import MediaPicker from './MediaPicker';
class SingerDetail extends Component {
  constructor(props){
    super(props);
    var defaultSinger = this.props.defaultSinger;
    var defaultSong = defaultSinger.songlist[0]
    this.state = {
          song : defaultSong
        }
    this.setActiveMedia =  this.setActiveMedia.bind(this);
    }
  setActiveMedia(mediaObj){
       this.setState({song : mediaObj});
  }

  render() {
    return (
      <div className="row">
              <div className="col-lg-5">
                <div className="single_info">
                  <div className="single_image"><img src={"/assets/images/" + this.props.activeSinger.image} alt="single-img" /></div>
                  <div className="single_info_list">
                    <ul>
                     <li><span>Full Name: </span>{this.props.activeSinger.real_name} </li>
                      <li><span>Date Of Birth: </span>{this.props.activeSinger.date_of_birth}</li>
                      <li><span>Tags: </span>{this.props.activeSinger.type}</li>
                    </ul>
                  </div>
                  <div className="logo_list d-flex flex-row align-items-center justify-content-start flex-wrap">
                    <div><a href="/#" target="_blank"><i className="fab fa-facebook"></i></a></div>
                    <div><a href="/#" target="_blank"><i className="fab fa-youtube"></i></a></div>
                    <div><a href="/#" target="_blank"><i className="fab fa-soundcloud"></i></a></div>
                  </div>
                </div>
              </div>
              {/* Single Content */}
              <div className="col-lg-7 single_content_col">
                <div className="single_content">
                  <div className="single_text">
                    <h1>{this.props.activeSinger.name}</h1>
                    <p>{this.props.activeSinger.detail}</p>
                    </div>
                  <div className="single_players">
                    <Media  playMedia={this.state.song} />
                    <MediaPicker activeSong={this.state.song}  mediaList={this.props.activeSinger.songlist} getActiveMedia={ this.setActiveMedia }  />
                  </div>
                </div>
              </div>
            </div>
    )
  }
}

export default SingerDetail;
