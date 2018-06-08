import moxios from 'moxios';

import { mockStore } from 'Config/storeMock';
import { actions as expectedActions } from 'Src/ducks/auth';
import { signup, login, fetchUser } from './auth';

const setup = (status, data) => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status,
      response: data
    });
  });
};

describe('thunk auth/signup should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const data = {
      name: 'name',
      email: 'email',
      password: 'password'
    };
    setup(200, data);
    const store = mockStore({});

    await store.dispatch(signup(data));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestApi());
    expect(actions[1]).toEqual(expectedActions.successCurrentUser(data));
  });

  test('on failure', async () => {
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({});

    await store.dispatch(signup(data));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestApi());
    expect(actions[1]).toEqual(expectedActions.failureAuth(data.error));
  });
});

describe('thunk auth/login should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const data = {
      name: 'name',
      email: 'email',
      password: 'password'
    };
    setup(200, data);
    const store = mockStore({});

    await store.dispatch(login(data.email, data.password));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestApi());
    expect(actions[1]).toEqual(expectedActions.successCurrentUser(data));
  });

  test('on failure', async () => {
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({});

    await store.dispatch(signup(data));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestApi());
    expect(actions[1]).toEqual(expectedActions.failureAuth(data.error));
  });
});

describe('thunk auth/fetchUser should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const data = {
      name: 'name',
      email: 'email',
      password: 'password'
    };
    setup(200, data);
    const store = mockStore({});

    await store.dispatch(fetchUser());
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestApi());
    expect(actions[1]).toEqual(expectedActions.successCurrentUser(data));
  });

  test('on failure', async () => {
    setup(400, {});
    const store = mockStore({});

    await store.dispatch(fetchUser());
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestApi());
    expect(actions[1]).toEqual(expectedActions.failureCurrentUser());
  });
});
