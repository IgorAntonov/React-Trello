import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import { types } from '../reducers/auth';

const signupApi = (email, password, name) => axios({
  method: 'post',
  url: '/api/auth/signup',
  data: {
    email,
    password,
    name
  }
});


export function* signup({ payload }) {
  try {
    const { email, password, name } = payload;
    const response = yield call(signupApi, email, password, name);
    const { data } = response;

    yield put({ type: types.SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.SIGNUP_FAILURE, error: error.message });
  }
}
