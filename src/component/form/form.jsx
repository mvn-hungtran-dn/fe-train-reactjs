import React from "react";

export class Form extends React.Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.handleSubmit}>
        {this.props.children}
      </form>
    )
  }
}
