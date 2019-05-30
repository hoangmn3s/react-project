import React, { Component } from 'react';
import Slide from './layouts/home/Slide';
import FeaturedAlbum from './layouts/home/FeaturedAlbum';
import Artist from './layouts/home/Artist';
import EventList from './layouts/home/EventList';
import Extra from './layouts/home/Extra';
class Home extends Component {
  render() {
    return (
    	<div id="home-section">
	        <Slide cover={this.props.cover} />
	        <FeaturedAlbum />
	        <EventList eventList={this.props.showList} />
	        <Artist artist={this.props.artist} />
	        <Extra />
      </div>
    )
  }
}

export default Home;
