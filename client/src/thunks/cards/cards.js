import { refreshUserBoards } from 'Src/thunks/entities';
import { addCard } from '../api';

export const createCard = (name, listId, cb) => async dispatch => {
  await addCard(name, listId);
  await dispatch(refreshUserBoards());
  cb();
};
