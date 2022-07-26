import { Component } from 'react';
import Popular from './Popular'
import Battle from './Battle';
import './App.css';
import { ThemeProvider } from '../contexts/theme';
import Nav from './Nav';
import { Route, BrowserRouter as Router } from 'react-router-dom';
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

                
                <Route exact path='/' component={Popular} />
                <Route path='/battle' component={Battle} />

              </div>
            </div>
          </ThemeProvider>
        </Router>
      );
  }
}

export default App;