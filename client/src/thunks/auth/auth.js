import { actions } from 'Src/ducks/auth';
import { signupUser, fetchCurrentUser, loginUser, logoutUser } from '../api';

export const signup = ({ email, password, name }) => async dispatch => {
  dispatch(actions.requestApi());
  try {
    const {
      data: { _id: userId, name: username }
    } = await signupUser(email, password, name);

    dispatch(actions.successCurrentUser({ userId, username }));
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureAuth(error));
  }
};

export const fetchUser = () => async dispatch => {
  dispatch(actions.requestApi());
  try {
    const {
      data: { _id: userId, name: username }
    } = await fetchCurrentUser();

    dispatch(actions.successCurrentUser({ userId, username }));
  } catch (err) {
    dispatch(actions.failureCurrentUser());
  }
};

export const login = ({ email, password }) => async dispatch => {
  dispatch(actions.requestApi());
  try {
    const {
      data: { _id: userId, name: username }
    } = await loginUser(email, password);
    dispatch(actions.successCurrentUser({ userId, username }));
  } catch (err) {
    const { data } = err.response;
    dispatch(actions.failureAuth(data));
  }
};

export const logout = () => async dispatch => {
  dispatch(actions.requestApi());
  try {
    const { data } = await logoutUser();
    if (data.message === 'ok') dispatch(actions.successLogout());
  } catch (err) {
    dispatch(actions.failureLogout());
  }
};

