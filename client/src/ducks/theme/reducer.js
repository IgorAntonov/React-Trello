import { createReducer } from 'redux-act';

import { themes } from 'Src/ui';
import { actions } from './actions';

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
