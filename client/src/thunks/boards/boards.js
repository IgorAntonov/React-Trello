import { arrayToObj } from 'Src/helpers';
import { actions } from 'Src/ducks/boards';
import { getUserBoards } from '../api';

export const fetchUserBoards = () => async dispatch => {
  dispatch(actions.requestBoards());

  try {
    const { data: { boards } } = await getUserBoards();

    const omitted = boards.map(board => {
      const { __v, ...rest } = board;
      return rest;
    });
    const result = arrayToObj(omitted, '_id');

    dispatch(actions.successBoards(result));
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};
