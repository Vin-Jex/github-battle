import React, { Component } from 'react'

// New Binding
var Animal = function (color, name , type) {
  this.color = color;
  this.name = name;
  this.type = type;
}

var lion = new Animal('White', 'Leo', 'Horse')



// Window Binding
var sayAge = function () {
  console.log(window.age);
};

var me = {
  age: 23
};
window.age = 43534;
sayAge()


// var sayName = function (element, element1, element2, element3, element4) {
//   console.log('My name is ' + this.name + ' and I know ' + element + ' | ' + element1 + ' | ' + element2 + ' | ' + element3 + ' | ' + element4);
// }

// var vincent = {
//   name: 'Mike',
//   age: 25
// }
// var language = [
//   'JavaScript', 'CSS', 'Python', 'Nodejs', 'Php'
// ]

// var newFn = sayName.bind(vincent, language[0], language[1], language[2], language[3], language[4]);
// console.log(newFn);
// newFn()

export default class State extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       mode: 'light'
    }

    this.handleLightMode = this.handleLightMode.bind(this)
    this.handleDarkMode = this.handleDarkMode.bind(this)
  }

  handleLightMode() {
    // Change 'mode' on the component's state to 'light'
    this.setState({
      mode: 'light'
    })
   }

  handleDarkMode() {
    // Change 'mode' on the component's state to 'dark'
    this.setState({
      mode: 'dark'
    })
   }

  render() {
    const { mode } = this.state
    return (
      <div style={{
        height: '100',
        background: mode === 'light' ? '#fff' : '#000'
      }}>
        {mode === 'light' 
          ? <button onClick={this.handleDarkMode}>Dark Mode</button> :
          <button onClick={this.handleLightMode}>Light Mode</button>
        }
        <Count />
      </div>
    )
  }
}

class Count extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    // increment count by 1
    this.setState(({ count }) => ({
      count: count + 1
    })
  )} 

  decrement() {
    // decrement count by 1
    this.setState(({ count }) => ({
      count: count - 1
    })
  )}
  
  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
