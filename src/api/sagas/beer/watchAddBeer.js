import { takeLatest, put } from 'redux-saga/effects';
import { actions } from 'api/actions/beer';
import uuid from 'uuid';

function* addSuccessfull({ payload1, payload2 }) {
  const uid = uuid();
  const ref = yield window.firebase.database().ref(
    `users/${payload1}/breweries/${payload2}/${uid}`
  );
  yield ref.update({ uid, name: '', premium: false });
  yield put({
    type: actions.request,
    payload1,
    payload2,
  });
}

export default function* watchAddBrewery() {
  yield takeLatest(actions.add, addSuccessfull);
}
