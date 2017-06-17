import uuid from 'uuid';
import { actions } from 'api/actions/auth';

const addFirebaseUser = (user, store) => {
   const { displayName, photoURL, email, uid } = user;
   const ref = firebase.database().ref(`/users/${uid}`);
   ref.update({
     displayName,
     photoURL,
     email,
   }).then(() => {
     store.dispatch({
       type: actions.logged,
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
        // const ref = firebase.database().ref(`/breweries`);
        // ref.on('value', data => {
        //   store.dispatch({
        //     type: 'BREWERY_LIST_REQUEST_SUCCESS',
        //     payload: data.val(),
        //   });
        // });
      }


      if (action.type === actions.login) {
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
