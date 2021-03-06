// Add polyfills here or to the entry point in webpack config, if they will be too much
import 'core-js/fn/promise';
// eslint-disable-next-line
import 'regenerator-runtime/runtime';
import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppContainer as App } from './App';
import { store } from './store';

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

