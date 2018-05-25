import { actions } from '../reducers/auth';
import { signupUser, fetchCurrentUser, loginUser } from './api';

export const signup = ({ email, password, name }) => async dispatch => {
  dispatch(actions.requestSignup());
  try {
    const { data } = await signupUser(email, password, name);
    dispatch(actions.successSignup(data));
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureSignup(error));
  }
};

export const fetchUser = () => async dispatch => {
  dispatch(actions.requestCurrentUser());
  try {
    const { data } = await fetchCurrentUser();
    dispatch(actions.successCurrentUser(data));
  } catch (err) {
    dispatch(actions.failureCurrentUser());
  }
};

export const login = ({ email, password }) => async dispatch => {
  dispatch(actions.requestLogin());
  try {
    const { data } = await loginUser(email, password);
    dispatch(actions.successLogin(data));
  } catch (err) {
    const { data } = err.response;
    dispatch(actions.failureLogin(data));
  }
};
