/* eslint-disable import/no-extraneous-dependencies */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const mockStore = configureMockStore([thunk]);
