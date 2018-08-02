import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from 'Src/ducks';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
