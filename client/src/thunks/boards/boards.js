import { refreshUserBoards } from 'Src/thunks/entities';
import { putNewBoardName } from '../api';

export const renameBoard = (newName, boardId) => async dispatch => {
  await putNewBoardName(newName, boardId);
  await dispatch(refreshUserBoards());
};
