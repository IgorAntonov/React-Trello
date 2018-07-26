import moxios from 'moxios';

import { mockStore } from 'Config/storeMock';
import { actions as expectedActions } from '../../actions';
import {
  createCard,
  renameCard,
  addCardDesc,
  deleteCard
} from '../../thunks/cards';
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

describe('thunk cards/createCard should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const name = 'name';
    const listId = 'listId';
    const cb = jest.fn();
    setup(200, {});
    const store = mockStore({});

    await store.dispatch(createCard(name, listId, cb));
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual({ type: 'test/REFRESH_USER_BOARDS' });
    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('on failure', async () => {
    const name = 'name';
    const listId = 'listId';
    const cb = jest.fn();
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({});

    await store.dispatch(createCard(name, listId, cb));
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedActions.failureBoards(data.error));
    expect(cb).not.toHaveBeenCalled();
  });
});

describe('thunk cards/renameCard should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const newName = 'name';
    const cardId = 'id';
    setup(200, {});
    const store = mockStore({});

    await store.dispatch(renameCard(newName, cardId));
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedActions.renameCard({ newName, cardId }));
  });

  test('on failure', async () => {
    const newName = 'name';
    const cardId = 'id';
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({});

    await store.dispatch(renameCard(newName, cardId));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.renameCard({ newName, cardId }));
    expect(actions[1]).toEqual(expectedActions.failureBoards(data.error));
  });
});

describe('thunk cards/addCardDesc should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const description = 'desc';
    const cardId = 'id';
    setup(200, {});
    const store = mockStore({});

    await store.dispatch(addCardDesc(description, cardId));
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedActions.addCardDesc({ description, cardId }));
  });

  test('on failure', async () => {
    const description = 'desc';
    const cardId = 'id';
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({});

    await store.dispatch(addCardDesc(description, cardId));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.addCardDesc({ description, cardId }));
    expect(actions[1]).toEqual(expectedActions.failureBoards(data.error));
  });
});

describe('thunk cards/deleteCard should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const cardId = 'cardId';
    const listId = 'listId123';
    setup(200, {});
    const store = mockStore({
      entities: {
        lists: {
          listId123: {
            cards: ['cardId', '1', '2']
          }
        }
      }
    });

    await store.dispatch(deleteCard(cardId, listId));
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedActions.deleteCard({
      cards: ['1', '2'],
      listId
    }));
  });

  test('on failure', async () => {
    const cardId = 'cardId';
    const listId = 'listId123';
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({
      entities: {
        lists: {
          listId123: {
            cards: ['cardId', '1', '2']
          }
        }
      }
    });

    await store.dispatch(deleteCard(cardId, listId));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.deleteCard({
      cards: ['1', '2'],
      listId
    }));
    expect(actions[1]).toEqual(expectedActions.failureBoards(data.error));
  });
});
