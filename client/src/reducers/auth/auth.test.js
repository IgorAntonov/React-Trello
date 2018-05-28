import { types, actions, reducer, initialState } from './auth';

describe('auth actionCreators', () => {
  test('should create an action on every api request', () => {
    const expectedAction = {
      type: types.API_REQUEST
    };
    expect(actions.requestApi()).toEqual(expectedAction);
  });

  test('should create an action to save current user', () => {
    const payload = {
      foo: 'bar',
      bar: 'foo'
    };
    const expectedAction = {
      type: types.CURRENTUSER_SUCCESS,
      payload
    };
    expect(actions.successCurrentUser(payload)).toEqual(expectedAction);
  });

  test('should create an action to save an error after failed auth', () => {
    const error = {
      message: 'Hi'
    };
    const expectedAction = {
      type: types.AUTH_FAILURE,
      error
    };
    expect(actions.failureAuth(error)).toEqual(expectedAction);
  });

  test('should create an action after failed fetching of current user', () => {
    const expectedAction = {
      type: types.CURRENTUSER_FAILURE
    };
    expect(actions.failureCurrentUser()).toEqual(expectedAction);
  });
});

describe('auth reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle API_REQUEST', () => {
    expect(reducer(initialState, { type: types.API_REQUEST }))
      .toEqual({ ...initialState, isLoading: true });
  });

  test('should handle CURRENTUSER_SUCCESS', () => {
    const payload = {
      email: 'foo',
      name: 'bar'
    };
    expect(reducer(initialState, { type: types.CURRENTUSER_SUCCESS, payload }))
      .toEqual({ ...initialState, user: payload });
  });

  test('should handle CURRENTUSER_FAILURE', () => {
    expect(reducer(initialState, { type: types.CURRENTUSER_FAILURE }))
      .toEqual(initialState);
  });

  test('should handle AUTH_FAILURE', () => {
    const error = {
      message: 'Error!'
    };
    expect(reducer(initialState, { type: types.AUTH_FAILURE, error }))
      .toEqual({ ...initialState, error });
  });
});
