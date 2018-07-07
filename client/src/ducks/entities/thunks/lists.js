import { refreshUserBoards } from './common';
import { actions } from '../actions';
import { listAPI } from './api';

export const renameList = (newTitle, listId) => async dispatch => {
  try {
    await listAPI.putName(newTitle, listId);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
  dispatch(refreshUserBoards());
};

export const createList = (boardId, title) => async dispatch => {
  try {
    await listAPI.postNew(boardId, title);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
  dispatch(refreshUserBoards());
};

export const deleteList = (boardId, listId) => async (dispatch, getState) => {
  const { lists } = getState().entities.boards[boardId];
  const filtered = lists.filter(id => id !== listId);
  const payload = { filtered, boardId };
  dispatch(actions.deleteList(payload));

  try {
    await listAPI.delete(boardId, listId);
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
  dispatch(refreshUserBoards());
};

export const reorderList = (listId, cardId, sourseIndex, destinationIndex) => (
  dispatch,
  getState
) => {
  const { cards } = getState().entities.lists[listId];
  const reordered = cards.filter(id => id !== cardId);
  reordered.splice(destinationIndex, 0, cardId);

  const payload = { cards: reordered, listId };
  dispatch(actions.reorderList(payload));
};

export const moveFromToList = (sourceId, destinationId, cardId, start, end) => (
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
};
