import React, { Component } from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, withRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import uuid from 'uuid';
import './App.css';

import Login from 'components/auth/container';
import Home from 'components/home/container';

import middleware from 'api/middlewares/middleware.js';
import reducers from 'api/reducers';
window.uuid = uuid;

class App extends Component {

  componentWillMount() {
    const composeEnhancers = composeWithDevTools({});
    this.history = createHistory();
    const routerReduxMiddleware = routerMiddleware(this.history);
    const middlewares = [
      middleware,
      routerReduxMiddleware,
    ];
    this.store = createStore(
      combineReducers({
        ...reducers,
        router: routerReducer
      }),
      composeEnhancers(applyMiddleware(...middlewares))
    );
  }

  componentDidMount() {
    window.firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (payload) => {
    const action = {
      type: 'logged',
      payload,
    };
    this.store.dispatch(action);
  }

  render() {
    return (
      <Provider store={this.store}>
        <ConnectedRouter history={this.history}>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
