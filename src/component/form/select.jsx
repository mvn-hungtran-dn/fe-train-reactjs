import React from "react";

export class Select extends React.Component {
  render() {
    const { name, label, options, value } = this.props
    return (
      <div className="input-group">
        <label className="label">{ label }</label>
        <select className="select input" defaultValue={value} name={name} id="cars">
          {
            options.map(
              (item, index) => <option key={index} value={item.value}>{ item.name }</option>
            )
          }
        </select>
      </div>
    )
  }
}
