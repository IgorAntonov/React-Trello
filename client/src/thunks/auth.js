import axios from 'axios';

import { requestSignup, successSignup, failureSignup } from '../reducers/auth';

const signupApi = (email, password, name) => axios({
  method: 'post',
  url: '/api/auth/signup',
  data: {
    email,
    password,
    name
  }
});

export const signup = payload => async dispatch => {
  dispatch(requestSignup());
  try {
    const { email, password, name } = payload;
    const { data } = await signupApi(email, password, name);
    dispatch(successSignup(data));
  } catch (err) {
    const { error } = err.response.data;
    dispatch(failureSignup(error));
  }
};
