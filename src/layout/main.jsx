import React from "react";
import { Circle } from "../components/circle";

export class Main extends React.Component {
  constructor() {
    super()
    this.circleValue1 = {
      size: { width: 40, height: 40 },
      number: 100,
      isStop: false
    }
    this.circleValue2 = {
      ...this.circleValue1,
      number: 90,
    }
    this.circleValue3 = {
      ...this.circleValue1,
      number: 80,
    }

    this.state = {
      page: 'home'
    }
    this.goHome = this.goHome.bind(this)
    this.goAbout = this.goAbout.bind(this)
  }

  goHome() {
    this.setState({
      page: 'home'
    })
  }

  goAbout() {
    this.setState({
      page: 'about'
    })
  }

  render() {
    return (
      <main className="main">
        <div className="small-nav">
          <a className="small-nav-item" onClick={this.goHome} href="#">Home</a>
          <a className="small-nav-item" onClick={this.goAbout} href="#">About</a>
        </div>
        <div className="small-page">
          { this.state.page === 'home' ?
            <>
              <Circle value={this.circleValue1} />
              <Circle value={this.circleValue2} />
              <Circle value={this.circleValue3} />
            </> : 
            ''
          }
        </div>
      </main>
    )
  }
}
