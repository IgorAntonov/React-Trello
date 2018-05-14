// combineReducers + complex selectors
//
// Other files in this folder contains reducers, action types, actions creators, selectors

import { combineReducers } from 'redux';

import main from './main';

export const rootReducer = combineReducers({
  main
});
