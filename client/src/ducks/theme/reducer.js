import { createAction, createReducer } from 'redux-act';
import { createSelector } from 'reselect';

import { themes } from 'Src/helpers';

export const actions = {
  requestTheme: createAction('theme/THEME_REQUEST'),
  successTheme: createAction('theme/THEME_SUCCESS'),
  failureTheme: createAction('theme/THEME_FAILURE')
};

export const initialState = {
  name: 'default',
  colors: { ...themes.default },
  isLoading: false,
  error: ''
};

export const reducer = createReducer({
  [actions.requestTheme]: state => ({
    ...state,
    isLoading: true,
    error: ''
  }),
  [actions.successTheme]: (state, payload) => ({
    ...state,
    name: payload,
    colors: { ...themes[payload] },
    isLoading: false
  }),
  [actions.failureTheme]: (state, payload) => ({
    ...state,
    name: 'default',
    colors: { ...themes.default },
    isLoading: false,
    error: payload
  })
}, initialState);

export const getColors = createSelector(
  state => state.theme.colors,
  theme => theme
);
export const getIsLoading = createSelector(
  state => state.theme.isLoading,
  flag => flag
);
