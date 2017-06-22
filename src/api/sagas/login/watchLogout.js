import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { actions as authActions } from 'api/actions/auth';

function* prepareLogout() {
  yield window.firebase.auth().signOut();
  yield put(push('/login'));
}

export default function* watchLogout() {
  yield takeLatest(authActions.logout, prepareLogout);
}
