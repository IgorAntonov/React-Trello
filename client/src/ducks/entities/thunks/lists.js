import { refreshUserBoards } from './common';
import { actions } from '../actions';
import { listAPI } from './api';

export const renameList = (newTitle, listId) => async dispatch => {
  try {
    await listAPI.putName(newTitle, listId);
    await dispatch(refreshUserBoards());
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};

export const createList = (boardId, title) => async dispatch => {
  dispatch(actions.showListSpinner());
  try {
    await listAPI.postNew(boardId, title);
    await dispatch(refreshUserBoards());
    dispatch(actions.hideListSpinner());
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};

export const deleteList = (boardId, listId) => async (dispatch, getState) => {
  const { lists } = getState().entities.boards[boardId];
  const filtered = lists.filter(id => id !== listId);
  const payload = { filtered, boardId };

  dispatch(actions.deleteList(payload));
  try {
    await listAPI.delete(boardId, listId);
    await dispatch(refreshUserBoards());
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};

export const reorderList = (listId, cardId, sourceIndex, destinationIndex) => async (
  dispatch,
  getState
) => {
  const { cards } = getState().entities.lists[listId];
  const reordered = cards.filter(id => id !== cardId);
  reordered.splice(destinationIndex, 0, cardId);

  const payload = { cards: reordered, listId };
  dispatch(actions.reorderList(payload));

  try {
    await listAPI.reorder(listId, cardId, destinationIndex);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};

export const moveFromToList = (sourceId, destinationId, cardId, start, end) => async (
  dispatch,
  getState
) => {
  const sourceCards = getState().entities.lists[sourceId].cards.filter(id => id !== cardId);

  const destinationCards = [...getState().entities.lists[destinationId].cards];
  destinationCards.splice(end, 0, cardId);

  const payload = {
    sourceId,
    destinationId,
    sourceCards,
    destinationCards
  };
  dispatch(actions.moveFromToList(payload));

  try {
    await listAPI.moveCard(sourceId, destinationId, cardId, end);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};
