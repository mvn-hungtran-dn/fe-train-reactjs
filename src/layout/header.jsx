import React from "react";
import feLogo from '../images/fe-logo.png';

export class Header extends React.Component {
  render() {
    return (
      <header className="header nav">
        <div className="logo">
          <img
            src={feLogo}
            alt="logo"
            width="80"
          />
        </div>
        <ul className="menu">
          <li className="menu-item">Menu1</li>
          <li className="menu-item">Menu2</li>
          <li className="menu-item">Menu3</li>
        </ul>
        <ul className="menu menu-right">
          <li className="menu-item">Search</li>
          <li className="menu-item">Login</li>
          <li className="menu-item">Logout</li>
        </ul>
      </header>
    )
  }
}
