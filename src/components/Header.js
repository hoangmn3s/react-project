import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

var publicMenu = [
  {
    'id' : 1,
    'title' : 'Home',
    'url' : '/home',
    'status' : 1
  },
  {
    'id' : 2,
    'title' : 'About Us',
    'url' : '/about',
    'status' : 1
  },
  {
    'id' : 3,
    'title' : 'Music',
    'url' : '/music',
    'status' : 1
  },
  {
    'id' : 4,
    'title' : 'News',
    'url' : '/news',
    'status' : 1
  },
  {
    'id' : 5,
    'title' : 'Contact',
    'url' : '/contact',
    'status' : 1
  }
];

var adminMenu = [
  
    {
    'id' : 6,
    'title' : 'User',
    'url' : '/admin/user',
    'status' : 1
  },
  {
    'id' : 7,
    'title' : 'News',
    'url' : '/admin/news',
    'status' : 1
  },
  {
    'id' : 8,
    'title' : 'Music',
    'url' : '/admin/music',
    'status' : 1
  },
  {
    'id' : 9,
    'title' : 'Contact',
    'url' : '/admin/contact',
    'status' : 1
  },
  
] 


class Header extends Component {
  render() {
    var headerType = this.props.headerType;
    var routePath = this.props.routePath;
    var listMenu = [];
    var pageTitle = null;
    if(headerType === 'public'){
      listMenu = publicMenu;
      pageTitle = 'Mixtape';
    }else{
      listMenu = adminMenu;
      pageTitle = 'Admin';
    }
    return (
     
        <header className="header">
          <div className="header_content d-flex flex-row align-items-center justify-content-center">
            <div className="logo">
              <a href="/home">{pageTitle}</a>
            </div>
            <div className="log_reg">
              <ul className="d-flex flex-row align-items-start justify-content-start">
                 <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
              </ul>
            </div>
            <nav className="main_nav">
              <ul className="d-flex flex-row align-items-start justify-content-start">
                {listMenu.map((menuItem,index) => {
                      return(
                        <li className={(routePath === menuItem.url ) ? "active" : "" } key={menuItem.id}>
                          <Link to={menuItem.url}>{menuItem.title}</Link>
                        </li>
                        )
                    })}
              </ul>
            </nav>
            <div className="hamburger ml-auto">
              <div className="d-flex flex-column align-items-end justify-content-between"></div>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;
