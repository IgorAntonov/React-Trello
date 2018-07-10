import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from 'Src/ducks';

const logger = createLogger({ collapsed: true });

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);
