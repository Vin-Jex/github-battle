import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Class_field extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }
  defaultProps = {
    label: 'Username'
  }
  state = {
       username: ''
    }
  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  
  render() {
    return (
      <div>Class_field</div>
    )
  }
}


/**
|--------------------------------------------------
| Using the ` # ` sign to create truely private 
| functionsor make anything private
|--------------------------------------------------
*/