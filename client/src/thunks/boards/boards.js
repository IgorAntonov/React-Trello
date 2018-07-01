import { actions } from 'Src/ducks/entities';
import { refreshUserBoards } from 'Src/thunks/entities';
import { boardAPI } from '../api';

export const renameBoard = (newName, boardId) => async dispatch => {
  await boardAPI.putName(newName, boardId);
  await dispatch(refreshUserBoards());
};

export const createBoard = name => async dispatch => {
  await boardAPI.postNew(name);
  await dispatch(refreshUserBoards());
};

export const deleteBoard = id => async (dispatch, getState) => {
  const allBoards = getState().entities.boards;
  const { [id]: deletedId, ...rest } = allBoards;
  dispatch(actions.deleteBoard(rest));

  await boardAPI.delete(id);
  await dispatch(refreshUserBoards());
};
