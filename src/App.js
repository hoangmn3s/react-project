import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Music from './components/Music';
import Contact from './components/Contact';
import Footer from './components/Footer';
//Admin
import Login from './components/Login';
import AdminUser from './components/Admin/User';

/*Fake Data - Start*/
import * as ShowModel from './Models/ShowModel';
import * as SingerModel from './Models/SingerModel';
import * as NewsModel from './Models/NewsModel';
/*Fake Data - End*/

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {

 constructor(props){
    super(props);
    this.state = {
      about : {
          "cover" : "about.jpg"
      },
      news: {
          "cover" : "single.jpg"
      },
      contact: {}
    }
    this.homeRoute = this.homeRoute.bind(this);
    this.aboutRoute = this.aboutRoute.bind(this);
    this.musicRoute = this.musicRoute.bind(this);
    this.newsRoute = this.newsRoute.bind(this);
    this.contactRoute = this.contactRoute.bind(this);
    this.loginRoute = this.loginRoute.bind(this);
    this.adminUserRoute = this.adminUserRoute.bind(this);
  }

  homeRoute(){
    return (
      <div className="super_container">
        <Header headerType="public" routePath="/home" />
        <Menu  menuType="public"/>
        <Home  
          cover={NewsModel.HOTEST_NEWS} 
          showList={ShowModel.SHOW_LIST}
          artist={SingerModel.WEEK_SINGER}
        />
        <Footer />
      </div>
     )
  }
  aboutRoute(){
    return (
      <div className="super_container">
        <Header headerType="public" routePath="/about" />
        <Menu  menuType="public"/>
        <About  cover={this.state.about.cover} />
        <Footer />
      </div>
     )
  }
  musicRoute(){
    return (
      <div className="super_container">
        <Header headerType="public" routePath="/music" />
        <Menu  menuType="public"/>
        <Music singerList={SingerModel.SINGER_LIST} />
        <Footer />
      </div>
    )
  }
  newsRoute(){
    return (
      <div className="super_container">
        <Header headerType="public" routePath="/news" />
        <Menu  menuType="public"/>
        <News cover={this.state.news.cover} />
        <Footer />
    </div>
    )
  }
  contactRoute(){
    return (
      <div className="super_container">
        <Header headerType="public" routePath="/contact" />
        <Menu  menuType="public"/>
        <Contact />
        <Footer />
      </div>
    )
  }
  loginRoute(){
    return (
      <div className="super_container">
        <Header headerType="public" routePath="/login" />
        <Menu  menuType="public"/>
        <Login />
        <Footer />
      </div>
    )
  }
   adminUserRoute(){
    return (
      <div className="super_container">
        <Header headerType="admin" routePath="/admin/user" />
        <Menu  menuType="admin"/>
        <AdminUser />
        <Footer />
      </div>
     )
  }

  render() {
    return (
      <Router>
          <Route path="/home" component= { this.homeRoute } />
          <Route path="/about" component= {this.aboutRoute} />
          <Route path="/music" component= {this.musicRoute} />
          <Route path="/news" component= {this.newsRoute} />
          <Route path="/contact" component= {this.contactRoute} />
          <Route path="/login" component= {this.loginRoute} />
          <Route path="/admin/user" component= {this.adminUserRoute} />
      </Router>
    );
  };
}

export default App;
