import React, { Component } from 'react';
import Home from 'components/home';
import Store from 'milflux/store';
import firebase from 'firebase';
import uuid from 'uuid';
import './App.css';

const config = {
  apiKey: "AIzaSyDGYMxpnYaAJYyquEUM6Y__yQjhPP_skx0",
  authDomain: "feedback-140018.firebaseapp.com",
  databaseURL: "https://feedback-140018.firebaseio.com",
  projectId: "feedback-140018",
  storageBucket: "feedback-140018.appspot.com",
  messagingSenderId: "71457068040"
};
firebase.initializeApp(config);
window.firebase = firebase;
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
