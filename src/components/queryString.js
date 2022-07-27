// App.js

import { Component } from "react";
import { Route } from "react-router-dom";

<Route path='/' component={Dashboard} />
import queryString from 'query-string'
// Dashboard.js

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props.location.search) //*?sorton=market-cap*;
    const params = new URLSearchParams(this.props.location.search)
    // params.get('sorton')
    const values = queryString.parse(this.props.location.search)
    console.log(values.sorton); // market-cap

    fetchDashboardData(values.sorton)
  }
  render() {

  }
}