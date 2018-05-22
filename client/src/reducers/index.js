// combineReducers + complex selectors
//
// Other files in this folder contains reducers, action types, actions creators, selectors

import { combineReducers } from 'redux';

import { reducer as auth } from './auth';

export const rootReducer = combineReducers({
  auth
});
