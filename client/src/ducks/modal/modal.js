import { createSelector } from 'reselect';

export const types = {
  MODAL_OPEN: 'MODAL/MODAL_OPEN',
  MODAL_CLOSE: 'MODAL/MODAL_CLOSE'
};

export const actions = {
  openModal: modalName => ({
    type: types.MODAL_OPEN,
    modalName
  }),
  closeModal: modalName => ({
    type: types.MODAL_CLOSE,
    modalName
  })
};

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

const modalThemeSelector = state => state.modal.themeChanger;
const modalBoardsSelector = state => state.modal.boardsMenu;

export const getIsThemeModalOpen = createSelector(
  modalThemeSelector,
  isOpen => isOpen
);

export const getIsBoardsModalOpen = createSelector(
  modalBoardsSelector,
  isOpen => isOpen
);

