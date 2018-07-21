import { reducer, initialState } from '../reducer';
import { actions } from '../actions';

describe('modal reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle MODAL_OPEN', () => {
    const payload = 'any modal';
    expect(reducer(initialState, actions.openModal(payload)))
      .toEqual({ ...initialState, [payload]: true });
  });

  test('should handle MODAL_CLOSE', () => {
    const payload = 'any modal';
    expect(reducer(initialState, actions.closeModal(payload)))
      .toEqual({ ...initialState, [payload]: false });
  });

  test('should handle OPEN_CARD_DETAILS', () => {
    const listId = '123';
    const cardId = '456';
    expect(reducer(initialState, actions.openCardDetails(cardId, listId)))
      .toEqual({
        ...initialState,
        cardDetails: {
          open: true,
          cardId,
          listId
        }
      });
  });

  test('should handle CARD_DETAILS_CLOSE', () => {
    expect(reducer(initialState, actions.closeCardDetails()))
      .toEqual({
        ...initialState,
        cardDetails: {
          open: false,
          cardId: '',
          listId: ''
        }
      });
  });
});
