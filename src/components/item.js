import React from "react";

export class Item extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div className="item">
        <div className="color" style={{backgroundColor: data.color}}></div>
        <div className="item-info">
          <div className="title">{data.title}</div>
          <div className="detail">{data.detail}</div>
        </div>
        <button
          className="item-action"
          onClick={() => this.props.delete(data.id)}
        >X</button>
      </div>
    )
  }
}
