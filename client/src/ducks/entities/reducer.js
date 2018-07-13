import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const initialState = {
  isLoading: false,
  error: '',
  boards: {},
  lists: {},
  cards: {}
};

const errorReducer = createReducer({
  [actions.requestBoards]: () => '',
  [actions.failureBoards]: (state, payload) => payload,
}, initialState.error);

const isLoadingReducer = createReducer({
  [actions.requestBoards]: () => true,
  [actions.successBoards]: () => false,
  [actions.failureBoards]: () => false
}, initialState.isLoading);

const boardsReducer = createReducer({
  [actions.successBoards]: (state, { boards }) => ({
    ...state,
    ...boards
  }),
  [actions.deleteBoard]: (state, payload) => payload,
  [actions.deleteList]: (state, { boardId, filtered }) => ({
    ...state,
    [boardId]: {
      ...state[boardId],
      lists: filtered
    }
  })
}, initialState.boards);

const listsReducer = createReducer({
  [actions.successBoards]: (state, { lists }) => ({
    ...state,
    ...lists
  }),
  [actions.reorderList]: (state, { listId, cards }) => ({
    ...state,
    [listId]: {
      ...state[listId],
      cards
    }
  }),
  [actions.moveFromToList]: (
    state,
    {
      sourceId,
      destinationId,
      sourceCards,
      destinationCards
    }
  ) => ({
    ...state,
    [sourceId]: {
      ...state[sourceId],
      cards: sourceCards
    },
    [destinationId]: {
      ...state[destinationId],
      cards: destinationCards
    }
  }),
  [actions.deleteCard]: (state, { listId, cards }) => ({
    ...state,
    [listId]: {
      ...state[listId],
      cards
    }
  })
}, initialState.lists);

const cardsReducer = createReducer({
  [actions.successBoards]: (state, { cards }) => ({
    ...state,
    ...cards
  }),
  [actions.renameCard]: (state, { cardId, newName }) => ({
    ...state,
    [cardId]: {
      ...state[cardId],
      name: newName
    }
  }),
  [actions.addCardDesc]: (state, { cardId, description }) => ({
    ...state,
    [cardId]: {
      ...state[cardId],
      description
    }
  }),
  [actions.addComment]: (state, { cardId, comments }) => ({
    ...state,
    [cardId]: {
      ...state[cardId],
      comments
    }
  })
}, initialState.cards);

export const reducer = combineReducers({
  isLoading: isLoadingReducer,
  error: errorReducer,
  boards: boardsReducer,
  lists: listsReducer,
  cards: cardsReducer
});
