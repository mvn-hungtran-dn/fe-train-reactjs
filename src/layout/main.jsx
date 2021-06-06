import React from "react";
import logo from '../logo.svg';

export class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width="200"
          height="200"
        />
        <p>
          Hello react!
        </p>
      </main>
    )
  }
}
