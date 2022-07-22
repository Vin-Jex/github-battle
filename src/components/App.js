import './App.css';
import { Component } from 'react';
import Popular from './Popular'
import Battle from './Battle';
// import Tutorial from '../components/tutorials/Tutorial'
// import IMG from '../asset/img-2.jpg'

class App extends Component {
  state = {  } 
  render() { 
      return (
          <div className="container">
                <Battle />
                <Popular />
              {/* <Tutorial user={{ name: 'Jane Doe', username: 'janedoe', img: IMG }} /> */}
          </div>
      );
  }
}

export default App;