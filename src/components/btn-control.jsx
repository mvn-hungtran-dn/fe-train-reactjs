import React from "react";

const STATE = {
  start: 'START',
  stop: 'STOP',
}

export class BtnControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isStop: true,
    }

    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState((state) => ({
      isStop: !state.isStop
    }))
    this.props.toggleState({isStop: this.state.isStop})
  }

  render() {
    return (
      <button onClick={this.changeState}>
        {this.state.isStop ? STATE.stop : STATE.start }
      </button>
    )
  }
}
