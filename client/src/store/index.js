import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// eslint-disable-next-line
import 'regenerator-runtime/runtime';

import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
