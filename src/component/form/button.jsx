import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <button type="submit">{this.props.children}</button>
    )
  }
}
