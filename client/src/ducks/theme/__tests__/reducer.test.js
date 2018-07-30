import { themes } from 'Src/ui';
import { reducer, initialState } from '../reducer';
import { actions } from '../actions';

describe('theme reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle THEME_REQUEST', () => {
    expect(reducer(initialState, actions.requestTheme()))
      .toEqual({
        ...initialState,
        isLoading: true
      });
  });

  test('should handle THEME_SUCCESS', () => {
    const payload = 'green';
    expect(reducer(initialState, actions.successTheme(payload)))
      .toEqual({
        ...initialState,
        name: payload,
        colors: { ...themes[payload] },
        isLoading: false
      });
  });

  test('should handle THEME_FAILURE', () => {
    const payload = 'error';
    expect(reducer(initialState, actions.failureTheme(payload)))
      .toEqual({
        ...initialState,
        name: 'default',
        colors: { ...themes.default },
        isLoading: false,
        error: payload
      });
  });
});
