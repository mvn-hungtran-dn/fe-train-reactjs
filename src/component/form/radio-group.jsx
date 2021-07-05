import React from "react";

export class RadioGroup extends React.Component {
  render() {
    console.log(1)
    const { options, name, value} = this.props
    return (
      <div className="radio-group input-group">
        {
          options.map((item, index) => (
            <div key={index}>
              <input
                value={item.value}
                id={index}
                type="radio"
                name={name}
                defaultChecked={value === item.value}
              />
              <label htmlFor={index}>{item.name}</label>
            </div>
          ))
        }
      </div>
    )
  }
}
