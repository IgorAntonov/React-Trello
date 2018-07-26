import {
  boardsReducer as reducer,
  initialState as entitiesReducerState
} from '../../reducer';
import { actions } from '../../actions';

const initialState = entitiesReducerState.boards;

describe('boardsReducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle BOARDS_SUCCESS', () => {
    const payload = {
      boards: { board1: {}, board2: {} }
    };
    expect(reducer(initialState, actions.successBoards(payload)))
      .toEqual({
        ...initialState,
        ...payload.boards
      });
  });

  test('should handle BOARD_DELETE', () => {
    const payload = {
      board1: {},
      board2: {}
    };
    expect(reducer(initialState, actions.deleteBoard(payload))).toEqual(payload);
  });

  test('should handle LIST_DELETE', () => {
    const state = {
      boardId123: {
        lists: [1, 2, 3],
        somethingElse: 'foo'
      },
      boardId456: {
        lists: [4, 5, 6],
        somethingElse: 'bar'
      }
    };
    const payload = {
      boardId: 'boardId123',
      filtered: [1, 3]
    };
    expect(reducer(state, actions.deleteList(payload)))
      .toEqual({
        ...state,
        [payload.boardId]: {
          ...state[payload.boardId],
          lists: payload.filtered
        }
      });
  });
});
