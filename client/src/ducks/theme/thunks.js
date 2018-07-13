import { actions } from './actions';
import { themeAPI } from './api';

export const setTheme = theme => async dispatch => {
  dispatch(actions.requestTheme());
  try {
    const { data } = await themeAPI.put(theme);
    dispatch(actions.successTheme(data.theme));
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureTheme(error));
  }
};

export const fetchTheme = () => async dispatch => {
  dispatch(actions.requestTheme());
  try {
    const { data } = await themeAPI.get();
    dispatch(actions.successTheme(data.theme));
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureTheme(error));
  }
};
