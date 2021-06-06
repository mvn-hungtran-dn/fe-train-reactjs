import React from "react";
import feLogo from '../images/fe-logo.png';

export class Header extends React.Component {
  render() {
    return (
      <header class="header nav">
        <div class="logo">
          <img
            src={feLogo}
            width="80"
          />
        </div>
        <ul class="menu">
          <li class="menu-item">Menu1</li>
          <li class="menu-item">Menu2</li>
          <li class="menu-item">Menu3</li>
        </ul>
        <ul class="menu menu-right">
          <li class="menu-item">Search</li>
          <li class="menu-item">Login</li>
          <li class="menu-item">Logout</li>
        </ul>
      </header>
    )
  }
}
