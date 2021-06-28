import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <div className="submit-wrap">
        <button className="submit" type="submit">{this.props.children}</button>
      </div>
    )
  }
}
