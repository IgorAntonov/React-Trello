export const types = {
  MODAL_OPEN: 'MODAL/MODAL_OPEN',
  MODAL_CLOSE: 'MODAL/MODAL_CLOSE',
  CARD_DETAILS_OPEN: 'MODAL/CARD_DETAILS_OPEN',
  CARD_DETAILS_CLOSE: 'MODAL/CARD_DETAILS_CLOSE'

};

export const actions = {
  openModal: modalName => ({
    type: types.MODAL_OPEN,
    modalName
  }),
  closeModal: modalName => ({
    type: types.MODAL_CLOSE,
    modalName
  }),
  openCardDetails: (cardId, listId) => ({
    type: types.CARD_DETAILS_OPEN,
    cardId,
    listId
  }),
  closeCardDetails: () => ({
    type: types.CARD_DETAILS_CLOSE
  })
};
