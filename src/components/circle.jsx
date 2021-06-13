import React from "react";
import { BtnControl } from "./btn-control";

export class Circle extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.value
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.countDown()
  }

  componentWillUnmount() {
    clearInterval(this.timerCountDown);
  }

  toggleState({isStop}) {
    if (isStop) {
      clearInterval(this.timerCountDown)
    } else {
      this.countDown()
    }
  }

  countDown() {
    this.timerCountDown = setInterval(() => {
      if (this.state.number === 0) {
        clearInterval(this.timerCountDown)
        return
      }
      this.setState((state) => ({
        number: state.number - 1
      }))
    }, 1000)
  }

  render() {
    const { width, height } = this.state.size
    return (
      <div className="circle-wrap">
        <BtnControl toggleState={this.toggleState.bind(this)} />
        <div
          className="circle"
          style={
            { width: width, height: height }
          }
        >
          <span className="number">{ this.state.number }</span>
        </div>
      </div>
    )
  }
}
