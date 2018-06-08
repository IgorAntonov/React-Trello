import { createSelector } from 'reselect';

export const types = {
  MODAL_OPEN: 'MODAL/MODAL_OPEN',
  MODAL_CLOSE: 'MODAL/MODAL_CLOSE'
};

export const actions = {
  openModal: () => ({
    type: types.MODAL_OPEN
  }),
  closeModal: () => ({
    type: types.MODAL_CLOSE
  })
};

export const initialState = {
  isOpen: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MODAL_OPEN:
      return { ...state, isOpen: true };
    case types.MODAL_CLOSE:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

const modalSelector = state => state.modal.isOpen;
export const getIsModalOpen = createSelector(
  modalSelector,
  isOpen => isOpen
);

