import { reducer, initialState } from '../reducer';
import { actions } from '../actions';

describe('auth reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle AUTH_REQUEST', () => {
    expect(reducer(initialState, actions.requestAuth()))
      .toEqual({ ...initialState, isLoading: true });
  });

  test('should handle CURRENTUSER_SUCCESS', () => {
    const payload = {
      email: 'foo',
      name: 'bar'
    };
    expect(reducer(initialState, actions.successCurrentUser(payload)))
      .toEqual({
        ...initialState,
        user: payload,
        isAuthenticated: true
      });
  });

  test('should handle CURRENTUSER_FAILURE', () => {
    expect(reducer(initialState, actions.failureCurrentUser()))
      .toEqual(initialState);
  });

  test('should handle AUTH_FAILURE', () => {
    const error = { message: 'Error!' };
    expect(reducer(initialState, actions.failureAuth(error)))
      .toEqual({ ...initialState, error });
  });

  test('should handle LOGOUT_SUCCESS', () => {
    expect(reducer(initialState, actions.successLogout()))
      .toEqual(initialState);
  });

  test('should handle LOGOUT_FAILURE', () => {
    expect(reducer(initialState, actions.failureLogout()))
      .toEqual({ ...initialState, isLoading: false });
  });
});
