import {
  errorReducer as reducer,
  initialState as entitiesReducerState
} from '../../reducer';
import { actions } from '../../actions';

const initialState = entitiesReducerState.error;

describe('errorReducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle BOARDS_REQUEST', () => {
    expect(reducer(initialState, actions.requestBoards())).toBe('');
  });

  test('should handle BOARDS_FAILURE', () => {
    const payload = 'error message';
    expect(reducer(initialState, actions.failureBoards(payload))).toBe(payload);
  });
});

