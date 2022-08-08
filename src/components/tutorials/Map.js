import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class DynamicImport extends Component {
  state = {
    component: null
  }

  componentWillMount() {
    this.props.load()
      .then((mod) => this.setState(() => ({
        component: mod.default
      })))
  }

  render() {
    return this.props.children(this.state.component)
  }
}

const Settings = (props) => (
  <DynamicImport load={() => import('./Location') }>
    {(Component) => Component === null
    ? <h1>Loading</h1>
    : <Component {...props} /> }
  </DynamicImport>
)



export default class Map extends Component {

  state = {
    user: {
      name: 'John Doe',
      handle: '@johndoe'
    },
    location: null
  }

  chooseLocation = () => {
    import('./Location')
      .then((mod) => this.setState(() => ({
        location: mod.default
      })))
  }
  render() {
    const { user, location: Location } = this.state
    return (
      <div style={{height: '600px', width: '600px'}}>
        <h1>{user.name}</h1>
        <h4>{user.handle}</h4>
        <h4>Choose your Location (Optional)</h4>
        { Location !== null 
        ? <Location /> 
        : <button onClick={this.chooseLocation}>
          Choose Location
        </button>}

        <App />
      </div>
    )
  }
}


class Home extends Component {
  render() {
    return (
      <div>Home</div>
    )
  }
}


class Topics extends Component {
  render() {
    return (
      <div>Topics</div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route exact path='/topics' component={Topics} />
          <Route exact path='/Settings' component={Settings} />
        </div>
      </Router>
    )
  }
}
