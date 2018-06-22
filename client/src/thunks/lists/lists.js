import { refreshUserBoards } from 'Src/thunks/entities';
import { putNewCardName, postNewList } from '../api';

export const renameList = (newTitle, listId) => async dispatch => {
  await putNewCardName(newTitle, listId);
  await dispatch(refreshUserBoards());
};

export const createList = (boardId, title) => async dispatch => {
  await postNewList(boardId, title);
  await dispatch(refreshUserBoards());
};

