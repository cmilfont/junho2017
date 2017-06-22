import { takeLatest, put } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { actions } from 'api/actions/beer';

function* editSuccessfull({ payload, payload1, payload2 }) {
  const ref = yield window.firebase.database().ref(
    `users/${payload1}/breweries/${payload2}/${payload.get('uid')}`
  );
  yield ref.update(payload.toJS());
  yield put({
    type: actions.edit,
    payload: fromJS({}),
    payload1,
    payload2,
  });
  yield put({
    type: actions.request,
    payload1,
    payload2,
  });
}

export default function* watchEditBrewery() {
  yield takeLatest(actions.update, editSuccessfull);
}
