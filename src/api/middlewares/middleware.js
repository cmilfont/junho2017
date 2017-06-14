import uuid from 'uuid';
import firebase from 'firebase';
import { actions as actionsAuth } from 'api/actions/auth';
import { actions as actionsBrewery } from 'api/actions/brewery';
import { push } from 'react-router-redux';

const config = {
  apiKey: "AIzaSyBp4WfcFIutxqzrGbCxcro9YxRUhHgoWe4",
  authDomain: "feedback-4a295.firebaseapp.com",
  databaseURL: "https://feedback-4a295.firebaseio.com",
  projectId: "feedback-4a295",
  storageBucket: "feedback-4a295.appspot.com",
  messagingSenderId: "952975869388"
};
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
