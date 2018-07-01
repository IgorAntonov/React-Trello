import { refreshUserBoards } from 'Src/thunks/entities';
import { cardAPI } from '../api';

export const createCard = (name, listId, cb) => async dispatch => {
  await cardAPI.postNew(name, listId);
  await dispatch(refreshUserBoards());
  cb();
};
