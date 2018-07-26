import { actions } from '../actions';
import { refreshUserBoards, fetchUserBoards } from './common';
import { boardAPI } from './api';

export const renameBoard = (newName, boardId) => async dispatch => {
  try {
    await boardAPI.putName(newName, boardId);
    await dispatch(refreshUserBoards());
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};

export const createBoard = (name, cb) => async dispatch => {
  dispatch(actions.requestBoards());
  try {
    const { data: { id } } = await boardAPI.postNew(name);
    await dispatch(fetchUserBoards());
    cb(id);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};

export const deleteBoard = id => async (dispatch, getState) => {
  const allBoards = getState().entities.boards;
  const { [id]: deletedId, ...rest } = allBoards;
  dispatch(actions.deleteBoard(rest));

  try {
    await boardAPI.delete(id);
    await dispatch(refreshUserBoards());
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};
