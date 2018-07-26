import {
  cardsReducer as reducer,
  initialState as entitiesReducerState
} from '../../reducer';
import { actions } from '../../actions';

const initialState = entitiesReducerState.cards;

describe('cardsReducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle BOARDS_SUCCESS', () => {
    const payload = {
      cards: { card1: {}, card2: {} }
    };
    expect(reducer(initialState, actions.successBoards(payload)))
      .toEqual({
        ...initialState,
        ...payload.cards
      });
  });

  test('should handle CARD_RENAME', () => {
    const state = {
      id123: {
        name: 'oldName',
        somethingElse: 'foo'
      }
    };
    const payload = {
      cardId: 'id123',
      newName: 'newName'
    };
    expect(reducer(state, actions.renameCard(payload)))
      .toEqual({
        ...state,
        [payload.cardId]: {
          ...state[payload.cardId],
          name: payload.newName
        }
      });
  });

  test('should handle CARD_ADD_DESC', () => {
    const state = {
      id123: {
        description: '',
        somethingElse: 'foo'
      }
    };
    const payload = {
      cardId: 'id123',
      description: 'lorem ipsum'
    };

    expect(reducer(state, actions.addCardDesc(payload)))
      .toEqual({
        ...state,
        [payload.cardId]: {
          ...state[payload.cardId],
          description: payload.description
        }
      });
  });

  test('should handle CARD_ADD_COMMENT', () => {
    const state = {
      id123: {
        comments: [],
        somethingElse: 'foo'
      }
    };
    const payload = {
      cardId: 'id123',
      comments: [1, 2, 3]
    };

    expect(reducer(state, actions.addComment(payload)))
      .toEqual({
        ...state,
        [payload.cardId]: {
          ...state[payload.cardId],
          comments: payload.comments
        }
      });
  });
});
