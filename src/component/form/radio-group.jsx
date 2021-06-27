import React from "react";

export class RadioGroup extends React.Component {
  render() {
    const { options, name} = this.props
    return (
      options.map((item, index) => (
        <div key={index}>
          <label htmlFor={index}>{item.name}</label>
          <input
            value={item.value}
            id={index}
            type="radio"
            name={name}
          />
        </div>
      ))
    )
  }
}
