import { createSelector } from 'reselect';

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
