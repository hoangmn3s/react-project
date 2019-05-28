import React, { Component } from 'react';
import {
  Link,

} from 'react-router-dom';
class MenuList extends Component {
  render() {
    return (
      <nav className="menu_nav">
        <ul className="d-flex flex-column align-items-start justify-content-start">
          <li className="active">
           <Link to="/home">Home</Link>
        </li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
}

export default MenuList;
