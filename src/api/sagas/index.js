import { fork } from 'redux-saga/effects';
import watchBreweries from 'api/sagas/watchBreweries';
import watchRemoveBrewery from 'api/sagas/watchRemoveBrewery';
import watchAddBrewery from 'api/sagas/watchAddBrewery';
import watchEditBrewery from 'api/sagas/watchEditBrewery';

import watchLogin from 'api/sagas/watchLogin';
import watchLogout from 'api/sagas/watchLogout';

function* rootSaga() {
  yield fork(watchBreweries);
  yield fork(watchAddBrewery);
  yield fork(watchEditBrewery);
  yield fork(watchRemoveBrewery);
  yield fork(watchLogout);
  yield fork(watchLogin);
}

export default rootSaga;
