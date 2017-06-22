import { takeLatest, put } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { actions } from 'api/actions/brewery';

function* editSuccessfull({ payload }) {
  const ref = yield window.firebase.database().ref(`/breweries/${payload.get('uid')}`);
  yield ref.update(payload.toJS());
  yield put({ type: actions.edit, payload: fromJS({}) });
  yield put({ type: actions.request });
}

export default function* watchEditBrewery() {
  yield takeLatest(actions.update, editSuccessfull);
}
