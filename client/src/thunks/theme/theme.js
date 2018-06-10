import { actions } from 'Src/ducks/theme';
import { updateTheme, getTheme } from '../api';

export const setTheme = theme => async dispatch => {
  dispatch(actions.requestTheme());
  try {
    const { data } = await updateTheme(theme);
    dispatch(actions.successTheme(data.theme));
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureTheme(error));
  }
};

export const fetchTheme = () => async dispatch => {
  dispatch(actions.requestTheme());
  try {
    const { data } = await getTheme();
    dispatch(actions.successTheme(data.theme));
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureTheme(error));
  }
};
