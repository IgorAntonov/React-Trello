import { createSelector } from 'reselect';

export const getColors = createSelector(
  state => state.theme.colors,
  theme => theme
);
export const getIsLoading = createSelector(
  state => state.theme.isLoading,
  flag => flag
);
