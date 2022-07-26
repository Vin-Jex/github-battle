import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h2>{match.params.topicId}</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Component</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v.state</Link>
      </li>
    </ul> 

    <Route path='/topics/:topicId' component={Topic} />
    <Route exact path={match.url} render={() => (
      <h2>Please select a topic</h2>
    )} />
  </div>
)


export default class DynamicRouting extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/topic">Topic</Link>
            </li>
          </ul>
          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/topic" component={Topic} />
        </div>
      </Router>
    )
  }
}
