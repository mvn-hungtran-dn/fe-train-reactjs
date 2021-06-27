import React from "react";

export class Table extends React.Component {
  render() {
    const { datas } = this.props
    return (
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            datas.map((item, index) =>
              <tr key={index}>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.gender}</td>
                <td>
                  <button onClick={() => this.props.delete(item.id)}>X</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}
