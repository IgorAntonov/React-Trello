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
