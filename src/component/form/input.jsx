import React from "react";

export class Input extends React.Component {
  render() {
    const { name, label, value, type } = this.props
    return (
      <div className="input-group ">
        <label className="label">{ label }</label>
        <input className="input" defaultValue={value} name={name} type={type || 'text'}/>
      </div>
    )
  }
}
