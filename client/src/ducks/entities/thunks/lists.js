import { refreshUserBoards } from './common';
import { actions } from '../actions';
import { listAPI } from './api';

export const renameList = (newTitle, listId) => async dispatch => {
  try {
    await listAPI.putName(newTitle, listId);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
  dispatch(refreshUserBoards());
};

export const createList = (boardId, title) => async dispatch => {
  try {
    await listAPI.postNew(boardId, title);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
  dispatch(refreshUserBoards());
};

export const deleteList = (boardId, listId) => async (dispatch, getState) => {
  const { lists } = getState().entities.boards[boardId];
  const filtered = lists.filter(id => id !== listId);
  const payload = { filtered, boardId };
  dispatch(actions.deleteList(payload));

  try {
    await listAPI.delete(boardId, listId);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
  dispatch(refreshUserBoards());
};

