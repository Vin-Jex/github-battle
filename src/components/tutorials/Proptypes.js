
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Proptypes extends Component {
  render() {
    const { authed, style, name, handle, img, addFriend } = this.props

    if(!authed) {
        return <p>You need to log in.</p>
    }
    return (
      <div style={style}>
        <img style={{width: 200, borderRadius: '50%'}} src={img} alt="profile img" 
        />
        <h1 style={{margin: 5}}>{name}</h1>
        <h3 style={{margin: 5}}>@{handle}</h3>
        <button onClick={addFriend}>Add Friend</button>
      </div>
    )
  }
}



Proptypes.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired, 
  img: PropTypes.string.isRequired, 
  authed: PropTypes.bool.isRequired, 
  style: PropTypes.object, 
  addFriend: PropTypes.func.isRequired, 
}


