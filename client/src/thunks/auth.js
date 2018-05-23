import { actions } from '../reducers/auth';
import { signupUser } from './api';

export const signup = payload => async dispatch => {
  dispatch(actions.requestSignup());
  try {
    const { email, password, name } = payload;
    const { data } = await signupUser(email, password, name);
    dispatch(actions.successSignup(data));
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureSignup(error));
  }
};
