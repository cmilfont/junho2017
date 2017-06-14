import uuid from 'uuid';
import firebase from 'firebase';
import { actions as actionsAuth } from 'api/actions/auth';
import { actions as actionsBrewery } from 'api/actions/brewery';
import { push } from 'react-router-redux';

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

firebase.initializeApp(config);
window.firebase = firebase;

const addFirebaseUser = (user,store) => {
  const { displayName, photoURL, email, uid } = user;
  const ref = firebase.database().ref(`/users/${uid}`);

  ref.update({
    displayName,
    photoURL,
    email,
  }).then(() => {
    store.dispatch({
      type: actionsAuth.logged,
      payload: user,
    })
  });
}

function middleware(store) {
  return dispatch => {
    return action => {

      if(action.type === actionsBrewery.edit){
        const { uid } = action.payload;
        const ref = firebase.database().ref(`/breweries/${uid}`);
        ref.update(action.payload);
      }

      if(action.type === actionsBrewery.add){
        const uid = uuid();
        const ref = firebase.database().ref(`/breweries/${uid}`);
        ref.update({
          uid,
          name: '',
          brewery: '',
        });
      }

      if(action.type === actionsBrewery.remove){
        const { uid } = action.payload;
        const ref = firebase.database().ref(`/breweries/${uid}`);
        ref.remove();
      }

      if(action.type === actionsBrewery.request){
        const ref = firebase.database().ref(`/breweries`);
        ref.on('value', data => {
          store.dispatch({
            type: actionsBrewery.requestSuccess,
            payload: data.val(),
          });
        });
      }

      if(action.type === actionsAuth.login){
        const authProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
          .signInWithPopup(authProvider)
          .then((payload) => {
              addFirebaseUser(payload.user, store);
          });
      }

      if(action.type === actionsAuth.logout){
        firebase.auth().signOut()
        .then( () => {
          store.dispatch({
            type: actionsAuth.logoutSuccess,
            payload: {},
          });
          store.dispatch(push('/login'));
        }, error => {
          console.log("Error on logging out user");
        });
      }

      return dispatch(action);
    }
  }
}

export default middleware;
