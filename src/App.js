import React, { Component } from 'react';
import Home from 'components/home';
import Store from 'milflux/store';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Store>
          <Home />
        </Store>
      </div>
    );
  }
}

export default App;
