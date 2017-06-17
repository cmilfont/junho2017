import { takeLatest, call, put } from 'redux-saga/effects';
import { actions } from 'api/actions/brewery';
import uuid from 'uuid';

function* addSuccessfull() {
  const uid = uuid();
  const ref = yield window.firebase.database().ref(`/breweries/${uid}`);
  yield ref.update({ uid, name: '', brewery: '' });
  yield put({ type: actions.request });
}

export default function* watchAddBrewery() {
  yield takeLatest(actions.add, addSuccessfull);
}
