import { createSelector } from 'reselect';

import { types } from './actions';

export const initialState = {
  themeChanger: false,
  boardsMenu: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MODAL_OPEN:
      return { ...state, [action.modalName]: true };
    case types.MODAL_CLOSE:
      return { ...state, [action.modalName]: false };
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
