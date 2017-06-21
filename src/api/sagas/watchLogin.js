import { takeLatest } from 'redux-saga/effects';
import { actions as authActions } from 'api/actions/auth';

function* prepareLogin() {
  const authProvider = new window.firebase.auth.GoogleAuthProvider();
  const { user: payload } = yield window.firebase.auth().signInWithPopup(authProvider);
  const { displayName, photoURL, email, uid } = payload;
  const ref =  yield window.firebase.database().ref(`/users/${uid}`);
  yield ref.update({ displayName, photoURL, email });
}

export default function* watchLogin() {
  yield takeLatest(authActions.login, prepareLogin);
}
