import { Component } from 'react';
import Popular from './Popular'
import Battle from './Battle';
import { ThemeProvider } from '../contexts/theme';
import Nav from './Nav';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Result from './Result';

const style = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '300px',
  },
  span: {
    marginLeft: '2%'
  }
}

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
              <div className="container"
                onCopyCapture={(e) => {
                  e.preventDefault()
                  return false;
                }} 
                onCutCapture={(e) => {
                  e.preventDefault()
                  return false;
                }}
                onCopy={(e) => {
                  e.preventDefault()
                  return false;
                }}
                onPaste={(e) => {
                  e.preventDefault()
                  return false;
                }}
                onCut={(e) => {
                  e.preventDefault()
                  return false;
                }}>
                <Nav />

                <Switch>
                  <Route exact path='/' component={Popular} />
                  <Route exact path='/battle' component={Battle} />
                  <Route path='/battle/result' component={Result} />
                  <Route render={() => <h1 style={style.header}>404 <span style={style.span}> Not Found! </span></h1>} />
                </Switch>
              </div>
            </div>
          </ThemeProvider>       
        </Router>
      );
  }
}

export default App;