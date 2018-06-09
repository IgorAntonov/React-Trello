import { createSelector } from 'reselect';

import { themes } from 'Src/helpers';

export const types = {
  THEME_REQUEST: 'THEME/THEME_REQUEST',
  THEME_SUCCESS: 'THEME/THEME_SUCCESS',
  THEME_FAILURE: 'THEME/THEME_FAILURE'
};

export const actions = {
  requestTheme: () => ({
    type: types.THEME_REQUEST
  }),
  successTheme: theme => ({
    type: types.THEME_SUCCESS,
    theme
  }),
  failureTheme: error => ({
    type: types.THEME_FAILURE,
    error
  })
};

export const initialState = {
  theme: 'default',
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
        colors: { ...themes[action.theme] },
        isLoading: false
      };
    case types.THEME_FAILURE:
      return {
        ...state,
        theme: 'default',
        colors: { ...themes.default },
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

const themeSelector = state => state.theme.colors;
export const getColors = createSelector(themeSelector, theme => theme);
