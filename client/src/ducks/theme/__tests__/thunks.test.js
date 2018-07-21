import moxios from 'moxios';

import { mockStore } from 'Config/storeMock';
import { actions as expectedActions } from '../actions';
import { setTheme, fetchTheme } from '../thunks';

const setup = (status, data) => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status,
      response: data
    });
  });
};

describe('thunk theme/setTheme should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const theme = 'green';
    const data = {
      theme: 'green'
    };
    setup(200, data);
    const store = mockStore({});

    await store.dispatch(setTheme(theme));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestTheme());
    expect(actions[1]).toEqual(expectedActions.successTheme(data.theme));
  });

  test('on failure', async () => {
    const theme = 'green';
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({});

    await store.dispatch(setTheme(theme));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestTheme());
    expect(actions[1]).toEqual(expectedActions.failureTheme(data.error));
  });
});

describe('thunk theme/fetchTheme should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const data = {
      theme: 'green'
    };
    setup(200, data);
    const store = mockStore({});

    await store.dispatch(fetchTheme());
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestTheme());
    expect(actions[1]).toEqual(expectedActions.successTheme(data.theme));
  });

  test('on failure', async () => {
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({});

    await store.dispatch(fetchTheme());
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestTheme());
    expect(actions[1]).toEqual(expectedActions.failureTheme(data.error));
  });
});
