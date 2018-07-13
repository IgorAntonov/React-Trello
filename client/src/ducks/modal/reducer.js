import { createReducer } from 'redux-act';
import { createSelector } from 'reselect';

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

export const getIsThemeModalOpen = createSelector(
  state => state.modal.themeChanger,
  isOpen => isOpen
);

export const getIsBoardsModalOpen = createSelector(
  state => state.modal.boardsMenu,
  isOpen => isOpen
);

export const getIsCardDetailsOpen = createSelector(
  state => state.modal.cardDetails.open,
  isOpen => isOpen
);

export const getOpenedCardId = createSelector(
  state => state.modal.cardDetails.cardId,
  id => id
);

export const getOpenedListId = createSelector(
  state => state.modal.cardDetails.listId,
  id => id
);

