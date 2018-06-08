import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// eslint-disable-next-line
import 'regenerator-runtime/runtime';

import { rootReducer } from 'Src/ducks';

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

