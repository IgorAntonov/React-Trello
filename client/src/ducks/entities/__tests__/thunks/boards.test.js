import moxios from 'moxios';

import { mockStore } from 'Config/storeMock';
import { actions as expectedActions } from '../../actions';
import { createBoard, renameBoard, deleteBoard } from '../../thunks/boards';
import { fetchUserBoards, refreshUserBoards } from '../../thunks/common';

jest.mock('../../thunks/common');
fetchUserBoards.mockImplementation(() => ({
  type: 'test/FETCH_USER_BOARDS'
}));
refreshUserBoards.mockImplementation(() => ({
  type: 'test/REFRESH_USER_BOARDS'
}));

const setup = (status, data) => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status,
      response: data
    });
  });
};

describe('thunk boards/createBoard should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('on success', async () => {
    const name = 'newBoardName';
    const data = {
      id: 'boardId'
    };
    const cb = jest.fn();

    setup(200, data);
    const store = mockStore({});

    await store.dispatch(createBoard(name, cb));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestBoards());
    expect(actions[1]).toEqual({ type: 'test/FETCH_USER_BOARDS' });
    expect(cb).toHaveBeenCalledWith(data.id);
  });

  test('on failure', async () => {
    const name = 'newBoardName';
    const data = {
      error: { message: 'error message' }
    };
    const cb = jest.fn();

    setup(400, data);
    const store = mockStore({});

    await store.dispatch(createBoard(name, cb));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.requestBoards());
    expect(actions[1]).toEqual(expectedActions.failureBoards(data.error));
    expect(cb).not.toHaveBeenCalled();
  });
});

describe('thunk boards/renameBoard should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const newName = 'name';
    const boardId = 'id';

    setup(200, {});
    const store = mockStore({});

    await store.dispatch(renameBoard(newName, boardId));
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual({ type: 'test/REFRESH_USER_BOARDS' });
  });

  test('on failure', async () => {
    const newName = 'name';
    const boardId = 'id';
    const data = {
      error: { message: 'error message' }
    };

    setup(400, data);
    const store = mockStore({});

    await store.dispatch(renameBoard(newName, boardId));
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedActions.failureBoards(data.error));
  });
});

describe('thunk boards/deleteBoard should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const id = 'id123';

    setup(200, {});
    const store = mockStore({
      entities: {
        boards: {
          id123: {
            somethingElse: 'foo'
          },
          id456: {
            somethingElse: 'bar'
          }
        }
      }
    });

    await store.dispatch(deleteBoard(id));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.deleteBoard({ id456: { somethingElse: 'bar' } }));
    expect(actions[1]).toEqual({ type: 'test/REFRESH_USER_BOARDS' });
  });

  test('on failure', async () => {
    const id = 'id123';
    const data = {
      error: { message: 'error message' }
    };

    setup(400, data);
    const store = mockStore({
      entities: {
        boards: {
          id123: {
            somethingElse: 'foo'
          },
          id456: {
            somethingElse: 'bar'
          }
        }
      }
    });

    await store.dispatch(deleteBoard(id));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.deleteBoard({ id456: { somethingElse: 'bar' } }));
    expect(actions[1]).toEqual(expectedActions.failureBoards(data.error));
  });
});

