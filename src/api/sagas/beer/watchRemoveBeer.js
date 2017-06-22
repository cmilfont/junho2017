import { takeLatest, put } from 'redux-saga/effects';
import { actions } from 'api/actions/beer';

function* removeSuccessfull({ payload: uid, payload1, payload2 }) {
  const ref = yield window.firebase.database().ref(
    `/users/${payload1}/breweries/${payload2}/${uid}`
  );
  yield ref.remove();
  yield put({
    type: actions.request,
    payload1,
    payload2,
  });
}

export default function* watchRemoveBrewery() {
  yield takeLatest(actions.remove, removeSuccessfull);
}
