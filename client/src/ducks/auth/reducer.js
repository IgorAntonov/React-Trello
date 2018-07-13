import { createReducer } from 'redux-act';
import { createSelector } from 'reselect';

import { actions } from './actions';

export const initialState = {
  user: {},
  error: '',
  isLoading: false,
  isAuthenticated: false
};

export const reducer = createReducer({
  [actions.requestAuth]: state => ({ ...state, error: '', isLoading: true }),
  [actions.successCurrentUser]: (state, payload) => ({
    ...state,
    user: payload,
    error: '',
    isLoading: false,
    isAuthenticated: true
  }),
  [actions.successLogout]: state => ({
    ...state,
    user: {},
    error: '',
    isLoading: false,
    isAuthenticated: false
  }),
  [actions.failureLogout]: state => ({
    ...state,
    isLoading: false
  }),
  [actions.failureAuth]: (state, payload) => ({
    ...state,
    user: {},
    error: payload,
    isLoading: false,
    isAuthenticated: false
  }),
  [actions.failureCurrentUser]: state => ({
    ...state,
    user: {},
    error: '',
    isLoading: false,
    isAuthenticated: false
  })
}, initialState);

export const getUser = createSelector(
  state => state.auth.user,
  user => user
);

export const getError = createSelector(
  state => state.auth.error,
  error => error
);

export const getIsLoading = createSelector(
  state => state.auth.isLoading,
  flag => flag
);

export const getIsAuth = createSelector(
  state => state.auth.isAuthenticated,
  flag => flag
);
