import { refreshUserBoards } from 'Src/thunks/entities';
import { actions } from 'Src/ducks/entities';
import { listAPI } from '../api';

export const renameList = (newTitle, listId) => async dispatch => {
  await listAPI.putName(newTitle, listId);
  await dispatch(refreshUserBoards());
};

export const createList = (boardId, title) => async dispatch => {
  await listAPI.postNew(boardId, title);
  await dispatch(refreshUserBoards());
};

export const deleteList = (boardId, listId) => async (dispatch, getState) => {
  const { lists } = getState().entities.boards[boardId];
  const filtered = lists.filter(id => id !== listId);
  const payload = { filtered, boardId };
  dispatch(actions.deleteList(payload));

  await listAPI.delete(boardId, listId);
  await dispatch(refreshUserBoards());
};

