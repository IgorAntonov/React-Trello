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

export const addCardDesc = (description, cardId) => async dispatch => {
  dispatch(actions.addCardDesc({ description, cardId }));

  try {
    await cardAPI.putDescription(description, cardId);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};

export const addComment = (comment, cardId) => async (dispatch, getState) => {
  const { comments } = getState().entities.cards[cardId];
  const { username } = getState().auth.user;
  const createAt = Date.now();

  const newComments = comments
    .concat([{ body: comment, author: username, createAt }])
    .sort((a, b) => a.createAt < b.createAt);

  dispatch(actions.addComment({
    comments: newComments,
    cardId
  }));
};
