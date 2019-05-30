import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Media extends Component {


  render() {
  	var mediaFileName = this.props.playMedia.file_name;
    return (
    	<div className="single_player_container d-flex flex-column align-items-start justify-content-center">
            <ReactAudioPlayer
		  		src={"/assets/media/" + mediaFileName}
			  	autoPlay
			  	controls
			/>
		</div>
    )
  }
}

export default Media