import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
class App extends Component {
  render() {

    
    return (
      
      <div className="super_container">
        {/* Header */}
        <Header />
        {/* Menu */}
        <Menu />
        { /* Home */}
        <Home />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
