import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

function* prepareLogout() {
  yield window.firebase.auth().signOut();
  yield put(push('/login'));
}

export default function* watchLogout() {
  yield takeLatest('logout', prepareLogout);
}
