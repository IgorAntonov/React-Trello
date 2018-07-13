import { actions } from './actions';
import { authAPI } from './api';

export const signupUser = ({ email, password, name }) => async dispatch => {
  dispatch(actions.requestAuth());
  try {
    const {
      data: { _id: userId, name: username }
    } = await authAPI.signup(email, password, name);

    dispatch(actions.successCurrentUser({ userId, username }));
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureAuth(error));
  }
};

export const fetchUser = () => async dispatch => {
  dispatch(actions.requestAuth());
  try {
    const {
      data: { _id: userId, name: username }
    } = await authAPI.getUser();

    dispatch(actions.successCurrentUser({ userId, username }));
  } catch (err) {
    dispatch(actions.failureCurrentUser());
  }
};

export const loginUser = ({ email, password }) => async dispatch => {
  dispatch(actions.requestAuth());
  try {
    const {
      data: { _id: userId, name: username }
    } = await authAPI.login(email, password);
    dispatch(actions.successCurrentUser({ userId, username }));
  } catch (err) {
    const { data } = err.response;
    dispatch(actions.failureAuth(data));
  }
};

export const logoutUser = () => async dispatch => {
  dispatch(actions.requestAuth());
  try {
    const { data } = await authAPI.logout();
    if (data.message === 'ok') dispatch(actions.successLogout());
  } catch (err) {
    dispatch(actions.failureLogout());
  }
};
