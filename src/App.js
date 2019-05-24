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
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

  function aboutRoute() {
    // this.transitionTo('/about');
    return <About />
  }
  function homeRoute() {
    return <Home />
  }
  function musicRoute() {
    return <Music />
  }
  function newsRoute(){
    return <News />
  }
  function contactRoute(){
    return <Contact />
  }
class App extends Component {

  render() {
    return (
      <div className="super_container">
      <Router>
          <Header />
          <Menu/ >
          <Route path="/home" component= { homeRoute } />
          <Route path="/about" component= {aboutRoute} />
          <Route path="/music" component= {musicRoute} />
          <Route path="/news" component= {newsRoute} />
          <Route path="/contact" component= {contactRoute} />
          <Footer />
      </Router>
      </div>
    );
  };
}

export default App;
