import {
  listsReducer as reducer,
  initialState as entitiesReducerState
} from '../../reducer';
import { actions } from '../../actions';

const initialState = entitiesReducerState.lists;

describe('listsReducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle BOARDS_SUCCESS', () => {
    const payload = {
      lists: { list1: {}, list2: {} }
    };
    expect(reducer(initialState, actions.successBoards(payload)))
      .toEqual({
        ...initialState,
        ...payload.lists
      });
  });

  test('should handle LIST_REORDER', () => {
    const state = {
      listId123: {
        cards: [1, 2, 3],
        somethingElse: 'foo'
      }
    };
    const payload = {
      listId: 'listId123',
      cards: [2, 1, 3]
    };
    expect(reducer(state, actions.reorderList(payload)))
      .toEqual({
        ...state,
        [payload.listId]: {
          ...state[payload.listId],
          cards: payload.cards
        }
      });
  });

  test('should handle LIST_MOVE_FROM_TO', () => {
    const state = {
      id123: {
        cards: [1, 2, 3],
        somethingElse: 'foo'
      },
      id456: {
        cards: [4, 5, 6],
        somethingElse: 'bar'
      }
    };
    const payload = {
      sourceId: 'id123',
      destinationId: 'id456',
      sourceCards: [1, 3],
      destinationCards: [4, 5, 6, 2]
    };
    expect(reducer(state, actions.moveFromToList(payload)))
      .toEqual({
        ...state,
        [payload.sourceId]: {
          ...state[payload.sourceId],
          cards: payload.sourceCards
        },
        [payload.destinationId]: {
          ...state[payload.destinationId],
          cards: payload.destinationCards
        }
      });
  });

  test('should handle CARD_DELETE', () => {
    const state = {
      listId123: {
        cards: [1, 2, 3],
        somethingElse: 'foo'
      }
    };
    const payload = {
      listId: 'id123',
      cards: [1, 2]
    };

    expect(reducer(state, actions.deleteCard(payload)))
      .toEqual({
        ...state,
        [payload.listId]: {
          ...state[payload.listId],
          cards: payload.cards
        }
      });
  });
});
