import { createSelector } from 'reselect';

import { types } from './actions';

export const initialState = {
  themeChanger: false,
  boardsMenu: false,
  cardDetails: {
    open: false,
    cardId: '',
    listId: ''
  }
};

const cardDetails = (state, action) => {
  switch (action.type) {
    case types.CARD_DETAILS_OPEN:
      return {
        ...state,
        open: true,
        cardId: action.cardId,
        listId: action.listId
      };
    case types.CARD_DETAILS_CLOSE:
      return {
        ...state,
        open: false,
        cardId: '',
        listId: ''
      };
    default:
      return state;
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MODAL_OPEN:
      return { ...state, [action.modalName]: true };
    case types.MODAL_CLOSE:
      return { ...state, [action.modalName]: false };
    case types.CARD_DETAILS_OPEN:
    case types.CARD_DETAILS_CLOSE:
      return {
        ...state,
        cardDetails: cardDetails(state.cardDetails, action)
      };
    default:
      return state;
  }
};

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

