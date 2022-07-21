import React, { Component } from 'react'

console.log(this);
export class Label extends Component {
  render() {
    return (
      <h1>
        Username: {this.props.user}
        
      </h1>
    )
  }
}

export default Label
