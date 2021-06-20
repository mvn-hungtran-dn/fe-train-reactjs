import React from "react";
import { Item } from "./item";

export class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = JSON.parse(JSON.stringify(this.props))
  }

  onDelete = (id) => {
    this.setState((state) => ({
      data: state.data.filter((item) => item.id !== id)
    }))
  }

  render() {
    return (
      this.state.data.length ? 
      this.state.data.map(
        (data) =>  <Item  key={data.id} data={data} delete={this.onDelete} />
      ) :
      <p>Xoá hết rồi</p>
    )
  }
}
