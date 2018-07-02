import { createSelector } from 'reselect';

import { themes } from 'Src/helpers';
import { types } from './actions';

export const initialState = {
  name: 'default',
  colors: { ...themes.default },
  isLoading: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.THEME_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case types.THEME_SUCCESS:
      return {
        ...state,
        name: action.theme,
        colors: { ...themes[action.theme] },
        isLoading: false
      };
    case types.THEME_FAILURE:
      return {
        ...state,
        name: 'default',
        colors: { ...themes.default },
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const getColors = createSelector(
  state => state.theme.colors,
  theme => theme
);
export const getIsLoading = createSelector(
  state => state.theme.isLoading,
  flag => flag
);
