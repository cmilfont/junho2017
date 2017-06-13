import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import firebase from 'firebase';

class Store extends React.Component {

  static childContextTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
  }

  state = {
    list: [],
    user: {},
  }

  getChildContext() {
    return {
      state: this.state,
      dispatch: this.dispatch,
    };
  }

  dispatch = action => {

    if (action.type === 'load') {
      this.load(action.payload);
    }

    if (action.type === 'add') {
      this.add();
    }

    if (action.type === 'remove') {
      this.remove(action.payload);
    }

    if (action.type === 'edit') {
      this.edit(action.payload);
    }

    if (action.type === 'login') {
      this.login();
    }

  }

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDF8QusstyjG6K4xRFbabmsGs3se3WYA_o",
      authDomain: "addressbook-4960c.firebaseapp.com",
      databaseURL: "https://faddressbook-4960c.firebaseio.com",
      projectId: "addressbook-4960c",
      storageBucket: "addressbook-4960c.appspot.com",
      messagingSenderId: "71457068040"
    };
    firebase.initializeApp(config);
    window.firebase = firebase;
  }

  login = () => {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
            .signInWithPopup(authProvider)
            .then((payload) => {
              this.addFirebaseUser(payload.user);
            });
  }

  addFirebaseUser = user => {
   const { displayName, photoURL, email, uid } = user;
   const ref = firebase.database().ref(`/users/${uid}`);
   ref.update({
     displayName,
     photoURL,
     email,
     list: this.state.list,
   }).then(() => {
     this.setState({
       ...this.state,
        user,
     })
   });
 };

  load = (list) => {
    this.setState({
      ...this.state,
      list,
    });
  }

  remove = (uid) => {
    this.setState({
      ...this.state,
      list: this.state.list.reduce(
        (newList, item) => {
          if (item.uid !== uid) {
            newList.push(item);
          }
          return newList;
        },
        []
      ),
    });
  }

  add = () => {
    const newList = this.state.list;
    newList.push({ name: '', uid: uuid() });
    this.setState({
      ...this.state,
      list: newList,
    });
  }

  edit = ({ target: { dataset, name, value } }) => {
    const { list } = this.state;
    this.setState({
      ...this.state,
      list: list.map(item => {
        if (item.uid === name) {
          if (dataset['name'] === 'brewery') {
            item.brewery = value;
          }
          if (dataset['name'] === 'name') {
            item.name = value;
          }
          if (dataset['name'] === 'premium') {
            item.premium = value;
          }
        }
        return item;
      }),
    });
  }

  render () {
    return this.props.children;
  }
}

export default Store;
