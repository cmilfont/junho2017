import React, { Component } from 'react';
import Home from 'components/home';
import Store from 'milflux/store';
import uuid from 'uuid';
import './App.css';

window.uuid = uuid;

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
