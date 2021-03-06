import { refreshUserBoards } from './common';
import { actions } from '../actions';
import { cardAPI } from './api';

export const createCard = (name, listId, cb) => async dispatch => {
  try {
    await cardAPI.postNew(name, listId);
    await dispatch(refreshUserBoards());
    cb();
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
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

  await cardAPI.postComment(comment, cardId, createAt);
};

export const deleteCard = (cardId, listId) => async (dispatch, getState) => {
  const { cards } = getState().entities.lists[listId];
  const filtered = cards.filter(id => id !== cardId);
  const payload = {
    cards: filtered,
    listId
  };
  dispatch(actions.deleteCard(payload));

  try {
    await cardAPI.delete(cardId, listId);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};

