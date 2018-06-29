import { refreshUserBoards } from 'Src/thunks/entities';
import { putNewBoardName, postNewBoard } from '../api';

export const renameBoard = (newName, boardId) => async dispatch => {
  await putNewBoardName(newName, boardId);
  await dispatch(refreshUserBoards());
};

export const createBoard = name => async dispatch => {
  await postNewBoard(name);
  await dispatch(refreshUserBoards());
};
