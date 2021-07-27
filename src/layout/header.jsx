import React from "react";
import feLogo from '../images/fe-logo.png';
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <header className="header nav">
        <div className="logo">
          <img
            src={feLogo}
            width="80"
          />
        </div>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/products">product</Link>
          </li>
          <li className="menu-item">Menu3</li>
        </ul>
        <ul className="menu menu-right">
          <li className="menu-item">
            <Link to="/me">Account</Link>
          </li>
          <li className="menu-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="menu-item">Logout</li>
        </ul>
      </header>
    )
  }
}
