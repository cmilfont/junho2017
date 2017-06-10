import React, { Component } from 'react';
import Home from 'components/home';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import uuid from 'uuid';
import './App.css';

import middleware from 'api/middlewares/middleware.js';
import reducers from 'api/reducers';
window.uuid = uuid;

class App extends Component {

  render() {
    const middlewares = [middleware];
    const store = createStore(
      combineReducers(reducers),
      applyMiddleware(...middlewares)
    );

    return (
      <div className="App">
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    );
  }
}

export default App;
