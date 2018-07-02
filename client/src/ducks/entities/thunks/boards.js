import { actions } from '../actions';
import { refreshUserBoards } from './common';
import { boardAPI } from './api';

export const renameBoard = (newName, boardId) => async dispatch => {
  try {
    await boardAPI.putName(newName, boardId);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
  dispatch(refreshUserBoards());
};

export const createBoard = name => async dispatch => {
  try {
    await boardAPI.postNew(name);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
  dispatch(refreshUserBoards());
};

export const deleteBoard = id => async (dispatch, getState) => {
  const allBoards = getState().entities.boards;
  const { [id]: deletedId, ...rest } = allBoards;
  dispatch(actions.deleteBoard(rest));

  try {
    await boardAPI.delete(id);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
  dispatch(refreshUserBoards());
};
