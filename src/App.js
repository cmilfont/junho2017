import React, { Component } from 'react';
import Home from 'components/home';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import uuid from 'uuid';
import './App.css';

import middleware from 'api/middlewares/middleware.js';

window.uuid = uuid;

function listReducer(list = [], action) {
  if (action.type === 'changed') {
    return action.payload;
  }
  return list;
}

function userReducer(user = {}, action) {
  if (action.type === 'logged') {
    return action.payload;
  }
  return user;
}

class App extends Component {

  render() {

    const middlewares = [middleware];

    const store = createStore(
      combineReducers({
        user: userReducer,
        list: listReducer,
      }),
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
