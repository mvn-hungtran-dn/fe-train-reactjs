import React from "react";

export class Radio extends React.Component {
  render() {
    const { name } = this.props
    return (
      <input type="radio" name={name} />
    )
  }
}
