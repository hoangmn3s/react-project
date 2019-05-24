import React, { Component } from 'react';
import Slide from './layouts/Slide';
import FeaturedAlbum from './layouts/FeaturedAlbum';
import Artist from './layouts/Artist';
import Show from './layouts/Show';
import Extra from './layouts/Extra';
class Home extends Component {
  render() {
    return (
    	<div id="home-section">
	        <Slide />
	        <FeaturedAlbum />
	        <Show />
	        <Artist />
	        <Extra />
      </div>
    )
  }
}

export default Home;
