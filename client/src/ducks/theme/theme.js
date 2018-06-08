import { createSelector } from 'reselect';

import { themes } from 'Src/helpers';

export const types = {
  THEME_SET: 'THEME/THEME_SET'
};

export const actions = {
  setTheme: theme => ({
    type: types.THEME_SET,
    theme
  })
};

export const initialState = {
  ...themes.default
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.THEME_SET:
      return { ...state, ...themes[action.theme] };
    default:
      return state;
  }
};

const themeSelector = state => state.theme;
export const getTheme = createSelector(themeSelector, theme => theme);
