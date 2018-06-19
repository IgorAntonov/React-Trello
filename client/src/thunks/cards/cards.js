import { refreshUserBoards } from 'Src/thunks/entities';
import { addCard } from '../api';

export const createCard = (name, listId) => async dispatch => {
  await addCard(name, listId);
  await dispatch(refreshUserBoards());
};
