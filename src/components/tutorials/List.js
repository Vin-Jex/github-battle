import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <ul>
        {this.props.friends.map((friend, index) => (
          <li key={index} >
            {friend.name}
          </li>
        ))}
      </ul>
    )
  }
}