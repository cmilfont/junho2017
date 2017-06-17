import { fork } from 'redux-saga/effects';
import watchBreweries from 'api/sagas/watchBreweries';
import watchRemoveBrewery from 'api/sagas/watchRemoveBrewery';
import watchAddBrewery from 'api/sagas/watchAddBrewery';
import watchEditBrewery from 'api/sagas/watchEditBrewery';

function* rootSaga() {
  yield fork(watchBreweries);
  yield fork(watchAddBrewery);
  yield fork(watchEditBrewery);
  yield fork(watchRemoveBrewery);
}

export default rootSaga;
