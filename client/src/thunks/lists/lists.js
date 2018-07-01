import { refreshUserBoards } from 'Src/thunks/entities';
import { listAPI } from '../api';

export const renameList = (newTitle, listId) => async dispatch => {
  await listAPI.putName(newTitle, listId);
  await dispatch(refreshUserBoards());
};

export const createList = (boardId, title) => async dispatch => {
  await listAPI.postNew(boardId, title);
  await dispatch(refreshUserBoards());
};

