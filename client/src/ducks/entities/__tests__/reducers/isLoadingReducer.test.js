import {
  isLoadingReducer as reducer,
  initialState as entitiesReducerState
} from '../../reducer';
import { actions } from '../../actions';

const initialState = entitiesReducerState.isLoading;

describe('isLoadingReducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle BOARDS_REQUEST', () => {
    expect(reducer(initialState, actions.requestBoards())).toBe(true);
  });

  test('should handle BOARDS_SUCCESS', () => {
    expect(reducer(initialState, actions.successBoards())).toBe(false);
  });

  test('should handle BOARDS_FAILURE', () => {
    expect(reducer(initialState, actions.failureBoards())).toBe(false);
  });
});
