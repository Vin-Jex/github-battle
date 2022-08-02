import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

const WillMatch  = () => {
  return (
    <div>
      <h1>Matched!</h1>
    </div>
  )
}


const NoMatch = ({ location }) => {
  return (
    <div>
      No Match for <code> { location.pathname } </code>
    </div>
  )
}




export default class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <u>
           <li>
            <Link to='/' >
              Home
            </Link>
           </li>
           <li>
            <Link to='/old-match' >
              Old Match to be redirected
            </Link>
           </li>
           <li>
            <Link to='/will-match' >
              Will Match
            </Link>
           </li>
           <li>
            <Link to='/will-not-match' >
              Will Not Match
            </Link>
           </li>
           <li>
            <Link to='/also/will/not/match' >
              Also Will Not Match
            </Link>
           </li>
          </u>

          <Switch>
            <Route path='/' exact component={Home} />
            <Redirect from='/old-match' to='/will-match' />
            <Route path='/will-match' component={WillMatch} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}
