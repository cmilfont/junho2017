import { fork } from 'redux-saga/effects';

import watchBreweries from 'api/sagas/brewery/watchBreweries';
import watchRemoveBrewery from 'api/sagas/brewery/watchRemoveBrewery';
import watchAddBrewery from 'api/sagas/brewery/watchAddBrewery';
import watchEditBrewery from 'api/sagas/brewery/watchEditBrewery';

import watchBeers from 'api/sagas/beer/watchBeers';
import watchRemoveBeer from 'api/sagas/beer/watchRemoveBeer';
import watchAddBeer from 'api/sagas/beer/watchAddBeer';
import watchEditBeer from 'api/sagas/beer/watchEditBeer';

import watchLogin from 'api/sagas/login/watchLogin';
import watchLogout from 'api/sagas/login/watchLogout';

function* rootSaga() {
  yield fork(watchBreweries);
  yield fork(watchAddBrewery);
  yield fork(watchEditBrewery);
  yield fork(watchRemoveBrewery);

  yield fork(watchBeers);
  yield fork(watchAddBeer);
  yield fork(watchRemoveBeer);
  yield fork(watchEditBeer);

  yield fork(watchLogin);
  yield fork(watchLogout);
}

export default rootSaga;
