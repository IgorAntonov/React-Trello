import { refreshUserBoards } from 'Src/thunks/entities';
import { putNewCardName } from '../api';

export const renameList = (newTitle, listId) => async dispatch => {
  await putNewCardName(newTitle, listId);
  await dispatch(refreshUserBoards());
};
