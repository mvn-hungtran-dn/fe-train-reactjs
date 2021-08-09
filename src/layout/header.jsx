import React from "react";
import logo from '../images/logo-poke.png';
import { AiOutlineHeart } from 'react-icons/ai';

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
            <AiOutlineHeart />
          </li>
          <li className="menu-item">Login</li>
        </ul>
      </header>
    )
  }
}
