import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as theme } from './theme';
import { reducer as modal } from './modal';
import { reducer as boards } from './boards';
import { reducer as lists } from './lists';

export const rootReducer = combineReducers({
  auth,
  theme,
  modal,
  boards,
  lists
});
