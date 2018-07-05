import { refreshUserBoards } from './common';
import { actions } from '../actions';
import { cardAPI } from './api';

export const createCard = (name, listId, cb) => async dispatch => {
  try {
    await cardAPI.postNew(name, listId);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
  await dispatch(refreshUserBoards());
  cb();
};

export const renameCard = (newName, cardId) => async dispatch => {
  dispatch(actions.renameCard({ newName, cardId }));

  try {
    await cardAPI.putName(newName, cardId);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};
