import uuid from 'uuid';
import firebase from 'firebase';
import ActionTypes from '../constants/action_types';
import { push } from 'react-router-redux';

const config = {
  apiKey: "AIzaSyDF8QusstyjG6K4xRFbabmsGs3se3WYA_o",
  authDomain: "addressbook-4960c.firebaseapp.com",
  databaseURL: "https://addressbook-4960c.firebaseio.com",
  projectId: "addressbook-4960c",
  storageBucket: "addressbook-4960c.appspot.com",
  messagingSenderId: "71457068040"
};
firebase.initializeApp(config);
window.firebase = firebase;

const addFirebaseUser = (user, store) => {
   const { displayName, photoURL, email, uid } = user;
   const ref = firebase.database().ref(`/users/${uid}`);
   ref.update({
     displayName,
     photoURL,
     email,
   }).then(() => {
     store.dispatch({
       type: ActionTypes.logged,
       payload: user,
     })
   });
 }

function middleware(store) {
  return dispatch => {
    return action => {

      if (action.type === 'BREWERY_LIST_EDIT') {
        const { uid } = action.payload;
        const ref = firebase.database().ref(`/breweries/${uid}`);
        ref.update(action.payload);
      }

      if (action.type === 'BREWERY_LIST_ADD') {
        const uid = uuid();
        const ref = firebase.database().ref(`/breweries/${uid}`);
        ref.update({
          uid,
          name: '',
          brewery: '',
        })
      }

      if (action.type === 'BREWERY_LIST_REQUEST') {
        const ref = firebase.database().ref(`/breweries`);
        ref.on('value', data => {
          store.dispatch({
            type: 'BREWERY_LIST_REQUEST_SUCCESS',
            payload: data.val(),
          });
        });
      }

      if (action.type === ActionTypes.remove) {
        const uid  = action.payload;
        const ref = firebase.database().ref(`/breweries/${uid}`);
        ref.remove();
      }

      if (action.type === ActionTypes.login) {
        const authProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
                .signInWithPopup(authProvider)
                .then((payload) => {
                  addFirebaseUser(payload.user, store);
                });
      }

      if (action.type === ActionTypes.logout) {
        const authProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
                .signOut()
                .then((payload) => {
                  dispatch(push('/login'));
                });
      }
      return dispatch(action);
    }
  }
}

export default  middleware;
