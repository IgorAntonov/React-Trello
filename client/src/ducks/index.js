import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as theme } from './theme';
import { reducer as modal } from './modal';
import { reducer as entities } from './entities';

export const rootReducer = combineReducers({
  auth,
  theme,
  modal,
  entities
});
