import { createSelector } from 'reselect';

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
