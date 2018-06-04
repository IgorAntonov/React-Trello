import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as theme } from './theme';

export const rootReducer = combineReducers({
  auth,
  theme
});
