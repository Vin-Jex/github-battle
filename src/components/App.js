import { Component } from 'react';
import Popular from './Popular'
import Battle from './Battle';
import { ThemeProvider } from '../contexts/theme';
import Nav from './Nav';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Result from './Result';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       theme: 'light',
       toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
       }
    }
  }
  
  render() { 
      return (
        <Router>
          <ThemeProvider value={this.state}>
            <div className={this.state.theme}>
              <div className="container">
                <Nav />

                <Switch>
                  <Route exact path='/' component={Popular} />
                  <Route exact path='/battle' component={Battle} />
                  <Route path='/battle/result' component={Result} />
                  <Route render={() => <h2>404</h2>} />
                </Switch>
              </div>
            </div>
          </ThemeProvider>       
        </Router>
      );
  }
}

export default App;