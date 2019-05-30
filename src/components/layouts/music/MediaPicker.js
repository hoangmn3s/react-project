import React, { Component } from 'react';

class MediaPicker extends Component {

  selectMedia(media){
    this.props.getActiveMedia(media);
  }
  render() {
  var getSong = this.props.mediaList.map((media,index) => {
        return (
          <li className={ this.props.activeSong.name === media.name ?"active-media" : null } key={index}>
            <div >
              <a 
                href="javascript:void(0)" 
                className="jp-playlist-item jp-playlist-current" 
                onClick={ () => this.selectMedia(media) } >{media.name}</a>
            </div>
          </li>
        )
      })
    return (
      <div id="jp_container_1" className="jp-audio" role="application" aria-label="media player">
        <div className="jp-type-playlist">
          <div className="jp-playlist">
            <ul style={{}}>
             { getSong}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MediaPicker