import uuid from 'uuid';
import firebase from 'firebase';
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

const addFirebaseUser = (user, store) => {
   const { displayName, photoURL, email, uid } = user;
   const ref = firebase.database().ref(`/users/${uid}`);
   ref.update({
     displayName,
     photoURL,
     email,
   }).then(() => {
     store.dispatch({
       type: 'logged',
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


      if (action.type === 'login') {
        const authProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
                .signInWithPopup(authProvider)
                .then((payload) => {
                  addFirebaseUser(payload.user, store);
                });
      }
      return dispatch(action);
    }
  }
}

export default  middleware;
