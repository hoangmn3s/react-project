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

class App extends Component {
 constructor(props){
    super(props);
    this.state = {
      home : {
          "cover" : [
            'index.jpg','contact.jpg','datmaniac_cover.jpg'
          ],
          "eventList" :[
          {
            'eventId' : 0,
            'eventDate' : '18/07',
            'eventName' : 'Thơm',
            'eventLocation' : 'Đen, Ngọt, The Flob...'
          },
          {
            'eventId' : 1,
            'eventDate' : '20/07',
            'eventName' : 'Tôi Detail Tôi',
            'eventLocation' : 'Kiên'
          },
          {
            'eventId' : 2,
            'eventDate' : '20/07',
            'eventName' : 'Nhạc phiễn phí VOL.3',
            'eventLocation' : 'DSK'
          },
          {
            'eventId' : 3,
            'eventDate' : '20/07',
            'eventName' : 'Điện Tử Thẻ và Truyện Tranh',
            'eventLocation' : 'Ếch & Báo'
          },
          {
            'eventId' : 4,
            'eventDate' : '20/07',
            'eventName' : 'Rap Ngoài Đường',
            'eventLocation' : 'Datmaniac, Cam'
          },
          {
            'eventId' : 5,
            'eventDate' : '20/07',
            'eventName' : 'Thần Tượng Trên tầng Thượng',
            'eventLocation' : 'Taynguyen Sound'
          }
        ],
        artist : {
            "id" : 1,
            "name" : "DSK",
            "real_name" : "Trần Đức Minh",
            "date_of_birth" : "23.11.1987",
            "contact" : "trungkien@gmail.com",
            "detail" : "DSK được cho là thần tượng của các thần tượng trong Rap Việt nhờ chất giọng và khả năng viết lyric tuyệt hảo. Anh được khán giả yêu mến qua những bản Rap chất ngầu như: Lớn Rồi, Chưa Bao Giờ, Đôi Bờ, Tự Xử, Thế Hệ Tao,... Cho đến bây giờ anh đã trở thành huyền thoại bất tử trong lòng người hâm mộ với những cống hiến to lớn cho nền Rap Việt Nam.",
            "image" : "dsk.png",
            "cover" : "dsk_cover.jpg",
            "type" : "Diss, Live",
            "songlist" : [
              {
                "id" : 1,
                "name" : "Chưa Bao Giờ",
                "file_name" : "chuabaogio.mp3"
              }, {
                "id" : 2,
                "name" : "Lớn Rồi",
                "file_name" : "lonroi.mp3",
              },{
                "id" : 3,
                "name" : "Biết Rõ Vẫn Khó Đi",
                "file_name" : "bietrovankhodi.mp3"
              }
            ]
          }
      },
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
          cover={this.state.home.cover} 
          showList={this.state.home.eventList}
          artist={this.state.home.artist}
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
        <Music />
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
