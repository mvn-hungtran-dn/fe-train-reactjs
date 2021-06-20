import React from "react";
import { List } from "../components/list";

export class Main extends React.Component {
  constructor(props) {
    super(props)
    this.data = [
      {
        id: 1,
        title: 'title1',
        detail: 'detail1',
        color: 'red',
      },
      {
        id: 2,
        title: 'title2',
        detail: 'detail2',
        color: 'blue',
      },
      {
        id: 3,
        title: 'title3',
        detail: 'detail3',
        color: 'black',
      },
      {
        id: 4,
        title: 'title4',
        detail: 'detail4',
        color: 'yellow',
      },
    ]
  }

  render() {
    return (
      <main className="main">
        <List data={this.data} />
      </main>
    )
  }
}
