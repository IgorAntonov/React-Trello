import { arrayToObj } from 'Src/helpers';
import { actions } from 'Src/ducks/lists';
import { getBoardLists } from '../api';

export const fetchBoardLists = boardId => async dispatch => {
  dispatch(actions.requestLists());

  try {
    const { data: { lists } } = await getBoardLists(boardId);

    const omitted = lists.map(board => {
      const { __v, ...rest } = board;
      return rest;
    });
    const result = arrayToObj(omitted, '_id');

    dispatch(actions.successLists(result));
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureLists(error));
  }
};
