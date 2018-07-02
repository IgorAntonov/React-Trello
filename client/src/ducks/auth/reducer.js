import { createSelector } from 'reselect';

import { types } from './actions';

export const initialState = {
  user: {},
  error: '',
  isLoading: false,
  isAuthenticated: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.API_REQUEST:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case types.CURRENTUSER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        isLoading: false,
        isAuthenticated: true
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        error: '',
        isLoading: false,
        isAuthenticated: false
      };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case types.AUTH_FAILURE:
      return {
        ...state,
        user: {},
        error: action.error,
        isLoading: false,
        isAuthenticated: false
      };
    case types.CURRENTUSER_FAILURE:
      return {
        ...state,
        user: {},
        error: '',
        isLoading: false,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export const getUser = createSelector(state => state.auth.user, user => user);
export const getError = createSelector(state => state.auth.error, error => error);
export const getIsLoading = createSelector(state => state.auth.isLoading, flag => flag);
export const getIsAuth = createSelector(state => state.auth.isAuthenticated, flag => flag);
