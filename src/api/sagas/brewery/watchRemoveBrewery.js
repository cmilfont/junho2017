import { takeLatest, put } from 'redux-saga/effects';
import { actions } from 'api/actions/brewery';

function* removeSuccessfull({ payload: uid }) {
  const ref = yield window.firebase.database().ref(`/breweries/${uid}`);
  yield ref.remove();
  yield put({
    type: actions.request
  });
}

export default function* watchRemoveBrewery() {
  yield takeLatest(actions.remove, removeSuccessfull);
}
