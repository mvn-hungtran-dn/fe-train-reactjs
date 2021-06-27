import React from "react";

export class Input extends React.Component {
  render() {
    const { name, label, value } = this.props
    return (
      <>
        <label>{ label }</label>
        <input defaultValue={value} name={name} type="text"/>
      </>
    )
  }
}
