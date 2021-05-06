import React, { Component } from 'react';
import Blog from './containers/Blog/Blog';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {


  render() {
    return (
      // <BrowserRouter basename="/my-app"> if we want to start our appp with our url we can define here otherwise the default is "/"
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
