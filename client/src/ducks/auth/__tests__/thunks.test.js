import moxios from 'moxios';

import { mockStore } from 'Config/storeMock';
import { actions as expectedActions } from '../actions';
import { signupUser, loginUser, fetchUser, logoutUser } from '../thunks';

const setup = (status, data) => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status,
      response: data
    });
  });
};

describe('thunk auth/signupUser should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const params = {
      name: 'name',
      email: 'email',
      password: 'password'
    };
    const data = {
      _id: 'userId',
      name: 'name'
    };
    setup(200, data);
    const store = mockStore({});

    await store.dispatch(signupUser(params));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestAuth());
    expect(actions[1]).toEqual(expectedActions.successCurrentUser({
      userId: data._id,
      username: data.name
    }));
  });

  test('on failure', async () => {
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({});

    await store.dispatch(signupUser(data));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestAuth());
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
    const params = {
      email: 'email',
      password: 'password'
    };
    const data = {
      _id: 'userId',
      name: 'name'
    };
    setup(200, data);
    const store = mockStore({});

    await store.dispatch(loginUser(params));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestAuth());
    expect(actions[1]).toEqual(expectedActions.successCurrentUser({
      userId: data._id,
      username: data.name
    }));
  });

  test('on failure', async () => {
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({});

    await store.dispatch(signupUser(data));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestAuth());
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
      _id: 'userId',
      name: 'name'
    };
    setup(200, data);
    const store = mockStore({});

    await store.dispatch(fetchUser());
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestAuth());
    expect(actions[1]).toEqual(expectedActions.successCurrentUser({
      userId: data._id,
      username: data.name
    }));
  });

  test('on failure', async () => {
    setup(400, {});
    const store = mockStore({});

    await store.dispatch(fetchUser());
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestAuth());
    expect(actions[1]).toEqual(expectedActions.failureCurrentUser());
  });
});

describe('thunk auth/logoutUser should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const data = {
      message: 'ok'
    };
    setup(200, data);
    const store = mockStore({});

    await store.dispatch((logoutUser()));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestAuth());
    expect(actions[1]).toEqual(expectedActions.successLogout());
  });

  test('on failure', async () => {
    setup(400, {});
    const store = mockStore({});

    await store.dispatch((logoutUser()));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestAuth());
    expect(actions[1]).toEqual(expectedActions.failureLogout());
  });
});

