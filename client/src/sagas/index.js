import { takeLatest } from 'redux-saga/effects';

import { types as authTypes } from '../reducers/auth';
import * as authSagas from './auth';

export function* rootSaga() {
  yield takeLatest(authTypes.SIGNUP_REQUEST, authSagas.signup);
}
