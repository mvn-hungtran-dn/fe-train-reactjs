import React from "react";
import logo from '../images/logo-poke.png';
import { AiOutlineHeart } from 'react-icons/ai';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <header className="header nav container">
        <div className="logo">
          <img
            src={logo}
            width="80"
          />
        </div>
        <ul className="menu menu-right">
          <li className="menu-item">
            <AiOutlineHeart className="icon" />
          </li>
          <li className="menu-item login">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </header>
    )
  }
}
