import { takeLatest, call, put } from 'redux-saga/effects';
import { actions } from 'api/actions/beer';

const fetchBreweries = (ref) => {
  return new Promise((resolve, reject) => {
    ref.on('value', data => {
      resolve(data.val())
    });
  });
}

function* requestSuccessfull({ payload1, payload2 }) {
  console.log(`/users/${payload1}/breweries/${payload2}/`);
  try {
    const ref = yield window.firebase.database().ref(
      `/users/${payload1}/breweries/${payload2}/`
    );
    yield ref.update({});

    const payload = yield call(fetchBreweries, ref);
    yield put({ type: actions.requestSuccess, payload });
  } catch(error) {
    console.log("ERRAO DA PORRA", error);
  }
}

export default function* watchBreweries() {
  yield takeLatest(actions.request, requestSuccessfull);
}
