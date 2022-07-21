import React, { Component } from 'react'

/*************** Controlled Component ***************/
export default class Form extends Component {
    constructor (props) {
        super( props )

        this.state = {
            email: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    handleSubmit() {
        alert(` Your email ${this.state.email} is submitted` )
    }
  render() {
    return (
      <div>
        <pre>
            Your email is {this.state.email}
        </pre>
        <br />
        <input 
        type="text"
        placeholder='Email'
        value={this.state.email}
        onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>

        <Form2 />        
      </div>


    )
  }
}


/*************** Uncontrolled Component ***************/
class Form2 extends Component {
    constructor(props) {
        super(props)

        this.input = React.createRef('')
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        alert(`Your email ${this.input.current.value} have been received`)
    }
  render() {
    return (
      <div>
        <input
            type='text'
            placeholder='Enter email'
            ref={this.input}
            />
            <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

