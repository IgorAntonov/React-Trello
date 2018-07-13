import { createReducer } from 'redux-act';

import { actions } from './actions';

export const initialState = {
  themeChanger: false,
  boardsMenu: false,
  cardDetails: {
    open: false,
    cardId: '',
    listId: ''
  }
};

export const reducer = createReducer({
  [actions.openModal]: (state, payload) => ({
    ...state,
    [payload]: true
  }),
  [actions.closeModal]: (state, payload) => ({
    ...state,
    [payload]: false
  }),
  [actions.openCardDetails]: (state, { cardId, listId }) => ({
    ...state,
    cardDetails: {
      open: true,
      cardId,
      listId
    }
  }),
  [actions.closeCardDetails]: state => ({
    ...state,
    cardDetails: {
      open: false,
      cardId: '',
      listId: ''
    }
  })
}, initialState);

