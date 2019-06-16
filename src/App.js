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
import * as UserModel from './Models/UserModel';
/*Fake Data - End*/

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {

 constructor(props){
    super(props);

    var userList = UserModel.USER_LIST;
    userList.map((user,index) => {
      user.id = this.generateId();
    })
    if(localStorage.getItem('userList') === null){
      localStorage.setItem('userList', JSON.stringify(userList));
    }
  }
  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateId(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4();
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
        <About  cover="about.jpg" />
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
        <News cover="single.jpg" />
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
        <AdminUser/>
        <Footer />
      </div>
     )
  }

  render() {
    return (
      //Router get Component
      <Router>
          <Route exact path="/" component= { this.homeRoute } />
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
