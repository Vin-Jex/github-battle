import { Component } from 'react';
// import Popular from './Popular'
import Battle from './Battle';
// import DynamicRouting from './tutorials/DynamicRouting';
// import Tutorial from '../components/tutorials/Tutorial'
// import IMG from '../asset/img-2.jpg'
import './App.css';
import { ThemeProvider } from '../contexts/theme';
import Nav from './Nav';
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
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              {/* <DynamicRouting /> */}
              <Battle />
              {/* <Tutorial user={{ name: 'Jane Doe', username: 'janedoe', img: IMG }} /> */}
            </div>
          </div>
        </ThemeProvider>
      );
  }
}

export default App;