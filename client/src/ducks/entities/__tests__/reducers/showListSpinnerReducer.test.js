import {
  showListSpinnerReducer as reducer,
  initialState as entitiesReducerState
} from '../../reducer';
import { actions } from '../../actions';

const initialState = entitiesReducerState.showListSpinner;

describe('showListSpinnerReducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle SHOW_LIST_SPINNER', () => {
    expect(reducer(initialState, actions.showListSpinner())).toBe(true);
  });

  test('should handle HIDE_LIST_SPINNER', () => {
    expect(reducer(initialState, actions.hideListSpinner())).toBe(false);
  });
});
