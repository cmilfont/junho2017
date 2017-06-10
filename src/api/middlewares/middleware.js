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
