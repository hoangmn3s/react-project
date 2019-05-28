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
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

  function aboutRoute() {
    return (
      <div className="super_container">
        <Header headerType="public" routePath="/about" />
        <Menu  menuType="public"/>
        <About   />
        <Footer />
      </div>
     )
  }
  function homeRoute(){
    return (
      <div className="super_container">
        <Header headerType="public" routePath="/home" />
        <Menu  menuType="public"/>
        <Home />
        <Footer />
      </div>
     )
  }

  function musicRoute() {
     return (
      <div className="super_container">
        <Header headerType="public" routePath="/music" />
        <Menu  menuType="public"/>
        <Music />
        <Footer />
      </div>
     )
  }
  function newsRoute(){
     return (
      <div className="super_container">
        <Header headerType="public" routePath="/news" />
        <Menu  menuType="public"/>
        <News />
        <Footer />
      </div>
     )
  }
  function contactRoute(){
    return (
      <div className="super_container">
        <Header headerType="public" routePath="/contact" />
        <Menu  menuType="public"/>
        <Contact />
        <Footer />
      </div>
     )
  }
  function loginRoute(){
    return (
      <div className="super_container">
        <Header headerType="public" routePath="/login" />
        <Menu  menuType="public"/>
        <Login />
        <Footer />
      </div>
     )
  }
  function adminUserRoute(){
    return (
      <div className="super_container">
        <Header headerType="admin" routePath="/admin/user" />
        <Menu  menuType="admin"/>
        <AdminUser />
        <Footer />
      </div>
     )
  }

class App extends Component {
 
  render() {
    return (
      <Router>
          <Route path="/home" component= { homeRoute } />
          <Route path="/about" component= {aboutRoute} />
          <Route path="/music" component= {musicRoute} />
          <Route path="/news" component= {newsRoute} />
          <Route path="/contact" component= {contactRoute} />
          <Route path="/login" component= {loginRoute} />
          <Route path="/admin/user" component= {adminUserRoute} />
      </Router>
    );
  };
}

export default App;
