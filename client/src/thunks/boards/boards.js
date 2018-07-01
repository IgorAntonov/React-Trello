import { actions } from 'Src/ducks/entities';
import { refreshUserBoards } from 'Src/thunks/entities';
import { putNewBoardName, postNewBoard, deleteBoardOnServer } from '../api';

export const renameBoard = (newName, boardId) => async dispatch => {
  await putNewBoardName(newName, boardId);
  await dispatch(refreshUserBoards());
};

export const createBoard = name => async dispatch => {
  await postNewBoard(name);
  await dispatch(refreshUserBoards());
};

export const deleteBoard = id => async (dispatch, getState) => {
  const allBoards = getState().entities.boards;
  const { [id]: deletedId, ...rest } = allBoards;
  dispatch(actions.deleteBoard(rest));

  await deleteBoardOnServer(id);
  await dispatch(refreshUserBoards());
};
