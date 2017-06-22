import { takeLatest, call, put } from 'redux-saga/effects';
import { actions } from 'api/actions/brewery';

const fetchBreweries = (ref) => {
  return new Promise((resolve, reject) => {
    ref.on('value', data => {
      resolve(data.val())
    });
  });
}

function* requestSuccessfull() {
  try {
    const ref = yield window.firebase.database().ref(`/breweries`);
    const payload = yield call(fetchBreweries, ref);
    yield put({ type: actions.requestSuccess, payload });
  } catch(error) {
    console.log("ERRAO DA PORRA", error);
  }
}

export default function* watchBreweries() {
  yield takeLatest(actions.request, requestSuccessfull);
}
