import React, { Component } from 'react'
import { 
  Router, 
  Link, 
  BrowserRouter as Route, 
} from 'react-router-dom'


const Home = () => (
  <div>
    <h2>HOME</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
)


class DynamicRouting extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>

          <hr />

            <Route path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/topics' component={Topics} />
        </div>
        
      </Router>
    )

  }
}


export default  DynamicRouting