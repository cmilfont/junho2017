import { takeLatest, call, put } from 'redux-saga/effects';
import { actions } from 'api/actions/brewery';

function* editSuccessfull({ payload }) {
  const ref = yield window.firebase.database().ref(`/breweries/${payload.uid}`);
  yield ref.update(payload);
  yield put({ type: actions.request });
}

export default function* watchEditBrewery() {
  yield takeLatest(actions.edit, editSuccessfull);
}
