// Add polyfills here or to the entry point in webpack config, if they will be too much
import 'core-js/fn/promise';

import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { HotApp as App } from './components/App';
import { store } from './store';
import { theme } from './components/shared';


ReactDOM.render(
  <Provider store={store} >
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
