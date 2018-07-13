import { createAction } from 'redux-act';

export const actions = {
  openModal: createAction('modal/MODAL_OPEN'),
  closeModal: createAction('modal/MODAL_CLOSE'),
  openCardDetails: createAction(
    'modal/CARD_DETAILS_OPEN',
    (cardId, listId) => ({ cardId, listId })
  ),
  closeCardDetails: createAction('modal/CARD_DETAILS_CLOSE')
};
